var express = require("express");
var app = express();
var cfenv = require("cfenv");
var bodyParser = require("body-parser");
var rp = require("request-promise");

var env = process.env.NODE_ENV || "dev";
var conf = require("./config/config-"+env);


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


// Enable reverse proxy support in Express.
app.enable("trust proxy");

// Add a handler to inspect the req.secure flag or see if app is running on localhost, this allows us
// to know whether the request was via http or https.
app.use (function (req, res, next) {
  if (req.secure || req.hostname == "localhost") {
    // request was via https, so do no special handling
    next();
  } else {
    // request was via http, so redirect to https
    res.redirect("https://" + req.headers.host + req.url);
  }

});


// Point static path to dist
app.use(express.static(__dirname + "/dist"));

// default client_id/secret from environment variables. VCAP_SERVICES will override later if available
var dde_client_id = "b773013b-8dba-4619-81bd-8779dbd0b810";//process.env.DDE_CLIENT_ID;
var dde_client_secret = "7b631bf4d5836940afbd0c490c1d948c1860f221";//process.env.DDE_SECRET;

console.log("ENVIROMENT: "+env);


/* Endpoint to create a new DDE session.
* Send a POST request to https://dde-us-south.analytics.ibm.com/daas/v1/session with body
* {
* 	"expiresIn": 3600,
*   "webDomain": "https://myportal.mybluemix.net"
* }
*/
app.post("/api/dde/session", function(request, response) {
  console.log(dde_client_id);
  var options = {
    method: "POST",
    uri: "https://dde-us-south.analytics.ibm.com/daas/v1/session", //conf.dde_session_uri,
    headers: {
      "Authorization": "Basic " + "Yjc3MzAxM2ItOGRiYS00NjE5LTgxYmQtODc3OWRiZDBiODEwOjdiNjMxYmY0ZDU4MzY5NDBhZmJkMGM0OTBjMWQ5NDhjMTg2MGYyMjE=",//new Buffer(dde_client_id + ":" + dde_client_secret).toString("base64"),
      "content-type": "application/json"
    },
    body: {
      "expiresIn": 3600,
      //webDomain: conf.web_domain-
      "webDomain": "http://localhost:3000" // for local testing
      //"webDomain": "https://{app-name}.mybluemix.net" // for deployment
    },
    json: true // Automatically stringifies the body to JSON
  };

  rp(options)
    .then(function (parsedBody) {
      // POST succeeded...
      console.log("post suceeded");
      console.log(JSON.stringify(parsedBody));
      response.send(parsedBody);
    })
    .catch(function (err) {
      // POST failed...
      console.log("post failed!");
      console.log(JSON.stringify(err));
      response.send(err);
    });

});

// load local VCAP configuration and service credentials
var vcapLocal;
try {
  vcapLocal = require("./vcap-local.json");
  console.log("Loaded local VCAP", vcapLocal);
} catch (e) {
  console.log("Local vcap not loaded");
}

const appEnvOpts = vcapLocal ? { vcap: vcapLocal} : {};

console.log("appEnvOpts:" + JSON.stringify(appEnvOpts));


var appEnv = cfenv.getAppEnv(appEnvOpts);
console.log("appEnv:" + JSON.stringify(appEnv));


console.log("appEnv services:" + JSON.stringify(appEnv.services["dynamic-dashboard-embedded"]));


if (appEnv.services["dynamic-dashboard-embedded"] || appEnv.getService(/dynamic-dashboard-embedded/)) {
  var ddecred;
  // fetch DDE credentials
  if (appEnv.services["dynamic-dashboard-embedded"]) {
    // CF service named "dynamic-dashboard-embedded"
    ddecred = appEnv.services["dynamic-dashboard-embedded"][0].credentials;
    console.log("cf service dde credentials: " + JSON.stringify(ddecred));
  } else {
    // user-provided service with "dynamic-dashboard-embedded" in its name
    ddecred = appEnv.getService(/dynamic-dashboard-embedded/).credentials;
    console.log("user provided service dde credentials: " + ddecred);
  }

  dde_client_id = ddecred.client_id;
  dde_client_secret = ddecred.client_secret;
  console.log("dde credentials - client_id: " + dde_client_id);
}


// Catch dashboard route and return the index file
app.get("/dashboard", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

// Any requests that reach this far can be proxied to daas server
if (process.env.PROXY_DDE_REQUESTS && process.env.PROXY_DDE_REQUESTS == "true") {
  const daasProxy = require("./lib/daasProxy");
  app.use(daasProxy(conf.dde_base_url));
}


var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
