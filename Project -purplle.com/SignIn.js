let signin = document.querySelector("#signinhere")
let signup = document.querySelector("#signuphere")
let signinpage = document.querySelector(".signinpage")
let signuppage = document.querySelector(".signuppage")
let accountcreated = document.querySelector("#accountcreated")
signup.addEventListener("click", function (e) {
    e.preventDefault()
    signinpage.style.display = "none"
    signuppage.style.display = "block"
})
signin.addEventListener("click", function (e) {
    e.preventDefault();
    signuppage.style.display = "none"
    signinpage.style.display = "block"
})




// sign up details 
let myupform = document.querySelector("#upform")
let upn = document.querySelector("#upname")
let upem = document.querySelector("#upemail")
let upp = document.querySelector("#uppassword")

let Total = JSON.parse(localStorage.getItem("account-data")) || [];


// accountcreated.addEventListener("click",function(){
//     if(upn!="" && upem!="" && upp!=""){
//         signuppage.style.display="none"
//         signinpage.style.display="block"
//     }
//     else{
//         accountcreated.setAttribute("disabled",true)
//     }
// })

myupform.addEventListener("submit", function (e) {
    e.preventDefault();
    let details = {
        Name: upn.value,
        Email: upem.value,
        Password: upp.value
    }
    signuppage.style.display = "none"
    signinpage.style.display = "block"
    Total.push(details)
    localStorage.setItem("account-data", JSON.stringify(Total))
})


let myform = document.querySelector("form")
let em = document.querySelector("#email");
let p = document.querySelector("#password");
const myInput = document.querySelector('#password');
const myButton = document.querySelector('#home');
myform.addEventListener("submit", function (e) {
    e.preventDefault();
    for (let i = 0; i < Total.length; i++) {
        if (em.value === Total[i].Email && p.value === Total[i].Password) {
            window.location.href = "./index.html";
            alert("Logged in successfully")
            // exit()
        }
    }
})


// reset form
let reset = document.querySelector("#reset")
reset.addEventListener("click", function (e) {
    e.preventDefault();
    upn.value = "";
    upem.value = "";
    upp.value = "";
})
