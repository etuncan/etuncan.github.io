document.addEventListener("contextmenu",
	function setListener(e){
		if(e.target.className==="no-click"){
			e.preventDefault();
		}
	}
);