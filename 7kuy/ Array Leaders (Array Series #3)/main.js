function arrayLeaders(numbers){
    return numbers.filter((e,i,a)=>e>a.slice(i+1).reduce((a,b)=>a+b,0))
  }

//   second
const arrayLeaders = (numbers) => numbers.filter((e,i,a)=>e>a.slice(i+1).reduce((a,b)=>a+b,0))
