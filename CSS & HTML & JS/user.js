document.addEventListener("DOMContentLoaded", function () {

let myInit = {
  method : 'GET',
  mode : 'no-cors',
  /*headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }*/
};

fetch('http://10.114.32.42:8080/TorniNew/tower/users', myInit)
.then(response => response.json())
.then(json => console.log(json))
//.catch(error => alert(`Error: ${error}`));
/*
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
  };*/

});