const Loginfunction = () =>
{
    var check = sessionStorage.getItem("isLoggedin");
    const navButton = document.getElementById("nav-button");
    if (check==="true")
    {
        navButton.innerHTML = "Log out";
        navButton.classList.remove("btn-warning");
        navButton.classList.add("btn-success");
        navButton.style.color= "white";
    }
}
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
window.addEventListener("load",function() { 
    Loginfunction();
    document.getElementById("nav-button").addEventListener("click",logoutfunction);
  })