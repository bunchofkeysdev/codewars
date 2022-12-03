const maxGap = (numbers) => Math.max(...numbers.sort((a,b)=>a-b).map((e,i,a)=>a[i+1]?a[i+1]-e:null))
