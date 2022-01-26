# Beep-Cli
![Beep-cli-Screenshot](./images/cli.PNG)

A cli module built in node.js. This module will show diffent types of alerts like, success, error, info and warnings.

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
const beep = require("./index")

beep({
    type:`success`,
    msg:`It works !`,
    name:`` // It's custom defind name for the beep, It's optional.
})

beep({
    type:`error`,
    msg:`Something went wrong.`,
    name:``

})

beep({
    type:`info`,
    msg:`Information about the cli.`,
    name:``
})

beep({
    type:`warning`,
    msg:`Sussy Warning !!`,
    name:``
})
```
