# Casper DID Driver

Driver for the Casper DID method to be used in the [Universal Resolver](https://github.com/decentralized-identity/universal-resolver). 

This project structure is derived from [uport-did-driver](https://github.com/uport-project/uport-did-driver)

The file `src/server.js` is an small Express Node app acting as a thin wrapper around the [Javascript DID resolver](https://github.com/decentralized-identity/did-resolver). It listens to port 8081.

This resolver supports only Casper DID method with the following resolver implementation: [https://github.com/credentia-network/casper-did-resolver]()

## Curl Tests

Run service with 
```
npm start
```

then run queries

```
curl -X GET http://localhost:8081/1.0/identifiers/did:casper:01706798f37e5e10ba90fcfa0ac81e2564a8d3f78edacbe84050c20e520891f70a
```

## Example DIDs

* `did:casper:01706798f37e5e10ba90fcfa0ac81e2564a8d3f78edacbe84050c20e520891f70a`

