//adds listeners to buttons
function listen(){
	var targets=document.getElementsByTagName("button");
	var i;
	for(i=0;i<targets.length;i++){
		targets[i].addEventListener("click",foo);
		console.log("listen"+i);
	}
}
//immediately implements listen function
listen();
function foo(){
	
	if(this.id==="langhead"){

	}
	else if(this.id==="namehead"){
		nameSort();
	}
	else if(this.id==="typehead"){
	}
	else if(this.id==="datehead"){
		dateSort();
	}
	else{
		console.log("foo Error");
	}
}


var n,z;

/*Name Sorting Functions*/
function nameSort(){
	console.log("function called");
	var table,rowlist,i,x,y,start,switcher,verify,ascent,switchtally=0;
	table=document.getElementById("codetable").lastElementChild;
	start=true;
	ascent=true;
	while(start){
		console.log("loop start");
		//stops infinite loop
		start=false;
		rowlist=table.rows;
		console.log(rowlist);
		for(i=0;i<(rowlist.length-1);i++){
			verify=false;
			//change if new rows added
			x=rowlist[i].firstElementChild.firstElementChild.innerText.replace(':',' ');
			console.log(x);
			y=rowlist[i+1].firstElementChild.firstElementChild.innerText.replace(':',' ');
			console.log(y);
			directionN(x,y);
			if(ascent===true&&z===1){
				verify=true;
				break;
			}
			else if(ascent===false&&z===2){
				verify=true;
				break;
			}
		}
		
		if(verify===true){
			rowlist[i].parentNode.insertBefore(rowlist[i+1],rowlist[i]);
			start=true;
			switchtally++;
		}
		else if(switchtally===0&&ascent===true){
			ascent=false;
			start=true;
		}
	}
}

function directionN(x,y){
	if(arguments[0].toLowerCase()>arguments[1].toLowerCase()){
		z=1;
	}
	else if(arguments[0].toLowerCase()<arguments[1].toLowerCase()){
		z=2;
	} 
	else{
		console.log("oops");
	}
}


/*Date Sort Functions*/
function dateSort(){
	var rowlist,i,a,b,start,verify,descent,switchtally=0;
	var table=document.getElementById("codetable").lastElementChild;
	start=true;
	descent=true;

	while(start){
		start=false;
		rowlist=table.rows;
		console.log(rowlist);
		for(i=0;i<(rowlist.length-1);i++){
			verify=false;
			x=rowlist[i].lastElementChild.innerHTML.split("/");
			y=rowlist[i+1].lastElementChild.innerHTML.split("/");
			console.log(x);
			a=(x[2]+x[0]+x[1]);
			b=(y[2]+y[0]+y[1]);
			console.log(a);
			directionD(a,b);
			if(descent===true&&n===1){
				verify=true;
				break;
			}
			else if(descent===false&&n===2){
				verify=true;
				break;
			}
		}
		
		if(verify===true){
			rowlist[i].parentNode.insertBefore(rowlist[i+1],rowlist[i]);
			start=true;
			switchtally++;
		}	
		else if(switchtally===0&&descent===true){
				descent=false;
				start=true;
		}

	}
}
function directionD(a,b){
	if(arguments[0]<arguments[1]){
		n=1;
	}
	else if(arguments[0]>arguments[1]){
		n=2;
	}

}