document.addEventListener("DOMContentLoaded", function () {

let myInit = {
  method : 'GET',
  mode : 'no-cors',
  headers: {
    'Accept': 'application/json'
  }
};

/*Fetch in a nutshell*/

fetch('http://10.114.32.42:8080/TorniNew/tower/users/5', myInit)
.then(response => {
  let resp = checkStatus(response);
  return resp.json();
})
.then(json => {
  console.log(json);
})
.catch(error => console.log('error : ' + error.message));

const addUser = function() {

}

const editUser = function() {

}

const deleteUser = function() {

}

const checkStatus = function (response) {
    if (response.ok) {
      return response;
    } else {
  throw new Error(`${response.status} ${response.statusText}`); 
    }
  };

});

const timeConverter = function (UNIX_timestamp) {
  let a = new Date(UNIX_timestamp * 1000);
  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = a.getDate();
  let hour = a.getHours();
  let min = a.getMinutes();
  let sec = a.getSeconds();
  let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}