const findDup = arr  => +arr.sort((a,b)=>b-a).filter((e,i,a)=>e===a[i+1]).join()

// second

function findDup( a ){
    return a.find(x=>a.indexOf(x)!=a.lastIndexOf(x));
  }