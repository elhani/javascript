
var orgchart =
 {
     name : 'Michelle ' , subordinates
                  [{ 
          
                     name : 'Andy' , subordinates: [
                         
                              {
                             name : 'Dwight', subordinates : []
                              },
                              {
                              name : 'Kevin', subordinates : []
                              }
                                                   ]
                                                   }
                    
                  ]              
}


                var fn = function (topEmployee) {
                    console.log(topEmployee.name);
                    for (var i=0 ; i<topEmployee.subordinates.lenght; i++)
        
                    fn (topEmployee.subordinates[i]);
        
               };
               fn (orgchart);
            


      