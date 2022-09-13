function twoOldestAges(ages){
    let newAge = ages.sort((a,b)=>b-a)
     return [newAge[1],newAge[0]]
    }
    
    // second
    function twoOldestAges(ages){
        return ages.sort(function(a,b){return a-b;}).slice(-2);
      }