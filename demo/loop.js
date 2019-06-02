var a = ["1","2","3"];
a.fo = "abc";

for(var i in a)
	console.log(i);
for(var i of a)
	console.log(i);