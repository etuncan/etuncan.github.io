
	function toggleList(a){
		//console.log(a);
		let buttnimg=a.firstElementChild;
		let content=a.nextElementSibling;
		//content pathing:button->ul
		if(content.style.display!=="block"){
			//console.log("pass");
			buttnimg.style.transform="rotate(90deg)";
			content.style.display="block";
		}
		else if(content.style.display==="block"){
			//console.log("fail");
			buttnimg.style.transform="rotate(0deg)";
			content.style.display="none";
			
		}
	}