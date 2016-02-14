module.exports=
function(name,age){
	this.name=name;
	this.age=age;
	this.about=function(){
		console.log("name:"+this.name+ " age:"+this.age);
	}
}
exports.name=function(){
	console.log("Cena WANG");
}