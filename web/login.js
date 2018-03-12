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
		document.getElementById("wrong").innerHTML = "";

		let myInit1 = {
			method: 'GET',
			mode: 'no-cors',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		};

		//Fetch user by its name

		fetch("http://10.114.32.42:8080/TorniNew/tower/users/name/" + usr, myInit1)
			.then(function (response) {
				let resp = checkStatus(response);
				return resp.json();
			})
			.then(function (myJson) {
				console.log(myJson)
				let userobj = myJson;

				//Check if name and password match with the login

				if (userobj.name === usr && userobj.password === psw) {
					let par = document.getElementById("submit").parentElement;
					let par2 = par.parentElement;
					let par3 = par2.nextElementSibling;

					par2.style.display = "none";
					par3.style.display = "grid";

					let elements = document.querySelectorAll(".container .menu ul li a");

					//Hide all but notelist

					for (let a of elements) {

						let target = a.parentElement.dataset.targetSection;
						console.log(target);
						if (!target.includes(".notes")) {
							document.querySelector(target).classList.add("hidden");
						}
					}

					//Click functions to menu items

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

					//Get all notes if the user is manager

					if (userobj.rights == 1) {

						let myInit6 = {
							method: 'GET',
							mode: 'no-cors',
							headers: {
								'Accept': 'application/json',
								'Content-Type': 'application/json'
							}
						};

						fetch('http://10.114.32.42:8080/TorniNew/tower/note', myInit6)
							.then(response => {
								let resp = checkStatus(response);
								return resp.json();
							})
							.then(json => {
								console.log(json);
								let ul = document.createElement('ul');
								for (let i of json) {
									console.log(i);
									let li = document.createElement('li');
									let aid = document.createElement('class');

									aid.name = 'aid';

									aid.id = i.id;
									let id = aid.id;

									li.appendChild(aid);
									ul.appendChild(li);

									aid.innerHTML = " -- " + i.id + " -- " + i.title + " -- " + i.atimestamp;

									console.log(aid.innerHTML);
								}
								document.getElementById("list").addEventListener("click", function clickNote(noteid) {

									document.getElementById('infotitle').innerHTML = json[event.target.id - 1].title;
									document.getElementById('infoid').innerHTML = "ID: " + json[event.target.id - 1].id;
									document.getElementById('timestamp').innerHTML = "Timestamp: " + json[event.target.id - 1].atimestamp;
									document.getElementById('description').innerHTML = "Description: " + json[event.target.id - 1].content;

								})
								document.getElementById('list').appendChild(ul);
							})
							.catch(error => {
								console.log('error : ' + error.message);
								window.alert("Can't get the notes :(");
							});
					}

					//Get the worker's department's notes

					if (userobj.rights == 0) {
						let dep = userobj.department_id;
						let myInit6 = {
							method: 'GET',
							mode: 'no-cors',
							headers: {
								'Accept': 'application/json',
								'Content-Type': 'application/json'
							}
						};
						fetch('http://10.114.32.42:8080/TorniNew/tower/department/' + dep, myInit6)
							.then(response => {
								let resp = checkStatus(response);
								return resp.json();
							})
							.then(json => {
								console.log(json);
								let notes = json.notes;
								let ul = document.createElement('ul');
								for (let i of notes) {
									console.log(i);
									let li = document.createElement('li');
									let aid = document.createElement('class');

									aid.name = 'aid';

									aid.id = i.id;
									let id = aid.id;

									li.appendChild(aid);
									ul.appendChild(li);

									aid.innerHTML = " -- " + i.id + " -- " + i.title + " -- " + i.atimestamp;

									console.log(aid.innerHTML);
								}
								console.log(notes);
								document.getElementById("list").addEventListener("click", function clickNote(noteid) {

									console.log(event.target.id);
									const index = notes.findIndex(note => note.id == event.target.id);

									document.getElementById('infotitle').innerHTML = notes[index].title;
									document.getElementById('infoid').innerHTML = "ID: " + notes[index].id;
									document.getElementById('timestamp').innerHTML = "Timestamp: " + notes[index].atimestamp;
									document.getElementById('description').innerHTML = "Description: " + notes[index].content;
								})
								document.getElementById('list').appendChild(ul);
							})
							.catch(error => {
								console.log('error : ' + error.message);
								window.alert("Can't get the notes :(");
							});
					}

					/*fetch("https://jsonplaceholder.typicode.com/photos")
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
								if (userobj.rights == 1) {
									aid.innerHTML = " -- " + myJson[i].albumId + " -- " + myJson[i].title + " -- " + myJson[i].id;

									console.log(aid.innerHTML);

								}

								if (userobj.rights == 0) {
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
						*/
					//User management

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

					//Add user

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

					//Edit user

					let edituserbtn = document.getElementById("editbtnuser");
					edituserbtn.addEventListener("click", function (event) {
						event.preventDefault();
						let myInit5 = {
							method: 'GET',
							mode: 'no-cors',
							headers: {
								'Accept': 'application/json'
							}
						};
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

					//Delete user

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

					//Change password

					let changepw = document.getElementById("changepassword");
					changepw.addEventListener("click", function (event) {
						event.preventDefault();
						console.log(userobj);
						let oldPassword = document.getElementById("settingsoldpassword").value;
						let newPassword = document.getElementById("settingsnewpassword").value;
						if (userobj.password == oldPassword) {
							let body = {
								id: userobj.id,
								name: userobj.name,
								password: newPassword,
								rights: userobj.rights,
								department: {
									id: userobj.department_id
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
							fetch('http://10.114.32.42:8080/TorniNew/tower/users/' + userobj.id, myInit)
								.then(response => {
									let resp = checkStatus(response);
									if (resp.status == 204) {
										window.alert("You changed your password!");
									}
								})
								.catch(error => {
									console.log('error : ' + error.message);
									window.alert("Something went wrong");
								});
						} else {
							window.alert("Wrong password!");
						}
					})

					//Add note

					function _getPostData() {
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

					//Login
					// Check if the user is worker == 0 or manager == 1
					if (userobj.rights === 0) {

						let hidemanagement = document.getElementById("amanage");
						hidemanagement.style.display = "none";
						let hidehistory = document.getElementById("notehistory");
						hidehistory.style.display = "none";

					}

					document.getElementById("logout").addEventListener("click", function logout() {
						location.href = "http://10.114.32.42:8080/TorniNew/torni.html";
					})

					//Notelist on Home
					// PRESSING THE DONE BUTTON
					function noteFinished() {
						let txt;
						let r = confirm("Are you sure the task is finished?");
						if (r == true) {
							txt = "You closed the note";
						} else {
							txt = "You pressed Cancel";
						}
						document.getElementById("closing").innerHTML = txt;
					}



					//CHANGES THE DROPDOWN DEPARTMENT NAME
					function showNotes(group) {

						let change = document.getElementById(group).id;
						console.log(change);

						document.getElementById('notesGroup').innerHTML = document.getElementById(change).innerHTML;
					}
					//ADD HERE!


				}
			})
			.catch(error => {
				console.log('error : ' + error.message);
				document.getElementById("wrong").innerHTML = "Wrong username or password";
			});
	})
});