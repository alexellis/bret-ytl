"use strict"

module.exports = async (event, context) => {
    const result =             {
        status: "Drink tea, not coffee. Check my HTTP code!"
    };

    return context
        .status(418) // I'm a teapot
        .succeed(result);
}
