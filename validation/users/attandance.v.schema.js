const {
    attendance
} = require("../users/attendance");

module.exports = {
    addattendanceValidation: async (req, res, next) => {
        const value = await attendance.validate(req.body);
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next();
        }
    }
};