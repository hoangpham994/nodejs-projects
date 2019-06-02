var person = {
	ten : "Hoang",
	ho : "Pham",
	InTen : function(){
	console.log("Ten cua ban la"+this.ten+"${ho}");
	}
}

person.InTen();
console.log(person["ten"]);

function KhoaHoc(ten,hocphi){
	this.Ten = ten;
	this.HocPhi = hocphi;
}

KhoaHoc.prototype.mota = function(){
	console.log("khoa hoc: " + this.Ten + " " + this.HocPhi);
}

var khoaHoc = new KhoaHoc("C#",3000);
khoaHoc.mota();