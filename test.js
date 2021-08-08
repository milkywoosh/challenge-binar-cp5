function abbr(str) {
    let store = '';
    for (let i=0; i<str.length; i++ ) {
        if (str[i-1] == ' ') {     
            store+= str[i].toLowerCase();
        } else if (i == 0) {        
            store+= str[i].toLowerCase()
        } else if (str[i] == " ") {
            store+= '-'
        } else {
            store += str[i];
        }
    }
    return store;
}

// console.log(abbr("Priambudi Bagas Tes "));


const { user } = require("./user-db/user-data");

// using operator dot . to access property u.email
const finding0 = user.find( (u) => u.email === "lkm@home.com" );
const finding1 = user.find( ({email, password}) => email === "lkm@home.com");



console.log(finding0);
console.log(finding1);
// console.log(cekEmail(user, "lkm@home.com")); 