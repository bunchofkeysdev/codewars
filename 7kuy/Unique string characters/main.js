const solve=(a,b)=>a.split('').filter((e,i)=>!b.includes(e)).concat(b.split('').filter((e,i)=>!a.includes(e))).join('')
