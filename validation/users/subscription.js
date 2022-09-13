const joi = require("@hapi/joi");

const subscriptionschema = {
 subscription: joi.object({ 
     name: joi.string().max(100).required(),
      duration: joi.string().max(11).required(),
       price: joi.string().max(11).required(),
     




    } )
}
   

    module.exports = subscriptionschema;
    