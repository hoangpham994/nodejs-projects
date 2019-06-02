var a = 5
var b = "6"
b = a + parseInt(b);
if(b >= 5)
{
	console.log("dau");
}
else{
	console.log("rot");
}

while(b> 5)
{
	console.log("line" + b);
	b = b -1;
}

for(i = 1; i < b; i++){
	console.log("lime" + i);
}


var boll = false
if(boll)
	console.log("hello");


var arr = [11,22,33,44,55];
arr.forEach(function(element){console.log(element);})