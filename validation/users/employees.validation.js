
const joi = require("@hapi/joi");

const employeeschema = {
    employee: joi.object({
      user_name: joi.string().max(100).required(),
      fathers_name: joi.string().max(100).required(),
      gender: joi.string().max(12).required(),
      email: joi.string().email().required(),
      mobile: joi.number().max(11).required(),
      address: joi.string().max(100).required(),
      date_of_joining: joi.required(),
      date_of_birth: joi.required(),
      blood_group: joi.required(),
      height: joi.required(),
      weight: joi.required(),
      type_of_subscription: joi.required(),
      marital_status: joi.string().required(),
      emergency_contact: joi.string().max(11).required(),
      reference_name: joi.string().max(100).required(),
      reference_mobile_number: joi.string().max(11).required(),
    // user_type:joi.required()
  }),
};

module.exports = employeeschema;
