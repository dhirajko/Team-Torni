fetch('http://10.114.32.42:8080/TorniNew/tower/users')
.then(response => response.json())
.then(json => console.log(json))

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
  