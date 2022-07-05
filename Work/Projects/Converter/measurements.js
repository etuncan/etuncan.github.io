
const IMPERIAL_UNITS=['in','ft','yd','ml'];
const METRIC_UNITS=['mm','cm','dm','mt','dam','hm','km'];
const IMPERIAL_MODS=[1,12,3,1760];
const UNIT_ORDER=['mm','cm','in','dm','ft','yd','mt','dam','hm','km','ml'];

function myCompute(arg){
	const input=arg.value;
	
	const typeName1=document.getElementById("type1");	
	const typeName2=document.getElementById("type2");
	const type1=typeName1.options[typeName1.selectedIndex].value;
	const type2=typeName2.options[typeName2.selectedIndex].value;
	
	const output=document.getElementById("output");
	
	let typeInfo1=collectTypeInfo(type1);
	let typeInfo2=collectTypeInfo(type2); //typeInfo[type,power,order]
	let conversionValue=convertType(typeInfo1,typeInfo2);
	let mod1=findModifier(typeInfo1[0],typeInfo1[1]);
	let mod2=findModifier(typeInfo2[0],typeInfo2[1]);
	
	if(type1===type2){
		output.innerHTML=input;
	}
	else if(typeInfo1[2]>typeInfo2[2]){
		if(typeInfo1[0]===1&&typeInfo2[0]===0){
			console.log(input,mod1,conversionValue,1/conversionValue,mod2);
			output.innerHTML=(input*mod1)*(1/conversionValue*mod2);
		}
		else if(typeInfo1[0]===0&&typeInfo2[0]===1){
			console.log(input,mod1,conversionValue,mod2,conversionValue/mod2);
			output.innerHTML=(input*mod1)*(conversionValue/mod2);			
		}
		else{
			console.log(input,mod1,conversionValue,mod2);
			output.innerHTML=(input*mod1)*(conversionValue*mod2);					
		}
	}
	else{
		if(typeInfo2[0]===1){
			console.log(input,mod1,1/conversionValue,mod2);
			output.innerHTML=(input*mod1)/(1/conversionValue*mod2);			
		}
		else{
			console.log(input,mod1,conversionValue,mod2);
			output.innerHTML=(input*mod1)/(conversionValue*mod2);
		}
	}	
}

function convertType(typeInfo1,typeInfo2){
	if(typeInfo1[0]===typeInfo2[0]){
		return 1;
	}
	else{
		return 25.4;
	}
}
function collectTypeInfo(type){
	const compare=IMPERIAL_UNITS.filter(element=>element===type).length;
	let infoArr=[];

	if(compare===1){
		infoArr[0]=0;
		infoArr[1]=IMPERIAL_UNITS.indexOf(type);
		infoArr[2]=UNIT_ORDER.indexOf(type);
	
	}
	else{
		infoArr[0]=1;
		infoArr[1]=METRIC_UNITS.indexOf(type);
		infoArr[2]=UNIT_ORDER.indexOf(type);
	}	
	console.log("Type info:"+infoArr);
	return infoArr;
}
	
function findModifier(type,pwr){
	let product=1;
	
	if(type===0){
		for(let i=0;i<=pwr;i++){
			product=product*IMPERIAL_MODS[i];
		}
		return product;
	}
	else{
		product=10**(pwr); 
		return product;
	}
}
