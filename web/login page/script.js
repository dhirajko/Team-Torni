

var button=document.querySelector("#abc");
button.addEventListener('click',function popup() {
let usernameFromClient=document.getElementById('username').value;
let passwordFromClient=document.getElementById('password').value;




  //sernding ajax request

  $.ajax({
    method: "GET",
    url: "http://10.114.32.42:8080/TorniNew/tower/users/name/" + usernameFromClient,
    

  })

  //when we get response form url
  .done(function( msg ) {
      var a=0;
      if(msg.name==usernameFromClient && msg.password==passwordFromClient){
        location.href="jpt.html";
        a=5;

        }

        if(a!=5){
          alert("Wrong username or password");
        }

      }

  );
});
// to change this website as per our project We have to change s.id and s.password in loop
// also change in URL
