const {
    user, employee
} = require("../users/employees.validation");

module.exports = {
    addemployeeValidation: async (req, res, next) => {
        // const value = await employee.validate(req.body);
        const { value, error } = employee.validate();
        if (error && error.details) {
          let data = {error: true, errorData: error.details };
          return data;
        } else {
            return value;
        }
        
    }
};