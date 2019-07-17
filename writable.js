'use strict';
var task ={};
Object.defineProperty(task, 'text',{ value : 'get this job done', writable : true});

task.text= task.text + '...NOW';
console.log(task.text);

