const app = require('./app')

app.server = app.listen(8081, function () {
  console.log('Casler Resolver app listening on port 8081...')
})
