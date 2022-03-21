//s0:scope(1)
var s0=document.getElementById("main_article"); 

/**Search Function**/
function searchFor(){
	//initializing variable
	var input,list,inputCheck,check,wash,i,n,a;
	var sublist=[];
	
	list=s0.getElementsByClassName("blogpost");
	wash=document.getElementById("search_input").value;
	
	inputCheck=function(input,check){
		var checkparam=/[a-z0-9]/gi;
		check=input.match(checkparam);	
		console.log(check);
		return check;
		
	}
	
	for(i=0;i<list.length;i++){	
		sublist[i]=list[i].firstElementChild.firstElementChild.textContent+list[i].firstElementChild.lastElementChild.textContent;
		console.log(sublist[i]);
	}//create array of items to be searched	
	
	normScrub(wash);
	input=wash;
	//scrubs input string
	
	inputCheck(input,check);
	//run inputCheck function
	
	if(check.length>0){
		for(i=0;i<sublist.length;i++){
							
			if(sublist[i].indexOf(input)>-1){
				//change display to default(show)
				list[i].style.display="";
			}
			else{
				//hides
				list[i].style.display="none";
			}
		}
		console.log(a);
	}
	else{
		console.log(a);
		return;
	}
}	
	function normScrub(wash){
		
		wash=wash.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,'');
		//removes special chars
		return wash
	}
	
	
	
	
