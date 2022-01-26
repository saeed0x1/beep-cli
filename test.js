const beep = require("./index")

beep({
    type:`success`,
    msg:`It works.`,
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

beep({
    type:`success`,
    msg:`Custom name works.`,
    name:`CUSTOM NAME`
})