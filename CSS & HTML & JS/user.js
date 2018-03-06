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