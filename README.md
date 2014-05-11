# broccoli-middleware

Use Broccoli as middleware in connect apps so you don't need to run a seperate asset server. Useful for development... don't use this in production.

```js
var app = require('express')();

if ('development' === app.get('env')) {
  // Uses Brocfile.js for config like normal
  app.use(require('broccoli-middleware'));
}
```
