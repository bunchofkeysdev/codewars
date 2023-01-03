function freqSeq(str, sep) {
    let newArr = str.split('')
    let newA = str.split('').map(e=>e=0)
    for(let i = 0; i < newArr.length; i++){
      for(let j = 0; j < newArr.length; j++){
        if (newArr[i] == newArr[j]){
          newA[i]++
        }
      }
    }
     return newA.join(sep)
   }
   