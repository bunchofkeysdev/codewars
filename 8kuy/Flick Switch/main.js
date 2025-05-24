const flickSwitch = (arr)=>{
  const newArr = [true]
  for(let i=0; i<arr.length; i++ ){
    if(arr[i]==="flick"){
      newArr.push(!newArr[newArr.length-1])
    }else{
      newArr.push(newArr[newArr.length-1])
    }
  }
  return newArr.slice(1)
}
