function multiply(multiplier,...theArgs){
	return theArgs.map(x=>multiplier*x);
}

var arr = multiply(2,1,2,3);
console.log(arr); 

//Arrow functions

var a = ['Hi','Heli','Lit','Bery'];

var a2 = a.map(function(s){return s.length;});
console.log(a2); 

var a3 = a.map(s=>s.length);
console.log(a3); 


var bool = new Boolean(false)
if(bool === false)
	console.log('this is amazing');

function div(x) {
  if (isFinite(1000 / x)) {
    return 'Number is NOT Infinity.';
  }
  return "Number is Infinity!";
}
console.log(div(41.54))
