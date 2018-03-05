

var button=document.querySelector("#abc");
button.addEventListener('click',function popup() {
let usernameFromClient=document.getElementById('username').value;
let passwordFromClient=document.getElementById('password').value;




  //sernding ajax request

  $.ajax({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    

  })

  //when we get response form url
  .done(function( msg ) {
      var a=0;
      for (let s of msg) {
      if(s.username==usernameFromClient && s.id==passwordFromClient){
        location.href="jpt.html";
        a=5;
        break;

        }

        }
        if(a!=5){
          alert("Wrong username or password");
        }

      }

  );
});
// to change this website as per our project We have to change s.id and s.password in loop
// also change in URL
