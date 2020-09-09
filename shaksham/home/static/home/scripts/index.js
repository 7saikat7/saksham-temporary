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
$(document).ready(function()
{
    $(window).on('load',function(){
        $('#exampleModal').modal('show');
        $('#nav-button').click(logoutfunction);
    });
    $('#card1').click(function()
    {
        if($('#card-content-1').hasClass('d-none'))
        {
            $('#card-content-1').removeClass('d-none');
            $('#card-content-1').addClass('d-block');
            $('#card1').removeClass('col-4');
            $('#card1').addClass('col-12');
            $('#card1').removeClass('offset-1');
            $('#card1').addClass('offset-0');

        }
        else
        {
            $('#card-content-1').removeClass('d-block');
            $('#card-content-1').addClass('d-none');
            $('#card1').removeClass('col-12');
            $('#card1').addClass('col-4');
            $('#card1').removeClass('offset-0');
            $('#card1').addClass('offset-1');
            
        }
    });
    $('#card2').click(function()
    {
        if($('#card-content-2').hasClass('d-none'))
        {
            $('#card-content-2').removeClass('d-none');
            $('#card-content-2').addClass('d-block');
            $('#card2').removeClass('col-4');
            $('#card2').addClass('col-12');
            $('#card2').removeClass('offset-2');
            $('#card2').addClass('offset-0');
        }
        else
        {
            $('#card-content-2').removeClass('d-block');
            $('#card-content-2').addClass('d-none');
            $('#card2').removeClass('col-12');
            $('#card2').addClass('col-4'); 
            $('#card2').removeClass('offset-0');
            $('#card2').addClass('offset-2');
        }
    });
    $('#card3').click(function()
    {
        if($('#card-content-3').hasClass('d-none'))
        {
            $('#card-content-3').removeClass('d-none');
            $('#card-content-3').addClass('d-block');
            $('#card3').removeClass('col-4');
            $('#card3').addClass('col-12');
            $('#card3').removeClass('offset-1');
            $('#card3').addClass('offset-0');
        }
        else
        {
            $('#card-content-3').removeClass('d-block');
            $('#card-content-3').addClass('d-none');
            $('#card3').removeClass('col-12');
            $('#card3').addClass('col-4'); 
            $('#card3').removeClass('offset-0');
            $('#card3').addClass('offset-1');
        }

    });
    $('#card4').click(function()
    {
        if($('#card-content-4').hasClass('d-none'))
        {
            $('#card-content-4').removeClass('d-none');
            $('#card-content-4').addClass('d-block');
            $('#card4').removeClass('col-4');
            $('#card4').addClass('col-12');
            $('#card4').removeClass('offset-2');
            $('#card4').addClass('offset-0');
        }
        else
        {
            $('#card-content-4').removeClass('d-block');
            $('#card-content-4').addClass('d-none');
            $('#card4').removeClass('col-12');
            $('#card4').addClass('col-4'); 
            $('#card4').removeClass('offset-0');
            $('#card4').addClass('offset-2');
        }

    });
});