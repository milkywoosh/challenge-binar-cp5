const { users } = require("../user-db/user-data");
const Joi = require('joi'); // this return as a class, so first letter is uppercase
const { fail, clientError } = require('../response-json/index-json');

/*
    have email?
    format email aaa@gmail.com
    password length minimum
    password character number letter or anything

*/
module.exports = {
    validateEmailPassword: (req, res, next) => {
    
        const schema = Joi.object({
            email: Joi.string().email().lowercase().required(),
    
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
                // min: 3, max: 30 {3,30}$
            });
        
            const { name, email, password} = req.body;
            const validation_result =  schema.validate(req.body);
            // console.log(validation_result.value.email);
            const findEmail = users.find( ({email}) => email == validation_result.value.email)
            const findPassword = users.find( ({password}) => password == validation_result.value.password);
            if (findEmail && findPassword) {
                // res.send({status: 200, status_login: "sukses", message: validation_result});
                res.render('index-cp3', {user: name});
            } else {
                res.send({message: "email atau password tidak ditemukan, atau format penulisan salah",
                         status_login: "gagal",   
                          status: validation_result});
            }
      
    },
}


