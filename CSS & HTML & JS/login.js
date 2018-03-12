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
									let historyul = document.createElement('ul');

									for (i = 0; i < 302; i++) {
										let li = document.createElement('li');
										let aid = document.createElement('class');

										aid.name = 'aid';

										aid.id = myJson[i].id;

										let lid = document.createElement('id');
										let ltitle = document.createElement('id');
										let ltime = document.createElement('id');

										lid.innerHTML = myJson[i].albumId;

										if (myJson[i].title.length > 30) {
											let longtitle = myJson[i].title;
											let newtitle = longtitle.substring(0, 30);
											ltitle.innerHTML = "     " + newtitle + "...     ";
										} else {
											ltitle.innerHTML = myJson[i].title;
										}

										ltime.innerHTML = myJson[i].id;

										li.appendChild(aid);
										ul.appendChild(li);


										//CHECKS DEPARTMENT AND SHOWS DIFFERENT NOTES
										if (psw == 3) {
											aid.innerHTML = + lid.innerHTML + "     " + ltitle.innerHTML + "     " + ltime.innerHTML;
											document.getElementById('notesGroup').innerHTML = "Hotel Manager";
											console.log(aid.innerHTML);

										}

										if (psw == 1) {
											if (myJson[i].albumId == 1) {
												aid.innerHTML = + lid.innerHTML + ltitle.innerHTML + ltime.innerHTML;

												let el = document.getElementById('allnotes').parentElement;
												el.style.display = "none";
											}
										}
										if (psw == 2) {
											if (myJson[i].albumId == 2) {
												aid.innerHTML = + lid.innerHTML + ltitle.innerHTML + ltime.innerHTML;
												let el = document.getElementById('allnotes').parentElement;
												el.style.display = "none";
											}
										}
										if (psw == 8) {
											if (myJson[i].albumId == 3) {
												aid.innerHTML = + lid.innerHTML + ltitle.innerHTML + ltime.innerHTML;

												let el = document.getElementById('allnotes').parentElement;
												el.style.display = "none";
											}
										}
										if (psw == 4) {
											if (myJson[i].albumId == 4) {
												aid.innerHTML = + lid.innerHTML + ltitle.innerHTML + ltime.innerHTML;

												let el = document.getElementById('allnotes').parentElement;
												el.style.display = "none";
											}
										}
										if (psw == 5) {
											if (myJson[i].albumId == 5) {
												aid.innerHTML = + lid.innerHTML + ltitle.innerHTML + ltime.innerHTML;

												let el = document.getElementById('allnotes').parentElement;
												el.style.display = "none";
											}
										}
										if (psw == 6) {
											if (myJson[i].albumId == 6) {
												aid.innerHTML = + lid.innerHTML + ltitle.innerHTML + ltime.innerHTML;

												let el = document.getElementById('allnotes').parentElement;
												el.style.display = "none";
											}
										}
										if (psw == 7) {
											if (myJson[i].albumId == 7) {
												aid.innerHTML = + lid.innerHTML + ltitle.innerHTML + ltime.innerHTML;

												let el = document.getElementById('allnotes').parentElement;
												el.style.display = "none";
											}
										}
									}

									//LOADS INFO ABOUT NOTE WHEN CLICKED
									document.getElementById("list").addEventListener("click", function clickNote(noteid) {
										let clickednote = myJson[event.target.id - 1];

										document.getElementById('infotitle').innerHTML = myJson[event.target.id - 1].title;
										document.getElementById('infoid').innerHTML = "ID: " + myJson[event.target.id - 1].albumId;
										document.getElementById('timestamp').innerHTML = "Timestamp: " + myJson[event.target.id - 1].id;
										document.getElementById('description').innerHTML = "Description: " + myJson[event.target.id - 1].thumbnailUrl;

										//Checks if user wants to close the note
										document.getElementById("donebutton").addEventListener("click", function () {

											let r = confirm("Are you sure the task is finished?");
											if (r == true) {

												let historyli = document.createElement('li');
												let historynote = document.createElement('id');
												let histdesc = document.createElement('a');

												historynote.id = clickednote.id;
												histdesc.text = clickednote.thumbnailUrl;

												let historytitle = clickednote.title;

												let date = new Date();
												let day = date.getDate();
												let month = date.getMonth() + 1;
												let year = date.getFullYear();
												if (day < 10) {
													day = "0" + day;
												}
												if (month < 10) {
													month = "0" + month;
												}

												date = day + "/" + month + "/" + year;

												//HERE OUR CODE
												historynote.innerHTML = historynote.id + " --- " + historytitle + " --- " + date;


												//historynote.appendChild(histdesc);
												historyli.appendChild(historynote);
												historyul.appendChild(historyli);

												document.getElementById('infotitle').innerHTML = "Title";
												document.getElementById('infoid').innerHTML = "ID: ";
												document.getElementById('timestamp').innerHTML = "Timestamp: ";
												document.getElementById('description').innerHTML = "Description: ";

												document.getElementById("historylist").addEventListener("click", function clickHistoryNote(noteid) {
													if (event.target.id < 10) {
														document.getElementById("ht").innerHTML = event.target.innerHTML.slice(5, event.target.innerHTML.length - 14);

													} else {
														document.getElementById("ht").innerHTML = event.target.innerHTML.slice(6, event.target.innerHTML.length - 14);
													}

													document.getElementById("hi").innerHTML = "ID: " + event.target.id;
													document.getElementById("hts").innerHTML = "Timestamp: " + event.target.innerHTML.slice(-10);
													document.getElementById("hd").innerHTML = "Description: ";// + event.target.histdesc;
												})

												//REMOVES FROM THE LIST
												//code here...
											}
											//document.getElementById("closing").innerHTML = txt;

										})
									})
									document.getElementById('list').appendChild(ul);
									document.getElementById('historylist').appendChild(historyul);

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

								document.getElementById('notesGroup').innerHTML = user;

							} else {
								// CHANGES DROPDOWN
								document.getElementById('dropdown').addEventListener("click", function () {

									document.getElementById('notesGroup').innerHTML = event.target.innerHTML;
								})
							}



							//LOGOUT
							document.getElementById("logout").addEventListener("click", function logout() {
								par2.style.display = "block";
								par3.style.display = "none";
							})
						} else {
							document.getElementById("wrong").innerHTML = "Wrong username or password";

						}

					}
					else {
						document.getElementById("wrong").innerHTML = "Wrong username or password";

					}
				}
			})

	})
});
