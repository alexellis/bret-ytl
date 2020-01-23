"use strict"

module.exports = async (event, context) => {
    let err;
    const result =             {
        status: "Input: " + JSON.stringify(event.body)
    };

    return context
        .status(200)
        .succeed(result);
}
