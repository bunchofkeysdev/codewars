function findMultiples(integer, limit) {
    let arr = []
    
    for(let i = 1; i <= limit; i++){
      if(integer*i <= limit){
        arr.push(i*integer)
      }
      
      
    }
    return arr
  }