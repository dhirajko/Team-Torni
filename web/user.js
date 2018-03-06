document.addEventListener("DOMContentLoaded", function () {

let myInit = {
  method : 'GET',
  mode : 'no-cors',
  headers: {
    'Accept': 'application/json'
  }
};

fetch('http://10.114.32.42:8080/TorniNew/tower/users/5', myInit)
.then(response => {
  if(response.ok)
    return response.json();
  throw new Error('Network response was not ok: ' + response.statusText);
})
.then(json => console.log(json))
.catch(error => console.log('bam ' + error.message));

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