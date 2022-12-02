function lastSurvivor(letters, coords) {
    let arr = letters.split('') 
   coords.forEach(e=>{
     arr.splice(e,1)    
   })
  return arr.join()
 }