function add(a,b,c){
	return(a+b+c);
}
let y=add(30,40,50);
console.log(y);
//


function multi(n,m){
	return 100/(n-m);
}
var value=multi(10,5);
var value1=multi(10,5)*2;
console.log(value);
console.log(value1);

//arguments.length return

function some(e,f){
	return arguments.length;
}
console.log(some(5,6));

//default value to the function parameter

function def(v,u){
	if(u === undefined){
		u=5;
	}
	return v*u;
}
console.log(def(5));

//amstrong number 
let find=ams(153)
function ams(x){
	let y=0;
	let z=x;
	while(x>0){
		rem=x%10;
		y=y+(rem*rem*rem);
		x=Math.floor(x%10);
	}
	if(y=z){
		return "armstrong";
		}
		else{
			return "not armstrong";
		}
	}
console.log(find);

