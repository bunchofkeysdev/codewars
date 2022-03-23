function multiTable(number) {

    //   let table = ''
    //   for (let i = 1; i <= 10; i++){
    //     if (i<10){
    //       table += `${i} * ${number} = ${i*number}\n`
    //     }else
    //     table += `${i} * ${number} = ${i*number}`
    //   }
    //   return table

    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(e => `${e} * ${number} = ${e * number}`).join('\n')
}