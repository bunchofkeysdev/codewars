function sumArray(array) {
    return (array === undefined || array === null) ? 0 : array.sort((a, b) => a - b).slice(1, -1).reduce((a, b) => a + b, 0)



    //   let lowest = 100;
    //   let highest = -100;

    // if ( array===undefined || array === null ){
    //   return 0
    // }else{
    //   array.forEach(e=>{
    //     if(e<lowest){
    //       lowest=e
    //     }if (e>highest){
    //       highest=e
    //     }
    //   })

    //   return array.reduce((e,a)=> e + a,0)-highest-lowest
    // }

}