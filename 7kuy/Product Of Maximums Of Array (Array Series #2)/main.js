const maxProduct = (numbers, size) => numbers.sort((a,b)=>b-a).splice(0,size).reduce((a,b)=>a*b,1)
