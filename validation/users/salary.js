const joi = require("@hapi/joi");

const salaryschema = {
    salary: joi.object({
      monthly:  joi.string().max(100).required(),
        dates:  joi.string().max(100).required(),
       employee:  joi.string().max(100).required(),
       




    } )
}
   

    module.exports = salaryschema;
    