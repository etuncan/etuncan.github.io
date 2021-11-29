let list=document.getElementsByTagName("TD");
const prow=[0,1,2,3,4,5,6,7,8];
const pcol=[0,1,2,3,4,5,6,7,8];
const arrbase=[1,2,3,4,5,6,7,8,9];
const arr1=arrbase;
let grid=[[0,0,0,0,0,0,0,0,0],//1
		  [0,0,0,0,0,0,0,0,0],//2
		  [0,0,0,0,0,0,0,0,0],//3
		  [0,0,0,0,0,0,0,0,0],//4
		  [0,0,0,0,0,0,0,0,0],//5
		  [0,0,0,0,0,0,0,0,0],//6
		  [0,0,0,0,0,0,0,0,0],//7
		  [0,0,0,0,0,0,0,0,0],//8
		  [0,0,0,0,0,0,0,0,0]];//9
let ghostgrid,testgrid,blacklist=[];
var value;		  
var counter=0;
	
//check if grid is filled *LV3*
function isFull(){
	for(r of prow.keys()){
		for(c of pcol.keys()){
			if(grid[r][c]===0){
				return false;
			}
		}
	}
	return true;
}

//check assigned num for conflict *LV3*
function isSafe(grid,row,col,value){
//row check
	for(let i=0;i<9;i++){
		//check row for num match
		if(grid[row][i]===value){
			return false;
		}
	}
	for(let i=0;i<9;i++){
		//check col for num match
		if(grid[i][col]===value){
			return false;
		}
	}
	
	//declare rel section start/end
	let sectRowStart=row-row%3;
	let sectColStart=col-col%3;
	let sectRowEnd=sectRowStart+3;
	let sectColEnd=sectColStart+3;

	for(let r=sectRowStart;r<sectRowEnd;r++){
		for(let c=sectColStart;c<sectColEnd;c++){
			//iterate through section for num match
			if(grid[r][c]===value){
				return false;
			}
		}
	}
	return true;
}

function genGrid(){
	
	for(let i=0;i<81;i++){
		//assign row&col value based on i
		let r=Math.floor(i/9);
		let c=i%9;
		//func returns new value for var value
		randNumGen();
		//func returns boolean check for clash with value
		if(isSafe(grid,r,c,value)===true){
			grid[r][c]=value;
			list[i].innerHTML=value;
			
		}
		//prevents endless loop&bbacktracks
		else if(counter>arr1.length){

			grid[Math.floor((i-1)/9)][(i-1)%9]=0;
			i-=2;
			counter=0;
			
		}
		else{
			i--;
			counter++;
		
		}	
	}
	ghostgrid=grid;
	console.log("fill complete");	
	
	
}
function Driver(){
	grid=[[0,0,0,0,0,0,0,0,0],//1
		  [0,0,0,0,0,0,0,0,0],//2
		  [0,0,0,0,0,0,0,0,0],//3
		  [0,0,0,0,0,0,0,0,0],//4
		  [0,0,0,0,0,0,0,0,0],//5
		  [0,0,0,0,0,0,0,0,0],//6
		  [0,0,0,0,0,0,0,0,0],//7
		  [0,0,0,0,0,0,0,0,0],//8
		  [0,0,0,0,0,0,0,0,0]];//9
	ghostgrid,testgrid,blacklist=[];  
	genGrid();
	setPuzzle();
	placeInput();
} 
//removes cell and checks possible solutions *only 1 possible solution allowed
function setPuzzle(){
	
	//set difficulty by amount of remaining visible cells
	var difficulty=30;
	
	for(let z=80;z>difficulty;z--){
		testgrid=ghostgrid;
		console.log("z:"+z);
		let p=Math.floor(Math.random()*81);//position at random
		if(blacklist.indexOf(p)!==-1){
			z++;
		}
		else if(blacklist===undefined){
			blacklist.unshift(p);
			ghostgrid[mcR(p)][mcC(p)]=0;			
		}
		else{
			let row2=Math.floor(p/9);
			let col2=p%9;
			//checks possible solutions 
			if(gridSolver(z,row2,col2)===true){
				blacklist.unshift(p);
				ghostgrid[row2][col2]=0;
				list[p].innerHTML="";
			}
			
			else{
				z--;
			}
		}
	}
	console.log("set complete!");
}
//checks number of possible solutions with current empty cells.
function gridSolver(z,r,c){
	console.log("gridSolver start");
	let arr3=arrbase;
	testgrid[r][c]=0;
	//removes prime cell value from array 3
	arr3.splice(arr3.indexOf(grid[r][c]),1);
	//test possible values for current cell
	for(let i=0;i<8;i++){
		//declare&initialize backtracking boolean and previous value var
		let backtrack=false;
		let preval=0;
		//test for clash of possible value i
		if(isSafe(testgrid,r,c,arr3[i])===true){
			//add value to testgrid
			testgrid[r][c]=arr3[i];
			
			//solve remainging cells
			for(let n=0;n<blacklist.length;n++){
				let row3=Math.floor(blacklist[n]/9);
				let col3=blacklist[n]%9;
				console.log("row3:"+row3);
				console.log("col3:"+col3);
				//find possible cell values
				let row4=mcR(blacklist[n-1]);
				let col4=mcC(blacklist[n-1]);
				for(let k=1;k<10;k++){
					if(backtrack===true){
						if(preval===9){
							n-=2;
							preval=testgrid[row4][col4];
							testgrid[row4][col4]=0;
							break;
						}
						else{
							k=preval+1;
							backtrack=false;
						}
					}
					
					if(isSafe(testgrid,row3,col3,k)===true){
						if(n===z-1){
							return false;
						}
						
						testgrid[row3][col3]=k;
						backtrack=false;
						break;
					}
					else if(k===9){
						n-=2;
						//preval=testgrid[row4][col4];
						//testgrid[row4][col4]=0;
						backtrack=true;
					}
				}
				
				if(n===-2){
					break;
				}
			}
			
		}
	}
	return true;
	
}
function placeInput(){
	for(let i=0;i<blacklist.length;i++){
		//WARNING!! IE does not support this expression, alternative are being researched
		list[blacklist[i]].innerHTML='<input type="text" minlength="0" maxlength="1">';
		
	}
	
	
}



function mcR(pos){
	return Math.floor(pos/9);
}
function mcC(pos){
	return pos%9;
}


function randNumGen(){
	if(arr1.length===0){
		arr1.push(1,2,3,4,5,6,7,8,9);
	}
	const x=Math.floor(Math.random()*arr1.length);
	value=arr1[x];
}