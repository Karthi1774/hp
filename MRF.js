// map
// reduce
// filter

//map
// variable name.map((value,index,accumulator)=>)

    const a=[10,20,30,40,50,60]
    const b=a.map((val,ind,acc)=>val+5)
    console.log(b);
    const a1=[10,20,30,40,50,60]
    const b1=a.map((val,ind,acc)=>ind*5)
    console.log(b1);

// filter
// variable name.filter((value,index,accumulator)=>)

    const c=[10,20,30,40,50,569,9552,5,3,12,45,78,85,963,332,65,4,52.22,12,10,3,8]
let d= c.filter((x,y,z)=>x>100)
console.log(d);

//reduce
//variable name.reduce((accumulator,actualarray)=>)

    let red = [10,20,30,40]
    let ced= red.reduce((a,b)=>a-b)
    console.log(ced);
    