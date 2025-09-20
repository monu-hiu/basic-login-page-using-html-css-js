document.addEventListener('DOMContentLoaded', function() {
    const form =document.querySelector("form");
    const username=document.getElementById("username");
    const password=document.getElementById("password");
      const forgot=document.getElementById("forgot");
      form.addEventListener("sumbit", function(e){
        if(username.value.trim()==="" || password.value.trim()===""){
            alert("please enter username and password");
            e.preventDefault();
        }

      });
      forgot.addEventListener("click", function(){
        alert("password reset link has been sent to your email");
        window.location.href="https://www.example.com/reset-password";
        });
password.setAttribute("type","password");
password.addEventListener("dbclick",function(){
    password.type=password.type==="password"?"text":"password";
})
      });