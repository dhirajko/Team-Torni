document.addEventListener("DOMContentLoaded", function () {

	document.getElementById("submit").addEventListener("click", function clicklogin() {

		fetch("https://jsonplaceholder.typicode.com/users")
			.then(function (response) {
				return response.json();
			})
			.then(function (myJson) {

				let user = document.getElementById("username").value;
				let psw = document.getElementById("password").value;
				let check = true;
				let u = "";

				for (let i of myJson) {

					if (i.username === user) {

						u = i;

						if (u.id == psw) {
							let par = document.getElementById("submit").parentElement;
							let par2 = par.parentElement;
							let par3 = par2.nextElementSibling;


							par2.style.display = "none";
							par3.style.display = "grid";



							let elements = document.querySelectorAll(".container .menu ul li a");

							for (let a of elements) {

								let target = a.parentElement.dataset.targetSection;

								console.log(target);

								document.querySelector(target).classList.add("hidden");
							}
							let show = document.getElementById("amanage").parentElement.parentElement.nextElementSibling;
							console.log(show);

							show.classList.remove("hidden");

							//!!!
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
										if(psw == 3){
											aid.innerHTML = " -- " + myJson[i].albumId + " -- " + myJson[i].title + " -- " + myJson[i].id;
											
											console.log(aid.innerHTML);

										}

										if (psw == 1) {
											if (myJson[i].albumId == 1) {
												aid.innerHTML = " -- " + myJson[i].albumId + " -- " + myJson[i].title + " -- " + myJson[i].id;

												console.log(aid.innerHTML);
											}
										}
										if (psw == 2) {
											if (myJson[i].albumId == 2) {
												aid.innerHTML = " -- " + myJson[i].albumId + " -- " + myJson[i].title + " -- " + myJson[i].id;

												console.log(aid.innerHTML);
											}
										}
										if (psw == 8) {
											if (myJson[i].albumId == 3) {
												aid.innerHTML = " -- " + myJson[i].albumId + " -- " + myJson[i].title + " -- " + myJson[i].id;

												console.log(aid.innerHTML);
											}
										}
										if (psw == 4) {
											if (myJson[i].albumId == 4) {
												aid.innerHTML = " -- " + myJson[i].albumId + " -- " + myJson[i].title + " -- " + myJson[i].id;

												console.log(aid.innerHTML);
											}
										}
										if (psw == 5) {
											if (myJson[i].albumId == 5) {
												aid.innerHTML = " -- " + myJson[i].albumId + " -- " + myJson[i].title + " -- " + myJson[i].id;

												console.log(aid.innerHTML);
											}
										}
										if (psw == 6) {
											if (myJson[i].albumId == 6) {
												aid.innerHTML = " -- " + myJson[i].albumId + " -- " + myJson[i].title + " -- " + myJson[i].id;

												console.log(aid.innerHTML);
											}
										}
										if (psw == 7) {
											if (myJson[i].albumId == 7) {
												aid.innerHTML = " -- " + myJson[i].albumId + " -- " + myJson[i].title + " -- " + myJson[i].id;

												console.log(aid.innerHTML);
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
							//!!!!

							//CHANGE DIFFERENT VIEWS BY CLICKING
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

							// HERE Samantha is Hotel Manager
							if (user != "Samantha") {

								let hidemanagement = document.getElementById("amanage");
								hidemanagement.style.display = "none";

							}
							//LOGOUT
							document.getElementById("logout").addEventListener("click", function logout() {
								par2.style.display = "block";
								par3.style.display = "none";
							})
						}

					}
				}
			})

	})
});
