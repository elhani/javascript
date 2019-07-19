
var salaryUpdater = function (salary){

      var currentSalary =salary;

      var generator = function (){
        currentSalary*=2;

               return currentSalary;
      };
      return generator;
};

var updateFn =salaryUpdater(5000);
console.log(updateFn());