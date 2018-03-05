document.addEventListener("DOMContentLoaded", function () {
	
	let elements = document.querySelectorAll(".container .menu ul li a");
		
	for(let a of elements){
		
		a.addEventListener("click", function (event){
			event.preventDefault();
			
			for(let a of elements){
				let target = a.parentElement.dataset.targetSection;
				document.querySelector(target).classList.add("hidden");
			}
			
			let target = event.target.parentElement.dataset.targetSection;
			
			document.querySelector(target).classList.remove("hidden");
		})
	}
	
});