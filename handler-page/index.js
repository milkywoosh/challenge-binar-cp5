
const { users } = require("../user-db/user-data");

module.exports = {
    handlingRegister: (req, res) => {
        res.render('register');
    },
    handlingInputRegister : (req, res) => {
        const {email, password} = req.body;
        users.push({email, password});
        res.redirect('/api/home-page/login');
    },

    handlingLogin: (req, res) => {
        // this process actually look up 'login.ejs' inside views folder
        // but we dont need to type it exactly as 'login.ejs' bcs view engine auto look for it
        res.render('login');
    },
    handlingInputLogin: (req, res) => {
        const { email, name, password } = req.body;
        const obj = users.find( ({email}) =>  email === email); // return { email: , password: ,}
        console.log(obj);
        if (obj) {
            if ((obj.password === parseInt(password) && obj.email === email)) {
                // res.redirect('/api/home-page', {email: email})
                res.render('index-cp3', {user: name});
            } else {
                alert("please recheck your acc or password")
                res.redirect('/api/home-page/login');
            }
        }
    },
    handlingHomePage: (req, res) => {
        const { email,name, password } = req.body;
        res.render('index-cp3', {user: name});
    },
    handlingSuitGame: (req, res) => {
        res.render('index-cp4');
    },

}