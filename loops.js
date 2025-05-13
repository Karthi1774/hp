// loops

//for loop
//while loop
//do while
//for in
//for of


//for loop
//syntax

//for(initilization;condition;iteration)

for(let a =1;a<=5;a++) {
    console.log(a);
}

//while loop

//initilization
//while(condition){
//console
//iteration
//}

let b =5;
while(b>=0){
    console.log(b);
    b--
}

//do while

let c=1;
do{
    console.log("java");
    c++
}while(c>=5);


//for of
let days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
for( sap of days){
    console.log(sap);
}

//for in

let obj ={
    name:"gajendran",
    place:"chennai",
    num:8148485483,
    id:84658213
}
for(result in obj){
    console.log(result+":" + obj[result]);
    
}