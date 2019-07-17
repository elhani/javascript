// qvec configurable on peut pas modif

var task ={};

Object.defineProperty(task,'text',{ value: 'get this job ', 
configurable: true

});
task.text= task.text + '...NOW';
console.log(task.text);
Object.defineProperty( task,'text', { value: 'done'});
console.log(task.text);
