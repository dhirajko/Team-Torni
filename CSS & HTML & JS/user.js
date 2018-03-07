document.addEventListener("DOMContentLoaded", function () {

  let myInit1 = {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Accept': 'application/json'
    }
  };

  let myInit3 = {
    method: 'PUT',
    mode: 'no-cors',
    headers: {
      'content-type': 'application/json'
    }
  };

  let myInit4 = {
    method: 'DELETE',
    mode: 'no-cors',
    headers: {
      'content-type': 'application/json'
    }
  };

  /*Fetch in a nutshell

  fetch('http://10.114.32.42:8080/TorniNew/tower/users', myInit)
  .then(response => {
    let resp = checkStatus(response);
    return resp.json();
  })
  .then(json => {
    console.log(json);
  })
  .catch(error => console.log('error : ' + error.message));*/

  const getPostData = function () {
    let name = document.getElementById("addusername").value;
    let pw = document.getElementById("addpassword").value;
    let dep = document.getElementById("adddepartment").value;
    let rights = document.querySelector('input[name="addrights"]:checked').value;

    if (!name.length || !pw.length) {
      return null;
    }
    return {
      name: name,
      password: pw,
      rights: rights,
      department: {
        id: dep
      }
    }
  }

  const getPutData = function () {
    let name = document.getElementById("editusername").value;
    let pw = document.getElementById("editpassword").value;
    let dep = document.getElementById("editdepartment").value;
    let rights = document.querySelector('input[name="editrights"]:checked').value;

    console.log(name + " " + pw);

    if (!name.length || !pw.length) {
      return null;
    }
    return {
      name: name,
      password: pw,
      rights: rights,
      department: {
        id: dep
      }
    }
  }

  const getDelData = function () {

  }

  const sendPost = function (data) {
    let body = JSON.stringify(data);
    console.log(body);
    let myInit = {
      method: 'POST',
      body: body,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };

    fetch('http://10.114.32.42:8080/TorniNew/tower/users', myInit)
      .then(response => {
        let resp = checkStatus(response);
        if (resp.status == 204){
          window.alert("You added the user!");
        }
      })
      .catch(error => console.log('error : ' + error.message));
  }

  let adduserbtn = document.getElementById("addbtnuser");
  adduserbtn.addEventListener("click", function (event) {
    event.preventDefault();
    let postData = getPostData();
    console.log(postData);
    if (!postData) {
      window.alert("Please fill in all fields");
      return;
    }

    sendPost(postData);
  })

  const editUser = function () {

  }

  const deleteUser = function () {

  }

  const changePsw = function () {

  }

  const checkStatus = function (response) {
    if (response.ok) {
      return response;
    } else {
      throw new Error(`${response.status} ${response.statusText}`);
    }
  };
});