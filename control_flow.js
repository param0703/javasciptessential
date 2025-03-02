let userflow="admin";
let accessLevel;
if(userflow==="admin"){
    accessLevel="FUll access granted";
}
else if(userflow==="manager"){
    accessLevel="Limited Access Granted";
}
else{
    accessLevel="No access";
}
console.log("Access Level: ",accessLevel);

let isLoggedIn=true;
let userMessage;

if(isLoggedIn){
    if(userflow==="admin"){
        userMessage="Welcome admin.!";
    }
    else{
        userMessage=" Welcome User.!";
    }
}
else{
    userMessage="Please login with acces account";
}
console.log("User Message: ",userMessage);

let userType="subscriber";
let userCategory;

switch(userType){
    case "admin":
        userCategory="admin";
        break;
    case "manager":
        userCategory="manager";
        break;
    case "subscriber":
        userCategory="subscriber";
        break;
    default:
        userCategory="Unknown";
}
console.log("UserCategory: ",userCategory);