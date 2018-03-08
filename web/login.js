document.addEventListener("DOMContentLoaded", function () {

			document.getElementById("submit").addEventListener("click", function clicklogin() {

				const checkStatus = function (response) {
					if (response.ok) {
						return response;
					} else {
						throw new Error(`${response.status} ${response.statusText}`);
					}
				};

				let usr = document.getElementById("username").value;
				let psw = document.getElementById("password").value;

				let myInit1 = {
					method: 'GET',
					mode: 'no-cors',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					}
				};

				fetch("http://10.114.32.42:8080/TorniNew/tower/users/name/" + usr, myInit1)
					.then(function (response) {
						let resp = checkStatus(response);
						return resp.json();
					})
					.then(function (myJson) {
						console.log(myJson)
						let userobj = myJson;

						if (userobj.name === usr && userobj.password === psw) {
							let par = document.getElementById("submit").parentElement;
							let par2 = par.parentElement;
							let par3 = par2.nextElementSibling;

							par2.style.display = "none";
							par3.style.display = "grid";

							let elements = document.querySelectorAll(".container .menu ul li a");

							for (let a of elements) {

								let target = a.parentElement.dataset.targetSection;
								console.log(target);
								if (!target.includes(".notes")) {
									document.querySelector(target).classList.add("hidden");
								}
							}

							for (let a of elements) {

								a.addEventListener("click", function (event) {
									event.preventDefault();

									for (let a of elements) {

										let target = a.parentElement.dataset.targetSection;

										console.log(target);

										document.querySelector(target).classList.add("hidden");
									}

									let target = event.target.parentElement.dataset.targetSection;

									document.querySelector(target).classList.remove("hidden");
								})
							}

							fetch("https://jsonplaceholder.typicode.com/photos")
								.then(function (response) {
									return response.json();
								})
								.then(function (myJson) {
									let ul = document.createElement('ul');

									for (i = 0; i < 302; i++) {
										let li = document.createElement('li');
										let aid = document.createElement('class');

										aid.name = 'aid';

										aid.id = myJson[i].id;
										let id = aid.id;

										//aid.innerHTML = " -- " + myJson[i].albumId + " -- " + myJson[i].title + " -- " + myJson[i].id;

										li.appendChild(aid);
										ul.appendChild(li);


										//CHECKS DEPARTMENT AND SHOWS DIFFERENT NOTES
										if (psw == "banaani") {
											aid.innerHTML = " -- " + myJson[i].albumId + " -- " + myJson[i].title + " -- " + myJson[i].id;

											console.log(aid.innerHTML);

										}

										if (psw == "spliton") {
											if (myJson[i].albumId == 1) {
												aid.innerHTML = " -- " + myJson[i].albumId + " -- " + myJson[i].title + " -- " + myJson[i].id;

												let el = document.getElementById('allnotes').parentElement;
												el.style.display = "none";


												//console.log(el.classList);


												//console.log(aid.innerHTML);
											}
										}
										if (psw == 2) {
											if (myJson[i].albumId == 2) {
												aid.innerHTML = " -- " + myJson[i].albumId + " -- " + myJson[i].title + " -- " + myJson[i].id;
												let el = document.getElementById('allnotes').parentElement;
												el.style.display = "none";
											}
										}
										if (psw == 8) {
											if (myJson[i].albumId == 3) {
												aid.innerHTML = " -- " + myJson[i].albumId + " -- " + myJson[i].title + " -- " + myJson[i].id;

												let el = document.getElementById('allnotes').parentElement;
												el.style.display = "none";
											}
										}
										if (psw == 4) {
											if (myJson[i].albumId == 4) {
												aid.innerHTML = " -- " + myJson[i].albumId + " -- " + myJson[i].title + " -- " + myJson[i].id;

												let el = document.getElementById('allnotes').parentElement;
												el.style.display = "none";
											}
										}
										if (psw == 5) {
											if (myJson[i].albumId == 5) {
												aid.innerHTML = " -- " + myJson[i].albumId + " -- " + myJson[i].title + " -- " + myJson[i].id;

												let el = document.getElementById('allnotes').parentElement;
												el.style.display = "none";
											}
										}
										if (psw == 6) {
											if (myJson[i].albumId == 6) {
												aid.innerHTML = " -- " + myJson[i].albumId + " -- " + myJson[i].title + " -- " + myJson[i].id;

												let el = document.getElementById('allnotes').parentElement;
												el.style.display = "none";
											}
										}
										if (psw == 7) {
											if (myJson[i].albumId == 7) {
												aid.innerHTML = " -- " + myJson[i].albumId + " -- " + myJson[i].title + " -- " + myJson[i].id;

												let el = document.getElementById('allnotes').parentElement;
												el.style.display = "none";
											}
										}

									}

									//LOADS INFO ABOUT NOTE WHEN CLICKED
									document.getElementById("list").addEventListener("click", function clickNote(noteid) {

										document.getElementById('infotitle').innerHTML = myJson[event.target.id - 1].title;
										document.getElementById('infoid').innerHTML = "ID: " + myJson[event.target.id - 1].albumId;
										document.getElementById('informant').innerHTML = "Informant: " + myJson[event.target.id - 1].url;
										document.getElementById('timestamp').innerHTML = "Timestamp: " + myJson[event.target.id - 1].id;
										document.getElementById('description').innerHTML = "Description: " + myJson[event.target.id - 1].thumbnailUrl;

									})
									document.getElementById('list').appendChild(ul);

								})

							//user.js

							let myInit5 = {
								method: 'GET',
								mode: 'no-cors',
								headers: {
									'Accept': 'application/json'
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
										if (resp.status == 204) {
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

							let edituserbtn = document.getElementById("editbtnuser");
							edituserbtn.addEventListener("click", function (event) {
								event.preventDefault();
								let name = document.getElementById("editusername").value;
								let pw = document.getElementById("editpassword").value;
								let dep = document.getElementById("editdepartment").value;
								let rights = document.querySelector('input[name="editrights"]:checked').value;
								fetch('http://10.114.32.42:8080/TorniNew/tower/users/name/' + name, myInit5)
									.then(response => {
										let resp = checkStatus(response);
										console.log(resp);
										return resp.json();
									})
									.then(json => {
										let user = json;
										console.log(user);
										if (!name.length || !pw.length || user == null) {
											window.alert("Wrong username or all fields are not filled");
										} else {
											let userId = user.id;
											console.log(userId);
											let body = {
												id: userId,
												name: name,
												password: pw,
												rights: rights,
												department: {
													id: dep
												}
											}
											console.log(body);

											let myInit = {
												method: 'PUT',
												body: JSON.stringify(body),
												headers: {
													'Content-Type': 'application/json'
												}
											};
											fetch('http://10.114.32.42:8080/TorniNew/tower/users/' + userId, myInit)
												.then(response => {
													let resp = checkStatus(response);
													if (resp.status == 204) {
														window.alert("You edited the user!");
													}
												})
												.catch(error => {
													console.log('error : ' + error.message);
													window.alert("Something went wrong");
												});
										}
									})
									.catch(error => {
										console.log('error : ' + error.message);
										window.alert("Wrong username or all fields are not filled");
									});
							})

							let deletebtnuser = document.getElementById("deletebtnuser");
							deletebtnuser.addEventListener("click", function (event) {
									event.preventDefault();
									let name = document.getElementById("deleteusername").value;
									let myInit5 = {
										method: 'GET',
										mode: 'no-cors',
										headers: {
											'Accept': 'application/json'
										}
									};
									fetch('http://10.114.32.42:8080/TorniNew/tower/users/name/' + name, myInit5)
										.then(response => {
											let resp = checkStatus(response);
											console.log(resp);
											return resp.json();
										})
										.then(json => {
											let user = json;
											let userId = user.id;
											let myInit4 = {
												method: 'DELETE'
											};
											fetch('http://10.114.32.42:8080/TorniNew/tower/users/' + userId, myInit4)
												.then(response => {
													let resp = checkStatus(response);
													if (resp.status == 204) {
														window.alert("You deleted the user!");
													}
												})
												.catch(error => {
													console.log('error : ' + error.message);
													window.alert("Username doesn't exist");
												});
										})
									})

									//notes.js

									function _getPostData() {
										// TODO these (title, content, department) are the ids for form elements Kaisa creates.
										let title = document.getElementById('title').value;
										let content = document.getElementById('content').value;
										let department = document.getElementById('department').value;
										if (!title.length || !content.length) {
											return null;
										}
										let time = Date.now();
										return {
											atimestamp: time,
											title: title,
											content: content,
											astate: false,
											department: {
												id: department
											}
										}
									}

									function _sendNote(postData) {
										let xhr = new XMLHttpRequest();

										// TODO /add-note is the post destination url(java side) 
										xhr.open("POST", 'http://10.114.32.42:8080/TorniNew/tower/note', true);
										xhr.setRequestHeader("Content-type", "application/json");
										xhr.send(JSON.stringify(postData));

										// Call a function when the state changes.
										xhr.onreadystatechange = function () {
											// Request finished. Do processing here.
											if (xhr.readyState == XMLHttpRequest.DONE) {
												if (xhr.status == 204) {
													window.alert("You send the note successfully");
												} else {
													// show error
													window.alert("there was problem on the server");
													return;
												}
											}
										}
									}

									// TODO add-note-btn is the id for send button Kaisa creates.
									let addNoteBtn = document.getElementById("addbtn");
									addNoteBtn.addEventListener("click", function (event) {
										// prevent the button from refreshing the page
										event.preventDefault();

										let postData = _getPostData();
										let postDataJson = JSON.stringify(postData);
										console.log(postDataJson);
										if (!postData) {
											// show error message
											window.alert("Please fill in all fields");
											return;
										}

										// send xhr post request
										_sendNote(postData);
									});

									// Check if the user is worker == 0 or manager == 1
									if (userobj.rights === 0) {

										let hidemanagement = document.getElementById("amanage");
										hidemanagement.style.display = "none";

									}

									document.getElementById("logout").addEventListener("click", function logout() {
										location.href = "http://10.114.32.42:8080/TorniNew/torni.html";
									})
								}
							})
						.catch(error => {
							window.alert("Wrong username or password!");
						});
					})
			});