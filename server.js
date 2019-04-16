/**
 * Development Server
 * ------------------------------------------------------
 * Very basic static file server used during Fossabot development to test out new translations
 * locally, so we don't have to deploy them. Safe to ignore this, unless you find a use for it.
 */
const handler = require("serve-handler");
const http = require('http');

const config = {
  public: "src",
  directoryListing: false,
  headers: [{
    source: "**/*.json",
    headers: [{
      key: "Access-Control-Allow-Origin",
      value: "*",
    }, {
      key: "Access-Control-Allow-Headers",
      value: "*",
    }],
  }],
};

const server = http.createServer((req, res) => handler(req, res, config));

const port = process.env.PORT || 6500;
server.listen(6500, () => console.log(`Development server started on port ${port}`));
