var M = 8;



 


var echec =[] ;
for(var i=0 ; i<M; i++) {
    echec[i] =[];
    for(var j=0; j<M; j++) {
      echec[i][j]=[''][''];

   var echec =[[(0.0),(0.1),(0.2),(0.3) ,(0.4) ,(0.5) ,(0.6),  (0.7)] ,
               [(1.0),(1.1),(1.2),(1.3) ,(1.4) ,(1.5) ,(1.6), (1.7)],
               [(2.0),(2.1),(2.2),(2.3) ,(2.4) ,(2.5) ,(2.6), (2.7)],
               [(3.0),(3.1),(3.2),(3.3) ,(3.4) ,(3.5) ,(3.6), (3.7)],
               [(4.0),(4.1),(4.2),(4.3) ,(4.4) ,(4.5) ,(4.6), (4.7)],
               [(5.0),(5.1),(5.2),(5.3) ,(5.4) ,(5.5) ,(5.6), (5.7)],
               [(6.0),(6.1),(6.2),(6.3) ,(6.4) ,(6.5) ,(6.6), (6.7)],
               [(7.0),(7.1),(7.2),(7.3) ,(7.4) ,(7.5) ,(7.6), (7.7)]]
               
    }
};

console.log(echec);


var cheval;

var cheval = Object.create(echec);
                         var cellX ;
                         var cellY;

                         cheval.cellX ;
                         cheval.cellY ;

                         chevalMoves = [
                            {xcordinate:2, ycordinate:-1},
                            {xcordinate:2, ycordinate:1},
                            {xcordinate:1, ycordinate:-2},
                            {xcordinate:1, ycordinate:2},
                            {xcordinate:-2, ycordinate:-1},
                            {xcordinate:-2, ycordinate:1},
                            {xcordinate:-1, ycordinate:-2},
                            {xcordinate:-1, ycordinate:2}
                          ]
                         
                        console.log(chevalMoves);

                        console.log(cheval);


var pointA = Object.create(echec)  ;
                        
                          var ycordinatpointA;
                          var xcordinatpointA;


                          pointA.xcordinatpointA=3;
                          pointA.ycordinatpointA=1;

                          console.log(pointA);

console.log(Movecheval(echec));
                          
function Movecheval(cellX){

    
    var xcordinatcheval = [ '0', '1', '2', '3', '4', '5', '6', '7'  ];
    
    
   
    console.log(xcordinatcheval);
    
    
                        var possiblemove =Object.create(echec) ;
    
    
    possiblemove.cellXpositions= function()
                                 {
                                    
                                 return   [cellXpositions[i], cellYpositions[j]] ;
                                 }
    
        console.log(possiblemove.cellXpositions) ;  
       ;                   
       possiblemove.cellYpositions= function()
                                  {
      
                                   return   [cellXpositions[i], cellYpositions[j]] ; 
    
                                  }
       console.log(possiblemove.cellYpositions) ;

       
     
       var cellX = 4;
       var cellY =3 ;

      var cellXpositions = [cellX + 2, cellX - 2, cellX + 1, cellX - 1].filter(function(cellPosition) {
                       
    
                                  return (cellPosition > 0 && cellPosition < 7);
                                          })
    
       console.log(cellXpositions);
       
       
      var cellYpositions = [cellY + 2, cellY - 2, cellY + 1, cellY - 1].filter(function(cellPosition) {
    
                                   return (cellPosition > 0 && cellPosition < 7);
                                   })
       console.log(cellYpositions);
    

      



            for (var i = 0; i < cellXpositions.length; i++) {
            for (var j = 0; j < cellYpositions.length; j++) {
                  
                 if (Math.abs(cellX - cellXpositions[i]) + Math.abs(cellY - cellYpositions[j])===3 ) {
                      console.log('This is a valid coordinate: ', [cellXpositions[i], cellYpositions[j]]);
                         if (!possiblemove.includes([cellXpositions[i], cellYpositions[j]])) {
                          possiblemove.push([cellXpositions[i], cellYpositions[j]]);

                          
                                } 
                                }
                                    }
    
    
                                }
    
                 console.log('Possible Coordinates:', possiblemove);
                  console.log ('Possible Moves:', possiblemove.length);
                  console.log(cellX);
                  console.log(cellY);
                  return possiblemove.length;
                            }
                            
                            
               




 