//settimeout

function box1 (){
setTimeout(()=>{
console.log("sucessful");

},5000)

}
function box2 (){
    setTimeout(()=>{
console.log("loading");

    },2000)
}
function box3(){
    setTimeout(()=>{
        console.log("complete");
        
    },3000)
}
box1();
box2();
box3();