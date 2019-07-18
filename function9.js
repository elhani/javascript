var Employee =function (name){
    this.name=name;
};
Employee.prototype.giveRaise =function(){
};
var e1 = new Employee('JJ');
var e2 = new Employee('jv');
console.log(e1.giveRaise===e2.giveRaise);