function twoOldestAges(ages){
    let newAge = ages.sort((a,b)=>b-a)
     return [newAge[1],newAge[0]]
    }
    