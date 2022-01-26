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