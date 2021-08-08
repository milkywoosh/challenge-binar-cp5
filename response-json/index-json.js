module.exports = {

    success: (arg_response, arg_message) => {
        arg_response.send(200).json({
            status: "success",
            arg_message,
        })
    },
    fail: (arg_response, arg_message) => {
        arg_response.send(200).json({
            status: "fail",
            arg_message,
        })

    },
    redirect: (arg_response, arg_message) => {
        arg_response.status(300).json({
            status: "server redirected",
            arg_message,
        });
    },
    clientError: (arg_response, arg_message) => {
        arg_response.status(400).json({
            status: "client error",
            arg_message,
        });
    },
    serverError: (arg_response, arg_message) => {
        arg_response.status(500).json({
            status: "server error",
            arg_message,
        });
    },

}