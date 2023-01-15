function cubeOdd(arr) {
    return arr.every(element => typeof element === 'number')?
    arr.map(e=> e*e*e).filter(e=>e%2).reduce((a,b)=>a+b,0) : undefined
    
    
    
    }

    //second
    const cubeOdd = arr =>
 arr.every(element => typeof element === 'number')?
arr.map(e=> e*e*e).filter(e=>e%2).reduce((a,b)=>a+b,0) : undefined
