window.onload = function(){
    document.getElementById("loginForm").onsubmit = function() {
      var username = document.getElementById("email").value;
      var password = document.getElementById("password").value;
  
      if (username === "admin@tugrul.com" &&
        password === "123") {
      
        location.href = "HomePage.html";
      } else {
        var loginError =document.getElementById("loginError")
        loginError.innerText=("Kullanıcı adı veya şifre hatalı!")
        loginError.style.fontSize="12px"
        loginError.style.textAlign="center"
        loginError.style.color="red"
        //location.href = "index1.html";
      }
      
      return false;
    }
  }

  window.onscroll = function() {myFunction()};

// Get the navbar
var left = document.getElementById("pageLeftSide");

// Get the offset position of the navbar
var sticky = left.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    left.classList.add("sticky")
  } else {
    left.classList.remove("sticky");
  }
}