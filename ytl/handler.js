"use strict"

module.exports = async (event, context) => {
    const result =             {
        status: "Drink tea, not coffee. Check my HTTP code!"
    };

    const teapot = 418;
    return context
        .status(teapot)
        .headers({"Content-type": "application/json"})
        .succeed(result);
}
