

console.log(new Date().getSeconds());

var ID = setInterval(function(){
     var secs = new Date().getSeconds();
     console.log(secs);

     if (secs==10)
        clearInterval(ID);
},1000);