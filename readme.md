# Beep-Cli

A cli module built in node.js. This will show diffent types of alerts like, success, error, info and warnings.

# Installation

```sh
npm install beep-cli
```

# Usage

```sh
const beep = require("beep-cli")
```

# Example code

```js
const beep = require("beep-cli")

beep({
    type:`success`,
    msg:`It works !`,
    name:`BAKA` // It's custom defind name for the beep
})

beep({
    type:`error`,
    msg:`Something went wrong.`
})

beep({
    type:`info`,
    msg:`Information about the cli.`,
})

beep({
    type:`warning`,
    msg:`Sussy Warning !!`
})
```
