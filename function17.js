var Employee =function (name){
    this.name=name;
    this.salary =50000;
};
console.log(typeof this);
Employee.prototype.giveRaise= function (raise){
  this.salary+=raise;
};

var e1 =new Employee('JJ');
var e2 =new Employee('JV');

e1.giveRaise(90000);

console.log(e1.salary);
console.log(e2.salary);