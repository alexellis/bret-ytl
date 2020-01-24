"use strict"

module.exports = async (event, context) => {
    const result =             {
        status: "Use Linux, not MacOS"
    };

    return context
        .status(418) // I'm a teapot
        .succeed(result);
}
