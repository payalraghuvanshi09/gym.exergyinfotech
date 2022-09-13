const joi = require("@hapi/joi");

const attendanceschema = {
    attendance: joi.object({
        user_id: joi.required(),
        date: joi.required(),
        login_time: joi.required(),
        logout_time: joi.required(),




    } )
}
   

    module.exports = attendanceschema;
    