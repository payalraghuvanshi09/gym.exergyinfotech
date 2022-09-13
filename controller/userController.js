const app = require('express')
const { createEmployees } = require('../model/services')
const { getEmployees } = require('../model/services')
const { editEmployeesById } = require('../model/services')
const { updateEmployeesById } = require('../model/services')
const { deleteEmployees } = require('../model/services')
const { addEmployees } = require('../model/services')
const { createCustomers } = require('../model/services')
const { getCustomers } = require('../model/services')
const { editCustomersById } = require('../model/services')
const { updateCustomersById } = require('../model/services')
const { deleteCustomers } = require('../model/services')
const { addCustomers } = require('../model/services')
const { createAttendance } = require('../model/services')
const { checkAttendance } = require('../model/services')
const { getAttendance } = require('../model/services')
const { editAttendanceById } = require('../model/services')
const { updateAttendanceById } = require('../model/services')
const { deleteAttendance } = require('../model/services')
const { addAttendance } = require('../model/services')
const { createSubscriptions } = require('../model/services')
const { getSubscriptions } = require('../model/services')
const { editSubscriptionsById } = require('../model/services')
const { updateSubscriptionsById } = require('../model/services')
const { addSubscriptions } = require('../model/services')
const { createSalary } = require('../model/services')
const { getSalary } = require('../model/services')
const { getVisitors } = require('../model/services')
const { createVisitors } = require('../model/services')
const { visitorHistoryById } = require('../model/services')
const { addVisitors } = require('../model/services')
const { editVisitorsById } = require('../model/services')
const { updateVisitorsById } = require('../model/services')
const { deleteVisitors } = require('../model/services')
// const { checkVisitors} = require('../model/services')
const { getFollowup } = require('../model/services')
const { getUpcomingFollowup } = require('../model/services')
const { createFollowup } = require('../model/services')
const { addFollowup } = require('../model/services')
const { checkFollowup } = require('../model/services')
const { addSalary } = require('../model/services')
const { editSalaryById } = require('../model/services')
const { updateSalaryById } = require('../model/services')
const { deleteSalary } = require('../model/services')
const { deleteSubscriptions } = require('../model/services')
const { getVisitorsById } = require('../model/services')
const { employee_dash } = require('../model/services')
const { customers_dash } = require('../model/services')
const { attendance_dash } = require('../model/services')
const { visitor_dash } = require('../model/services')
const { getData } = require('../model/services')

const { addemployeeValidation } = require("../validation/users/employee.v.schema");
const { employee } = require('../validation/users/employees.validation')



