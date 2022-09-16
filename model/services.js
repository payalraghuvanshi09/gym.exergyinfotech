const pool = require('../config/database')
const bcrypt = require("bcrypt");
const { compareSync } = require("bcrypt");
const { id } = require("@hapi/joi/lib/base");
const { request } = require('express');

module.exports = {
  employee_dash: (req,callback) => {
    pool.query(
      `SELECT COUNT(id) as totalEmployees FROM user_table where user_type = '2';`,
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);

      }
    );
  },
  customers_dash: (req,callback) => {
    pool.query(
      `SELECT COUNT(id) as totalCustomers FROM user_table where user_type = '3';`,
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);

      }
    );
  },
  attendance_dash: (req,callback) => {
    pool.query(
      `SELECT COUNT(id) as totalAttendance FROM attendance_table;`,
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);

      }
    );
  },
  visitor_dash: (req,callback) => {
    pool.query(
      `SELECT COUNT(id) as totalVisitors FROM visitor_table;`,
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);

      }
    );
  },


  create: (data, callback) => {
    pool.query(
      `insert into user_table(name,email,password)
              values(?,?,?)`,
      [data.name, data.email, data.password],
      (error, results, fields) => {

        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  login: (email, callback) => {
    // // console.log(data.email);
    pool.query(
      `Select * from user_table where email=?  and user_type =?`,
      [email, '1'],
      (error, results, fields) => {

        console.log("login res =>", results);

        if (error) {
          // res.send(error.message)
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },

  getEmployees: (callback) => {
    pool.query(
      `select * from user_table where user_type=2`,
      [],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);

      }
    );
  },

  createEmployees: (data, callback) => {
    console.log("data", data);
    pool.query(
      `insert into user_table (user_name,fathers_name,gender,mobile,email,address,date_of_joining,date_of_birth,blood_group,weight,height,type_of_subscription,marital_status,emergency_contact,reference_name,reference_mobile_number,user_type) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [data.user_name, data.fathers_name, data.gender, data.mobile, data.email, data.address, data.date_of_joining, data.date_of_birth, data.blood_group, data.weight, data.height, data.type_of_subscription, data.marital_status, data.emergency_contact, data.reference_name, data.reference_mobile_number, 2],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  editEmployeesById: (req, callback) => {
    pool.query(
      `select * from user_table where  id =?`,
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  updateEmployeesById: (data, callback) => {
    // console.log(data);
    pool.query(
      "UPDATE user_table SET user_name = ?,fathers_name = ?,gender = ?,mobile = ?,email =?,address = ?,date_of_joining = ?,date_of_birth = ?,blood_group = ?,weight = ?,height = ?,type_of_subscription = ?,marital_status = ?,emergency_contact= ?,reference_name = ?,reference_mobile_number=? WHERE  id = ?",
      [data.user_name, data.fathers_name, data.gender, data.mobile, data.email, data.address, data.date_of_joining, data.date_of_birth, data.blood_group, data.weight, data.height, data.type_of_subscription, data.marital_status, data.emergency_contact, data.reference_name, data.reference_mobile_number, data.id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        // request.flash('message','Updated Successfully!')
        return callback(null, results);
      }
    );

  },
  deleteEmployees: (req, callback) => {
    pool.query(
      `delete from user_table where id =?`,
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    );
  },

  getCustomers: (callback) => {
    pool.query(
      // `select * from user_table where user_type=3`,
      // [],
      `SELECT user_table.*,subscription_table.name FROM user_table join subscription_table on user_table.type_of_subscription   =  subscription_table.id WHERE user_table.user_type = ?`,
      [3],
      (error, results, fields) => {
        // console.log(results);

        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    );
  },

  createCustomers: (data, callback) => {
    // console.log("data",data);
    pool.query(
      `insert into user_table (user_name,fathers_name,gender,mobile,email,address,date_of_joining,date_of_birth,blood_group,weight,height,type_of_subscription,marital_status,emergency_contact,reference_name,reference_mobile_number,user_type) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [data.user_name, data.fathers_name, data.gender, data.mobile, data.email, data.address, data.date_of_joining, data.date_of_birth, data.blood_group, data.weight, data.height, data.type_of_subscription, data.marital_status, data.emergency_contact, data.reference_name, data.reference_mobile_number, 3],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  editCustomersById: (req, callback) => {
    pool.query(
      `select * from user_table where  id =?`,
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  updateCustomersById: (data, callback) => {
    // console.log("data=>",data);
    pool.query(
      "UPDATE user_table SET user_name = ?,fathers_name = ?,gender = ?,mobile = ?,email =?,address = ?,date_of_joining = ?,date_of_birth = ?,blood_group = ?,weight = ?,height = ?,type_of_subscription = ?,marital_status = ?,emergency_contact= ?,reference_name = ?,reference_mobile_number=? WHERE  id = ?",
      [data.user_name, data.fathers_name, data.gender, data.mobile, data.email, data.address, data.date_of_joining, data.date_of_birth, data.blood_group, data.weight, data.height, data.type_of_subscription, data.marital_status, data.emergency_contact, data.reference_name, data.reference_mobile_number, data.id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        // request.flash('message','Updated Successfully!')
        return callback(null, results);
      }
    );

  },
  deleteCustomers: (req, callback) => {
    pool.query(
      `delete from user_table where id =?`,
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    );
  },

  getAttendance: (callback) => {
    // // console.log('data',data)
    pool.query(
      // `select * from attendance_table`,
      `SELECT DATE_FORMAT (attendance_table.date, '%d-%m-%Y') as date , attendance_table.id, attendance_table.user_id,attendance_table.login_time, attendance_table.logout_time, user_table.user_name
          FROM attendance_table
          INNER JOIN user_table ON attendance_table.user_id = user_table.id;`,
      [],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);
        // // console.log(results);
      }
    );
  },
  createAttendance: (data, callback) => {
    // console.log("data===",data);
    pool.query(
      `insert into attendance_table (user_id,date,login_time,logout_time) values(?,?,?,?)`,
      [data.user_id, data.date, data.login_time, data.logout_time],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    )
  },
  checkAttendance: (data, callback) => {
    console.log("data===", data);
    pool.query(
      "SELECT * FROM `attendance_table` WHERE `user_id` = ? AND `date` = ?",
      [data.user_id, data.date],

      (error, results, fields) => {
        console.log("check=>", results);
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    )
  },
  editAttendanceById: (req, callback) => {
    pool.query(
      `select * from attendance_table where id =?`,
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  updateAttendanceById: (data, callback) => {
    // console.log(data);
    pool.query(
      "UPDATE attendance_table SET user_id = ?,date = ? , login_time =?,logout_time =? WHERE id = ?",
      [data.user_id, data.date, data.login_time, data.logout_time, data.id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        // request.flash('message','Updated Successfully!')
        return callback(null, results);
      }
    );

  },
  deleteAttendance: (req, callback) => {
    pool.query(
      `delete from attendance_table where id =?`,
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getSubscriptions: (callback) => {
    pool.query(
      `select * from subscription_table`,
      [],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    );
  },
  editSubscriptionsById: (req, callback) => {
    pool.query(
      `select * from subscription_table where id =?`,
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  updateSubscriptionsById: (data, callback) => {
    // console.log(data);
    pool.query(
      "UPDATE subscription_table SET name = ?, duration = ? , price =? WHERE id = ?",
      [data.name, data.duration, data.price, data.id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        // request.flash('message','Updated Successfully!')
        return callback(null, results);
      }
    );

  },
  deleteSubscriptions: (req, callback) => {
    pool.query(
      `delete from subscription_table where id =?`,
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    );
  },
  createSubscriptions: (data, callback) => {
    // console.log("data",data);
    pool.query(
      `insert into subscription_table (name,duration,price) values(?,?,?)`,
      [data.name, data.duration, data.price],
      (error, results, fields) => {
        // console.log(results);
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    )
  },
  getSalary: (callback) => {
    pool.query(
      `SELECT  DATE_FORMAT (salary_table.dates, '%d-%m-%Y') as dates, salary_table.id,salary_table.employee, salary_table.monthly, salary_table.pan_number, salary_table.bank_acc_no,salary_table.branch_ifsc_code, salary_table.branch_name, user_table.user_name
          FROM salary_table
          INNER JOIN user_table ON salary_table.employee = user_table.id;`,
      [],
      (error, results, fields) => {
        // console.log(results);
        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    );
  },
  createSalary: (data, callback) => {
    // console.log("data",data);
    pool.query(
      `insert into salary_table(id,monthly,dates,employee,pan_number,bank_acc_no,branch_ifsc_code,branch_name) values(?,?,?,?,?,?,?,?)`,
      [data.id, data.monthly, data.dates, data.user_id, data.pan_number, data.bank_acc_no, data.branch_ifsc_code, data.branch_name],
      (error, results, fields) => {
        // console.log(results);
        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    )
  },
  editSalaryById: (req, callback) => {
    // // console.log("Body::::",req.body.id);
    pool.query(
      `select * from salary_table where id =?`,
      [req.params.id],
      (error, results, fields) => {

        // console.log("edit res=>",results);
        // console.log("Body::::",req.params.id)

        if (error) {
          callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  updateSalaryById: (data, callback) => {
    // console.log("updated",data);
    pool.query(
      "UPDATE salary_table SET monthly = ?, dates = ? , employee=? , pan_number=? , bank_acc_no=? , branch_ifsc_code=? ,branch_name=? WHERE id = ?",
      [data.monthly, data.dates, data.user_id, data.pan_number, data.bank_acc_no, data.branch_ifsc_code, data.branch_name, data.id],
      (error, results, fields) => {
        console.log("us=>", results);
        // console.log("data::::",data.user_id)

        if (error) {
          return callback(error);
        }
        // request.flash('message','Updated Successfully!')
        return callback(null, results);
      }
    );

  },
  deleteSalary: (req, callback) => {

    pool.query(
      `delete from salary_table where id =?`,
      [req.params.id],

      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getVisitorsById: (req, callback) => {
    pool.query(
      `select * from visitor_table where id=?`,
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    );
  },

  getVisitors: (callback) => {
    pool.query(
      `select *,DATE_FORMAT (expected_date_of_joining, '%Y-%m-%d') as expected_date_of_joining
          ,DATE_FORMAT (date_of_visit, '%Y-%m-%d') as date_of_visit
           from visitor_table order by expected_date_of_joining ASC`,
      [],
      (error, results, fields) => {
        // // console.log("visitor=>",results);
        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    );
  },
  createVisitors: (data, callback) => {

    pool.query(
      `insert into visitor_table (name,age,gender,mobile_number,expected_date_of_joining,email,date_of_visit,is_active) values(?,?,?,?,?,?,?,?)`,
      [data.name, data.age, data.gender, data.mobile_number, data.expected_date_of_joining, data.email, data.date_of_visit, data.is_active],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    )
  },
  editVisitorsById: (req, callback) => {
    // // console.log("Body::::",req.body.id);
    pool.query(
      `select * from visitor_table where id =?`,
      [req.params.id],
      (error, results, fields) => {

        // console.log("edit res=>",results);
        // console.log("Body::::",req.params.id)

        if (error) {
          callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  updateVisitorsById: (data, callback) => {
    console.log("update", data);
    pool.query(
      "UPDATE visitor_table SET name=? ,age=? ,gender=? ,mobile_number=? ,expected_date_of_joining=? ,email=? ,date_of_visit=?  WHERE id = ?",
      [data.name, data.age, data.gender, data.mobile_number, data.expected_date_of_joining, data.email, data.date_of_visit, data.id],
      (error, results, fields) => {
        // console.log("uppppp=>",results);
        if (error) {

          return callback(error);
        }
        // request.flash('message','Updated Successfully!')
        return callback(null, results);
      }
    );

  },
  deleteVisitors: (req, callback) => {
    pool.query(
      `delete from visitor_table where id =?`,
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getFollowup: (callback) => {
    pool.query(
      `SELECT DATE_FORMAT (follow_up.next_call_schedule, '%d-%m-%Y') as next_call_schedule,
          DATE_FORMAT (follow_up.last_calling_date, '%y-%m-%d') as last_calling_date,visitor_table.name,
          DATE_FORMAT (follow_up.date_of_visit, '%Y-%m-%d') as date_of_visit,
           follow_up.id, follow_up.visitor_id,follow_up.mobile_number,follow_up.feedback_of_client  FROM follow_up
            INNER JOIN visitor_table ON follow_up.visitor_id = visitor_table.id where next_call_schedule = CURDATE() GROUP BY follow_up.visitor_id order by follow_up.last_calling_date 
            DESC`,
      [],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        // console.log('ffff',results);
        return callback(null, results);
      }
    );
  },
  getUpcomingFollowup: (callback) => {
    pool.query(
      `SELECT DATE_FORMAT (follow_up.next_call_schedule, '%d-%m-%Y') as next_call_schedule,
          DATE_FORMAT (follow_up.last_calling_date, '%y-%m-%d') as last_calling_date,visitor_table.name,
          DATE_FORMAT (follow_up.date_of_visit, '%Y-%m-%d') as date_of_visit,
           follow_up.id, follow_up.visitor_id,follow_up.mobile_number,follow_up.feedback_of_client  FROM follow_up
            INNER JOIN visitor_table ON follow_up.visitor_id = visitor_table.id where next_call_schedule > CURDATE() GROUP BY follow_up.visitor_id order by follow_up.next_call_schedule
            DESC`,
      [],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        // console.log('ffff',results);
        return callback(null, results);
      }
    );
  },
  createFollowup: (data, callback) => {
    pool.query(
      `insert into follow_up (id,visitor_id,mobile_number,date_of_visit,feedback_of_client,next_call_schedule,last_calling_date) values(?,?,?,?,?,?,?)`,
      [data.id, data.visitor_id, data.mobile_number, data.date_of_visit, data.feedback_of_client, data.next_call_schedule, data.last_calling_date],
      (error, results, fields) => {
        // // console.log('cccc' ,results);
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    )
  },
  visitorHistoryById: (req,callback) => {
    pool.query(
      `select *,DATE_FORMAT (follow_up.next_call_schedule, '%d-%m-%Y') as next_call_schedule,
      DATE_FORMAT (follow_up.last_calling_date, '%Y-%m-%d') as last_calling_date from follow_up where visitor_id =? 
            order by last_calling_date DESC`,
      [req.params.id],
      (error, results, fields) => {
        console.log("ressss=>",results);
        if (error) {
          callback(error);
        }
        // console.log('ffff',results);
        return callback(null, results);
      }
    );
  },
  checkFollowup: (data, callback) => {
    console.log("data===", data);
    pool.query(
      "SELECT * FROM `follow_up` WHERE `visitor_id` = ? AND `date_of_visit` = ?",
      [data.visitor_id, data.date_of_visit],

      (error, results, fields) => {
        console.log("check=>", results);
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    )
  },
  getData: (callback) => {
    pool.query(
      `select * from banner`,
      [],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    );
  },
} 