
console.log(new Date().getSeconds());

var ID = setInterval(function(){
     var secs = new Date().getSeconds();
     console.log(secs);

     if (secs==100)
        clearInterval(ID);


},1000);