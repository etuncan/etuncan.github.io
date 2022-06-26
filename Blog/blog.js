const SEARCH_SCOPE=document.getElementById("main_article"); 
let g_boo=1;
//Search Function
function searchFor(){
	//initializing variable
	let input=document.getElementById("search_input").value.trim();	
	input=scrubInput(input);	
	
	inputCheck(input,g_boo);
	
	let itemList=document.getElementsByClassName("blogpost");
	if(input.length<1){
		Array.from(itemList).forEach(item => {item.style.display="";});
		return;
	}
	let contentList=[];	
	
	fillSubList(itemList,contentList);
	
	findMatch(input,itemList,contentList);	
}

function typeChange(){
	let input=document.getElementById("search_input");
	
	
	input.value="";
	
	if(g_boo===1){
		g_boo=2;
	}
	else{
		g_boo=1;
	}
	
	let itemList=document.getElementsByClassName("blogpost");
	
	for(var i=0;i<itemList.length;i++){
		itemList[i].style.display="";
	}
	input.setSelectionRange(0,0);
	input.focus();
}
	
function scrubInput(rawInput){
	rawInput=rawInput.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,'');
	//removes special chars
	console.log("scrubbed Input:"+rawInput);
	return rawInput;
}

function inputCheck(input,g_boo){
	let checkParameter1=/[a-z]/gi;
	let checkParameter2=/[0-9]/gi;
	if(input.match(checkParameter1)!==null){
		
	}
	else if(input.match(checkParameter2)!==null){
	
	}
	else{
		
	}
}
function fillSubList(mainList,subList){
	if(g_boo===1){
		for(var i=0;i<mainList.length;i++){
			subList[i]=mainList[i].firstElementChild.children[1].textContent;
		}
	}
	else if(g_boo===2){
		for(var i=0;i<mainList.length;i++){
			subList[i]=mainList[i].firstElementChild.children[0].textContent;
		}
	}
	else{
		console.log("ERROR:boo not valid in fillSublist");
	}
}
	
function findMatch(input,mainList,subList){	
	if(input.length>0){
		for(var i=0;i<subList.length;i++){
							
			if(subList[i].indexOf(input)>-1){
				//change display to default(show)
				mainList[i].style.display="";
			}
			else{
				//hides
				mainList[i].style.display="none";
			}
		}
		console.log("findMatch():successful");
	}

}