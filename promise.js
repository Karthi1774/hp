//promise

//syntax
//return new Promise((resolve, reject)=>{})

function go(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const shop =true
            if(shop){
            resolve("iam going to the shop")
            }
            else{
            reject("i am not going to the shop")}
        },5000)
    })
}

function buy (){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const product = false
            if(product){
            resolve("i am buying the product")}
            else{
            reject("i am not buying the product")}
        },2000)
    })
}

function change(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const change=true
            if(change){
            resolve("collect the changes")}
            else{
                reject("dont collect the change")
            }
        },2000)
    })
}

function back(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const home=true
            if(home){
            resolve("return to home")}
            else{
                reject("return to ground")
            }
        },2000)
    })
}
//go()
//.then(val=>{console.log(val); return buy()})
//.catch(val=>{console.log(val); return change()
//})
//.then(val=>{console.log(val);return back()
//})
//.then(val=>{console.log(val);
//})

async function js() {
    try {
        const a=await go();
    console.log(a);
    const b=await buy();
    console.log(b);
    const c=await change();
    console.log(c);
    const d=await back();
    console.log(d);
        
    } catch (error) {
        console.log(error);
        
    }
     
    
}
js();