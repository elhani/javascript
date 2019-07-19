var salaryUpdater = function (salary){

    var currentSalary =salary;

    var generator = function (){
      currentSalary+=10000;

             return currentSalary;
    };
    return generator;
};

var updateFn =salaryUpdater(5000);
updateFn();
console.log(updateFn());