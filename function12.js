

var Employee = function (name,boss,adress,age){

        this.name = name;
        this.boss = boss;
        this.adress=adress;
        this.age=age;

};
var newEmployee = new Employee ('sami','mohamed','sousse ',34);
console.log(newEmployee);

console.log(typeof newEmployee );