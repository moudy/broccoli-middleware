# broccoli-middleware

Use Broccoli as middleware in connect apps so you don't need to run a seperate asset server. Useful for development... don't use this in production.

You can pass `useLiveReload` (and optionally, `liveReloadPort`) to run a LiveReload server on the side.

```js
var app = require('express')();

if ('development' === app.get('env')) {
  // Uses Brocfile.js for config like normal
  app.use(require('broccoli-middleware')());
}
```
