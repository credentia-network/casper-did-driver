const CasperDidResolver = require("casper-did-resolver");
const core = require("@veramo/core");
const did_resolver = require("@veramo/did-resolver");
const Keys = require("casper-js-sdk");

const CONTRACT_DID_HASH = "hash-2fe97b396d1e362c8fd796eab6f6d57814476ed199a5daab0b7afa5023a84429"

const agent = core.createAgent({
  plugins: [
      new did_resolver.DIDResolverPlugin({
          resolver: new CasperDidResolver.CasperDidResolver({
              contract: CONTRACT_DID_HASH,
              rpcUrl: 'http://159.65.118.250:7777/rpc'
          }),
      }),
  ],
});

const express = require('express')
const app = express()

app.get('/1.0/identifiers/*', function (req, res) {
  const url = req.url
  const regex = /\/1.0\/identifiers\/(did:.*)/
  const did = regex.exec(url)[1]

  console.log('Resolving DID: ' + did)

  agent.resolveDid({
    didUrl: didHashHex,
    options: { accept: 'some_attribute_type'} // Optional
    }).then((result) => {
      res.send(result)
    })
    .catch((err) => {
      if (err.message.match(/(Unsupported DID method:)|(Invalid DID)|(Not a valid ethr DID:)/)) {
        res.status(400).send(err.message)
      } else {
        console.error(err)
        res.status(500).send(err.message)
      }
    })
})

module.exports = app
