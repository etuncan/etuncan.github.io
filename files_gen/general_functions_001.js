document.addEventListener("contextmenu",
	function setListener(e){
		if(e.target.className==="no-click"){
			e.preventDefault();
		}
	}
);

function contentRevealBar(trig){
	let part1=trig.previousElementSibling.previousElementSibling;
	let part2=trig.previousElementSibling;
		part1.classList.toggle("click-style-2");
		part2.classList.toggle("click-style-2");
}