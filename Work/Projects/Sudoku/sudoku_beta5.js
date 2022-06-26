let g_list=document.getElementsByTagName("TD");
const prow=[0,1,2,3,4,5,6,7,8];
const pcol=[0,1,2,3,4,5,6,7,8];
const g_BASE_ARR=[1,2,3,4,5,6,7,8,9];
const g_ARR1=baseArr;
const g_GRID_TEMPLATE=[
	 [0,0,0,0,0,0,0,0,0],//1
	 [0,0,0,0,0,0,0,0,0],
	 [0,0,0,0,0,0,0,0,0],//3
	 [0,0,0,0,0,0,0,0,0],
	 [0,0,0,0,0,0,0,0,0],
	 [0,0,0,0,0,0,0,0,0],//6
	 [0,0,0,0,0,0,0,0,0],
	 [0,0,0,0,0,0,0,0,0],
	 [0,0,0,0,0,0,0,0,0]];//9
let ghostGrid,testgrid,blackList,blackGrid=[];
var value;		  
var counter=0;
var g_blankSpace=30;
//constructor *LV.0*
function Driver(){
	let grid=g_GRID_TEMPLATE;
	ghostgrid,testgrid,blacklist=[];  
	genGrid();
	setPuzzle();
	placeInput();
} 
//fill grid with numbers between(1-9) *SUB-LV.1*
function genGrid(){
	
	for(let i=0;i<9;i++){
		
		//create&apply array of new numbers for current row
		grid[i]=randRowGen();
		
		//checks for clash of added row with rest of grid
		if(isSafe(grid,i)===false){
		
			grid[i]=[];
			i--;
			counter++;	
			
		}
	}
	
	ghostGrid=grid;
	console.log("fill complete");	
}	

//removes cell and checks possible solutions *only 1 possible solution allowed
function setPuzzle(){
	for(let cells=80;cells>g_blankSpace;cells--){
		testgrid=ghostgrid;
		console.log("cells:"+cells);
		
		let position=Math.floor(Math.random()*81);//position at random
		let ghostRow=findRow(position);
		let ghostCol=findColumn(position);
		
		//if position is already located in blacklist
		if(blacklist.indexOf(position)!==-1){
			z++;
		}
		//if blacklist hasn't been given a value
		else if(blacklist===undefined){
			blacklist.unshift(position);
			ghostGrid[ghostRow][ghostCol]=0;			
		}
		else{
			//checks possible solutions 
			if(gridSolver(cells,ghostRow,ghostCol)===true){
				blacklist.unshift(position);
				ghostGrid[ghostRow][ghostCol]=0;
			}
			else{
				cells--;
			}
		}
	}
	console.log("set complete!");
}

//check newly created row for conflict with grid *SUB-LV.2*
function isSafe(grid,rowIndex){
	//column check
	for(var x=0;x<9;x++){
		let tempArr=[];
		//create array from grid column x 
		for(var y=0;y<9;y++){
			tempArr[y]=grid[y][x];
		}
		//test column array for duplicates
		if(x<8&&new Set[tempArr].size-1<rowIndex){
			return false;
		}
		else if(x===8&&new Set[tempArr].size<rowIndex){
			return false;
		}
		
	}
	
	//check sections of current row
	for(let z=0;z<3;z++){
		//declare rel section start/end
		let sectRowStart=Math.floor(rowIndex/3)*3;
		let sectColStart=z*3;
		//check current section for duplicates
		tempArr=[];
		//fill tempArr with current section values row by row
		for(let w=0;w<3;w++){
			tempArr.push(grid[sectRowStart+w][sectColStart]);
			tempArr.push(grid[sectRowStart+w][sectColStart+1]);
			tempArr.push(grid[sectRowStart+w][sectColStart+2]);
		}
		if(rowIndex%3<2&&new Set[tempArr].size<((rowIndex%3)+1)*3){
			return false;
		}
		else if(rowIndex%3===2&&new Set[tempArr].size<9){
			return false;
		}
	}
	//if all checks are passed return true
	return true;
}

//checks number of possible solutions with current empty cells.
function gridSolver(cells,ghostRow,ghostCol){
	console.log("gridSolver start");
	let arr3=g_BASE_ARR;
	testGrid[ghostRow][ghostCol]=0;
	//removes prime cell value from array 3
	arr3.splice(arr3.indexOf(grid[ghostRow][ghostCol]),1);
	//test possible values for current cell
	for(let i=0;i<8;i++){
		//declare&initialize backtracking boolean and previous value var
		let backTrack=false;
		let savedValue=0;
		//test value arr3[i] against grid
		if(isSafe(testGrid,ghostRow,ghostCol,arr3[i])===true){
			//add value to testgrid
			testGrid[ghostRow][ghostCol]=arr3[i];
			cellSolver();
			
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

/*----------Sub.2 Functions-------------------------------*/

//check if grid is filled *LV3*
function isGridFull(){
	for(x of prow.keys()){
		var tempArr=grid[x].filter(value=>value===0);
		
		if(tempArr.length>0){
			return false;
		}
	}
	return true;
}
function findRow(pos){
	return Math.floor(pos/9);
}
function findColumn(pos){
	return pos%9;
}
function randRowGen(){
	let tempRowArr=g_BASE_ARR;
	let rowArr=[];
	var tempNum;
	
	for(let i=0;i<9;i++){
		tempNum=Math.floor(Math.random()*tempRowArr.length);
		rowArr[i]=tempRowArr[tempNum];
		tempRowArr.splice(rowArr[i],1);
	}
	return rowArr;
}

function randNumGen(){
	if(arr1.length===0){
		arr1.push(1,2,3,4,5,6,7,8,9);
	}
	const x=Math.floor(Math.random()*arr1.length);
	value=arr1[x];
}

function cellSolver(){
//solve remainging cells
	for(let n=0;n<blacklist.length;n++){
		let testRow=findRow(blacklist[n]);
		let testCol=findColumn(blacklist[n]);
		let arr4=g_BASE_ARR;

		//find possible cell values
		let row4=mcR(blacklist[n-1]);
		let col4=mcC(blacklist[n-1]);
		for(let m=1;m<10;m++){
			if(isSafe(testGrid,testRow,testCol,m)===true){
				testGrid[testRow][testCol]=m;
				savedValue=m;
			}
		}
		
		if(n===-2){
			break;
		}
	}	
}