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
