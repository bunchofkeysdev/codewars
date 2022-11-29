function evenLast(numbers) {
    return numbers.length === 0? 0 :numbers.filter((e,i,a)=>i%2==0).reduce((a,b)=>a+b,0)*numbers[numbers.length-1]
  }

//   second
const evenLast = n => n.reduce((p, c, i) => i % 2 ? p : p + c, 0) * n[n.length - 1] || 0