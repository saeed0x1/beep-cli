# Alert-Cli

A cli module built in node.js. This will show diffent types of alerts like, success, error, info and warnings.

# Installation

```sh
npm install alert-cli
```

# Usage

```sh
const alert = require("alert-cli")
```

# Example code

```js
const alert = require("./index")

alert({
    type:`success`,
    msg:`It works !`,
    name:`BAKA` // It's custom defind name for the alert
})

alert({
    type:`error`,
    msg:`Something went wrong.`
})

alert({
    type:`info`,
    msg:`Information about the cli.`,
})

alert({
    type:`warning`,
    msg:`Sussy Warning !!`
})
```
