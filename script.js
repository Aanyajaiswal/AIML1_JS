// console.log("Hello World");
// document.write("Hello World");

// // PRIMITIVE TYPE
// var num=10;
// console.log(num);
// console.log(typeof(num));
// num=false;
// console.log(num);
// console.log(typeof(num));
// num="AANYA";
// console.log(num);
// console.log(typeof(num));
// num=null;
// console.log(num);
// console.log(typeof(num));
// num=undefined;
// console.log(num);
// console.log(typeof(num));


// {/* <script type="text/javascript">
// const sym1=Symbol(4);
// console.log(sym1);
// const sym2=Symbol(4);
// console.log(sym2);
// if(sym1==sym2){
//     console.log("true")
// }
// else{
//     console.log("false")
// }
// </script>  
//  */}


//   <script type="text/javascript">
// var a= 10;
// var b=20;
// var linebreak="<br/>;

// document.write(result);
// document.write(linbreak);

 
// </script>

// {/* <script type ="text/javascript">
//    var count;
//    document.write("Starting Loop"+"<br/>"),
//    for(count=0;count<10;count++){
//     document.write("Current count:"+count),
//     document.write(linebreak)
//    }
//    document.write("Loop stopped"),

// </script> */}



// for(key in object){

// }
const person={
    fname: "Ajay",
    lname:" Singh",
    age:25
};
for(let x in person){
    console.log("person details:"+ x +":"+ person[x])
}
