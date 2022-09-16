const { login } = require('../model/services')
const {create} = require('../model/services')
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const session = require('express-session')





module.exports = {
 index:(req,res,next)=>{
  
    res.render("pages/landing_page/index", { title: "Express"});
  },
 main: (req, res, next) => {

    res.render("pages/auth/login", { title: "Express"});
  },
  home: (req, res, next) => {
    
    if (req.session.loggedin) {
      
      response.send('Welcome back, ' + req.session.username + '!');
    } else {
      // Not logged in
      response.send('Please login to view this page!');
    }
    res.render("pages/home/index", { title: "Express"});
  },
 createUser:(req, res,next)=>{
  const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
      
        return res.status(500).json({
          success: 0,
          message: "database connection error",
        });
      }
        res.redirect('/login');
        next();
      });
 },
    login:(req, res,next) =>{

      if(req.body.email=='' || req.body.password=='' ){
       
        res.redirect('/')
      }else{
       
        const body = req.body;
        login( body.email, (err,results) => {
          
          if (!results) {
            // res.send("Login Failed")
            res.redirect('/')
          }
          console.log("resultsss=>",results);
          const result = compareSync(body.password,results.password);
          console.log("resulttt=>",result);
          
          if (result == true) {
            let email = req.body.email;
            let password= req.body.password;
         
           
            res.setHeader('Content-Type', 'text/html');
            req.session.email = email;

            req.session.password = password;
            
           
            req.session.loggedin = true;
            req.session.message = {status: 'success', message: `Welcome back`}
            if( req.session.loggedin == false){
                req.session.message = {status: 'danger', message: 'Failed to login, check password.'}
                req.session.save(() => {
                    res.redirect('/')
                });
            }else{
               
                delete req.session.password;
                 
                  res.redirect('/dashboard');
              }  
          } else {
            req.session.message = {status: 'danger', message: 'Failed to login, check password.'}
            req.session.save(() => {
                res.redirect('/')
            });
          }
        });
      }
     
 
  
},
logout: (req, res, next) => {
  res.clearCookie('myCookie');
  if (req.session) {
  req.session.destroy(err => {
  if (err) {
    res.status(400).send('Unable to log out')
  } else {
  res.redirect('/login');
  next();
  }
  });
  } else {
    res.end()
  }
  }  
}
