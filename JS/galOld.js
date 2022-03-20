

function openTab(state, tabName){
	var i, gal_tab_cont, tab_toggle;
	
	gal_tab_cont=document.getElementsByClassName("gal_tab_cont");
	for(i=0;i<gal_tab_cont.length;i++){
		gal_tab_cont[i].style.display="none";
	}
	
	tab_toggle=document.getElementsByClassName("tab_toggle");
	for(i=0; i<tab_toggle.length; i++){
		tab_toggle[i].className=tab_toggle[i].className.replace("active"," ");
	}
	document.getElementById(tabName).style.display="block";
	state.currentTarget.className+="active";

}