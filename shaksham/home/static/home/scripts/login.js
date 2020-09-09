// var navButton = document.getElementById("nav-button");

// document.getElementById("Login").onclick = function() {loginfunction()};
// function loginfunction() 
// {
//     let email = document.getElementById("Email").value;
//     let password = document.getElementById("password").value;
//     if(emai.trim()!="" && password.trim()!="")
//     {
//         sessionStorage.setItem('isLoggedin','true');
//     }
//     //This is for making the changes instanteniously after clicking
//     if(sessionStorage.getItem('isLoggedin')==='true')
//     {
//         navButton.innerHTML = "Log out";
//         navButton.classList.remove("btn-warning");
//         navButton.classList.add("btn-success");
//     }
//     console.log(email);
//     console.log(password);
// }
// This if comes in effect after refresh
// if(sessionStorage.getItem('isLoggedin')==='true')
// {
//     navButton.innerHTML = "Log out";
//     navButton.classList.remove("btn-warning");
//     navButton.classList.add("btn-success");
// }
let isLoggedIn = sessionStorage.getItem('isLoggedin') === 'true';

const setNav = () => {
  const navButton = document.getElementById("nav-button");
  navButton.innerHTML = isLoggedIn ? "Log out" : "Join Us";
  navButton.style.color = isLoggedIn ? "white": "black";
  navButton.classList.toggle("btn-success",isLoggedIn); // or use add/remove
  navButton.classList.toggle("btn-warning",!isLoggedIn);
};
const loginfunction = () => {
  // you can even test the navButton text to see if they are loggin in or out here
    const email = document.getElementById("Email").value;
    const password = document.getElementById("password").value;
    if (email.trim() !== "" &&  password.trim() !== "") {
      // do whatever you need to do
      sessionStorage.setItem('isLoggedin', 'true');
    }  
};
const logoutfunction= () =>
{
  const navButton = document.getElementById("nav-button");
  if(navButton.innerHTML==="Log out" && sessionStorage.getItem('isLoggedin')==='true')
  {
    navButton.innerHTML="Join Us";
    navButton.classList.remove("btn-success");
    navButton.classList.add("btn-warning");
    navButton.style.color="black";
    sessionStorage.setItem('isLoggedin','false');

  }
}

window.addEventListener("load",function() { // on page load and all elements exist
  setNav();
  document.getElementById("Login").addEventListener("click",loginfunction);
  document.getElementById("nav-button").addEventListener("click",logoutfunction);
})