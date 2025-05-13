//function

//syntax
//function name(){}

function js (){
    var a =10;
    var a=20;
    console.log(a);
    
    
    let b=100;
    b=200;
    console.log(b);
    
    const c=30;
    console.log(c);
}
js();

//function types
//syntax(){}
//function statement Declaration- paramters and arrguments

function jj (hi){
    console.log(hi);
    }
    jj("hello world");

//function expression and anonymous function'

let a= function fun(exp){
    console.log(exp);
}
a("experssion");

//anonymous function

let b= function(hello){
    console.log(hello);
    
}
b("anonymous");

//Immediate Invoke Function expression

(function(life){
    console.log(life);
    
})("immediate");


//Arrow Function
//syntax ()=>{}

    let d= (gg)=>{console.log(gg);}
    d("arrow function");
