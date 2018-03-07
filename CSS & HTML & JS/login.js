document.addEventListener("DOMContentLoaded", function () {
	
	document.getElementById("submit").addEventListener("click", function clicklogin(){
	
		let par = document.getElementById("submit").parentElement;
		console.log(par);
		let par2 = par.parentElement;
		
		let par3 = par2.nextElementSibling;
		
		console.log(par3);
		par2.style.display = "none";
		console.log(par2.style.display);
		
		par3.style.display ="grid";
		
	})
});
	
	//function clicklogin() {
		//console.log(document.getElementById("submit").innerHTML);
		//console.log(document.getElementById("username").textContent);
		
		//console.log(document.getElementsByClassName("container").style.display);
		
		//document.getElementsByClassName("container").style.display = "grid";
		//document.getElementsByClassName("login").style.display = "none";
	
	//document.getElementsByClassName("container").style.display = none;
	//let elements = document.querySelectorAll("body");

	//for (let a of elements){
	//	console.log(elements);




	