function removeRotten(bagOfFruits){
    let arr = []
  if (bagOfFruits == null){
    return []
  }
  for(let i =0;i<bagOfFruits.length;i++){
    if(bagOfFruits[i].length < 10 || bagOfFruits[i] === 'strawberry'){
      arr.push(bagOfFruits[i])
    }else{
       arr.push(bagOfFruits[i][6].toLowerCase()+bagOfFruits[i].slice(7))
    }
  }
  return arr
  }

//   