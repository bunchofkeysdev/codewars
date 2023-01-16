function outed(meet, boss){
    let arr = []
  for (key in meet){
    if(key === boss){
      arr.push(meet[key]*2)
    }else{
        arr.push(meet[key])
    }
  
  }
   return arr.reduce((a,b)=>a+b,0) /arr.length <= 5 ? "Get Out Now!" : "Nice Work Champ!"
  }