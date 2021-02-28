var butt=document.getElementById("listtitle").firstElementChild;
	//gets button as variable
var content=document.getElementById("thenew").lastElementChild;
	//gets ul as variable
	function showHide(){
		if(content.style.display!=="block"){
			console.log("hi");
			butt.firstElementChild.style.transform="rotate(90deg)";
			content.style.display="block";
			butt.style.borderBottomColor="grey";
			content.style.borderBottom="2px solid #000000";
		}
		else if(content.style.display==="block"){
			console.log("fail");
			butt.firstElementChild.style.transform="rotate(0deg)";
			content.style.display="none";
			butt.style.borderBottom="2px solid #000000";
			content.style.borderBottom="none";
			
			
		}
	}