module.exports = {

  dashboard: (req, res, next) => {
    employee_dash(req, (err, totalEmployees) => {
      console.log(" totalEmployees", totalEmployees);
      if (err) {
        // console.log(err);
        return;
      }
      customers_dash(req, (err, totalCustomers) => {
        console.log("totalCustomers", totalCustomers);
        if (err) {
          // console.log(err);
          return;
        }
        attendance_dash(req, (err, totalAttendance) => {
          console.log("totalAttendance", totalAttendance);
          if (err) {
            // console.log(err);
            return;
          }
          visitor_dash(req, (err, totalVisitors) => {
            console.log("totalVisitors", totalVisitors);
            if (err) {
              // console.log(err);
              return;
            }
            getFollowup((err, results) => {
              console.log("ressss", results);
              if (err) {
                // console.log(err);
                return;
              }
              res.render("pages/dashboard/index", { title: "Express", data: results, totalEmployees: totalEmployees, totalCustomers: totalCustomers, totalAttendance: totalAttendance, totalVisitors: totalVisitors, active_nav: "dashboard" });
            });
          });
        });
      });
    }); 

  },

  getEmployees: (req, res, next) => {
    getEmployees((err, results) => {

      if (err) {
        console.log(err);
        // res.send(err.message)

        return;
      }

      res.render("pages/employees/index", { title: "Express", data: results, active_nav: "employees" });
    });
  },

  addEmployees: (req, res, next) => {
    console.log("resss__emppppppppp", res);
    getSubscriptions((err, results) => {
      console.log("resssssss", results);
      if (err) {
        console.log(err);
        // res.send(err.message)
        return;
      }
      // req.flash('message', ' get successfully!!!')
      // req.flash('success', `You've been successfully redirected to the Message route!`)
      res.render("pages/employees/create", { title: "Express", data: results, active_nav: "employees" });
    });
  },

  createEmployees: (req, res, next) => {
    console.log("body=>", req.body);
    createEmployees(req.body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      // req.flash('message', ' get successfully!!!')
      // req.flash('success', `You've been successfully redirected to the Message route!`)
      res.redirect('/employees/');
    });
  },

  editEmployeesById: (req, res, next) => {
    getSubscriptions((err, subs) => {
      // console.log(subs);
      if (err) {
        // console.log(err);
        return;
      }

      editEmployeesById(req, (err, results) => {
        // console.log(results);
        if (err) {
          // console.log(err);
          return;
        }
        res.render("pages/employees/edit", { title: "Express", data: results, subs: subs });
      });
    });
  },

  updateEmployeesById: (req, res, next) => {
    updateEmployeesById(req.body, (err, results) => {
      // console.log("up=>",req.body);
      if (err) {
        // console.log(err);
        return;
      }
      res.redirect('/employees/');
      next();
    })
  },

  deleteEmployees: (req, res, next) => {
    deleteEmployees(req, (err, results) => {
      // console.log(results);
      if (err) {
        // console.log(err);
        return;
      }
      res.redirect('/employees/');
      next();
    });
  },

  getCustomers: (req, res, next) => {
    getCustomers((err, results) => {
      // console.log("res=>",results);
      console.log("results=>", results);

      if (err) {
        // console.log(err);
        return;
      }
      res.render("pages/customers/index", { title: "Express", data: results, active_nav: "customers" });
    });
  },

  addCustomers: (req, res, next) => {
    getSubscriptions((err, results) => {
      // console.log(results);
      if (err) {
        // console.log(err);
        return;
      }
      res.render("pages/customers/create", { title: "Express", data: results, active_nav: "customers" });
    });

  },

  editCustomersById: (req, res, next) => {
    getSubscriptions((err, subs) => {
      // console.log(subs);
      if (err) {
        // console.log(err);
        return;
      }
      editCustomersById(req, (err, results) => {
        // console.log(results);
        if (err) {
          // console.log(err);
          return;
        }
        // console.log("subs--->",subs);
        res.render("pages/customers/edit", { title: "Express", data: results, subs: subs, active_nav: "customers" });
      });
    });

  },

  updateCustomersById: (req, res, next) => {
    updateCustomersById(req.body, (err, results) => {
      // console.log("body=>",req.body);
      if (err) {
        // console.log(err);
        return;
      }
      res.redirect('/customers/');
      next();
    })
  },

  deleteCustomers: (req, res, next) => {
    deleteCustomers(req, (err, results) => {
      // console.log(results);
      if (err) {
        // console.log(err);
        return;
      }
      res.redirect('/customers/');
      next();
    });
  },

  createCustomers: (req, res, next) => {
    createCustomers(req.body, (err, results) => {
      if (err) {
        // console.log(err);
        return;
      }
      res.redirect('/customers/');
    });
  },

  getAttendance: (req, res, next) => {
    getAttendance((err, results) => {
      if (err) {
        // console.log(err);
        return;
      }
      res.render("pages/attendance/index", { title: "Express", data: results, message: '', active_nav: "attendance" });
    });
  },

  addAttendance: (req, res, next) => {
    getEmployees((err, results) => {
      if (err) {
        // console.log(err);
        return;
      }
      res.render("pages/attendance/create", { title: "Express", data: results, active_nav: "attendance" });
    });
  },

  createAttendance: (req, res, next) => {

    // // console.log("body=>", req.body);
    checkAttendance(req.body, (err, checkresults) => {
      console.log("checkresults=>", checkresults.length);
      if (checkresults == 0) {
        createAttendance(req.body, (err, results) => {
          // console.log(results);
          if (err) {
            // console.log(err);
            return;
          }
          // res.render("pages/attendance", { title: "Express", data: results });
          res.redirect('/attendance/');
        });
      } else {
        // req.flash('message', 'Employee already created!')
        res.send('Employee already created')
      }
    })

  },

  editAttendanceById: (req, res, next) => {
    editAttendanceById(req, (err, results) => {
      // console.log("res=>",results);
      if (err) {
        // console.log(err);
        return;
      }
      res.render("pages/attendance/edit", { title: "Express", data: results, active_nav: "attendance" });
    });
  },

  updateAttendanceById: (req, res, next) => {
    updateAttendanceById(req.body, (err, results) => {
      if (err) {
        // console.log(err);
        return;
      }
      res.redirect('/attendance/');
      next();
    })
  },

  deleteAttendance: (req, res, next) => {
    deleteAttendance(req, (err, results) => {
      // console.log(results);
      if (err) {
        // console.log(err);
        return;
      }
      res.redirect('/attendance/');
      next();
    });
  },

  getSubscriptions: (req, res, next) => {
    getSubscriptions((err, results) => {
      if (err) {
        // console.log(err);
        return;
      }
      res.render("pages/subscriptions/index", { title: "Express", data: results, active_nav: "subscriptions" });
    });
  },

  addSubscriptions: (req, res, next) => {
    res.render("pages/subscriptions/create", { title: "Express", active_nav: "subscriptions" });
  },

  editSubscriptionsById: (req, res, next) => {
    editSubscriptionsById(req, (err, results) => {
      // console.log(results);
      if (err) {
        // console.log(err);
        return;
      }
      res.render("pages/subscriptions/edit", { title: "Express", data: results, active_nav: "subscriptions" });
    });
  },

  updateSubscriptionsById: (req, res, next) => {
    updateSubscriptionsById(req.body, (err, results) => {
      if (err) {
        // console.log(err);
        return;
      }
      res.redirect('/subscriptions');
      next();
    })
  },

  deleteSubscriptions: (req, res, next) => {
    deleteSubscriptions(req, (err, results) => {
      // console.log(results);
      if (err) {
        // console.log(err);
        return;
      }
      res.redirect('/subscriptions/');
      next();
    });
  },

  createSubscriptions: (req, res, next) => {
    // console.log("body=>", req.body);

    createSubscriptions(req.body, (err, results) => {
      if (err) {
        // console.log(err);
        return;
      }
      // res.render("pages/subscriptions/create", { title: "Express", data: results });
      res.redirect('/subscriptions/');
      next();
    });
  },

  getSalary: (req, res, next) => {
    getSalary((err, results) => {

      if (err) {
        // console.log(err);
        return;
      }
      res.render("pages/salary/index", { title: "Express", data: results, active_nav: "salary" });
    });
  },

  addSalary: (req, res, next) => {
    getEmployees((err, results) => {
      if (err) {
        // console.log(err);
        return;
      }

      res.render("pages/salary/create", { title: "Express", data: results, active_nav: "salary" });
    });
    // res.render("pages/salary/create", { title: "Express" });
  },

  createSalary: (req, res, next) => {
    // console.log("body=>", req.body);

    createSalary(req.body, (err, results) => {
      // console.log("results",results);

      if (err) {
        // console.log(err);
        return;
      }
      // res.render("pages/salary/create", { title: "Express", data: results });
      res.redirect('/salary');
      next();
    });
  },

  editSalaryById: (req, res, next) => {
    getEmployees((err, emp) => {
      // console.log(emp);
      if (err) {
        // console.log(err);
        return;
      }
      editSalaryById(req, (err, results) => {
        `  `

        if (err) {
          // console.log(err);
          return;
        }
        // console.log("emp--->",emp);
        res.render("pages/salary/edit", { title: "Express", data: results, emp: emp, active_nav: "salary" });
      });
    });

  },

  updateSalaryById: (req, res, next) => {
    // console.log("results",req.body);
    updateSalaryById(req.body, (err, results) => {

      if (err) {
        // console.log(err);
        return;
      }
      res.redirect('/salary');
      next();
    })
  },

  addVisitors: (req, res, next) => {

    res.render("pages/visitors/create", { title: "Express", active_nav: "visitors" });

  },

  deleteSalary: (req, res, next) => {
    deleteSalary(req, (err, results) => {
      // console.log(results);
      if (err) {
        // console.log(err);
        return;
      }
      res.redirect('/salary/');
      next();
    });
  },

  getVisitorsById: (req, res, next) => {
    // // console.log("param==>",req.params.id);
    getVisitorsById(req, (err, results) => {
      if (err) {
        // console.log(err);
        return;
      }
      // console.log("results===>",results);
      res.send(results);
      // return  results;

    });
  },

  getVisitors: (req, res, next) => {
    getVisitors((err, results) => {
      if (err) {
        // console.log(err);
        return;
      }
      // console.log("get v=>",results);
      res.render("pages/visitors/index", { title: "Express", data: results, active_nav: "visitors" });
    });
  },

  createVisitors: (req, res, next) => {
    // checkVisitors(req.body, (err, checkVisitors) => {
    //   console.log("checkVisitors=>",checkVisitors.length);
    //   if(checkVisitors==0){

    createVisitors(req.body, (err, results) => {
      // console.log("reeeeesssss=>",results);
      if (err) {
        // console.log(err);
        return;
      }
      res.redirect('/visitors/');
    });
    // }else{
    //     // req.flash('message', 'Employee already created!')
    //     res.send('Employee already created')
    //   }
    // })

  },

  editVisitorsById: (req, res, next) => {
    editVisitorsById(req, (err, results) => {
      console.log(results);
      if (err) {
        console.log(err);
        return;
      }
      res.render("pages/visitors/edit", { title: "Express", data: results, active_nav: "visitors" });
    });
  },

  updateVisitorsById: (req, res, next) => {
    console.log("results", req.body);
    updateVisitorsById(req.body, (err, results) => {
      console.log("uppppppp=>", results);
      if (err) {
        console.log(err);
        return;
      }
      // res.render({data:results})
      res.redirect('/visitors');
      next();
    })
  },

  deleteVisitors: (req, res, next) => {
    deleteVisitors(req, (err, results) => {
      // console.log(results);
      if (err) {
        // console.log(err);
        return;
      }
      res.redirect('/visitors/');
      next();
    });
  },

  visitorHistoryById: (req, res, next) => {
    getVisitorsById(req, (err, vis) => {

      if (err) {
        console.log(err);
        return;
      }
      visitorHistoryById(req, (err, results) => {
        // console.log(results);
        if (err) {
          // console.log(err);
          return;
        }

        res.render("pages/visitors/visitorHistory", { title: "Express", data: results, vis: vis, active_nav: "visitors" });
      });
    });

  },

  getFollowup: (req, res, next) => {


    var today = new Date()
    getUpcomingFollowup((err, up) => {
      console.log("upppp");
      if (err) {
        console.log(err);
        return;
      }
      getFollowup((err, results) => {
        console.log("ressss", results);
        if (err) {
          // console.log(err);
          return;
        }
        res.render("pages/followup/index", { title: "Express", data: results, up: up, active_nav: "followup" });
      });
    });
  },

  createFollowup: (req, res, next) => {

    checkFollowup(req.body, (err, checkFollowup) => {
      console.log("checkFollowup=>", checkFollowup.length);
      if (checkFollowup == 0) {
        createFollowup(req.body, (err, results) => {

          if (err) {
            console.log(err);
            return;
          }
          res.redirect('/followup');
        });
      } else {
        // req.flash('message', 'Employee already created!')
        res.send('Employee already created')
      }
    })

  },

  addFollowup: (req, res, next) => {
    getVisitors((err, results) => {
      if (err) {
        // console.log(err);
        return;
      }
      // console.log("get v=>",results);
      res.render("pages/followup/create", { title: "Express", data: results, active_nav: "followup" });
    });
  },


}