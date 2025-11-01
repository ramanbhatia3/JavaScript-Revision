const accountId = 123456
let accountEmail = "rbhatia09@gmail.com"
var accountPassword = "1234"
accountCity = "Punjab"
let accountState;

// accountPassword = 12345678 //not allowed

console.log("Account ID:", accountId)

accountEmail = "raman3@gmail.com"
accountPassword = "abcd"
accountCity = "Gujrat"

/*
Prefer not to use var
because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])