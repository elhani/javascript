 
 var app ={};
 var jquery ={};
 ( 
     function (ns, $)
     {
     ns.name ='None';
     console.log($===jquery);
     }

 ) (app, jquery);