var check = sessionStorage.getItem("isLoggedin");
const navButton = document.getElementById("nav-button");


if (check==="true")
{
    navButton.innerHTML = "Log out";
    navButton.classList.remove("btn-warning");
    navButton.classList.add("btn-success");
    navButton.style.color= "white";
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
$(document).ready(function(){
    $(window).on('load',function(){
        $('#nav-button').click(logoutfunction);
    });
    $('#image').change(function(e){
        var fileName = e.target.files[0].name;
        $("#choose").html(fileName);
        $('#choose').css("overflow","hidden");
    });
    $('#proof').change(function(e){
        var fileName = e.target.files[0].name;
        $("#proof-upload").html(fileName);
        $('#proof-upload').css("overflow-y","hidden");
    });
    $('#proof2').change(function(e){
        var fileName = e.target.files[0].name;
        $("#proof-upload-2").html(fileName);
        $('#proof-upload-2').css("overflow-y","hidden");
    });
});