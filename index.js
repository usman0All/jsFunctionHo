// function show(){
//     console.log("My name is usman");
// }
// show();
// function printSum(num1,num2){
//     let sum=num1+num2;
//     console.log("Sum of "+num1+" and "+num2+" is "+sum);
// }
// printSum(4,5);
// let arrowF=(()=>{
//     console.log(" i am Arrow Function")
// })
// arrowF();

//"Print output: 
// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl ();

//"Print output: 
// var x = 21;
// girl ();////undefine
// console.log(x)//21
// function girl() {
//     console.log(x);
//     var x = 20;
// };
//"Print output

// var x = 21;
// a();
// b();

//   function a() {
    
//    x = 20;
//   console.log(x);
// };
//  function b() {
    
//     x = 40;
//    console.log(x);
// };
// function factorial(num){
//     let fact=1;
//     for(let i=num;i>0;i--){
//         fact=fact*i;
//     }
//     return fact;
// }
// let facto=factorial(5);
// console.log(facto);
//"Guess the Output

// function FindSum(a, b){
//     return a + b;
// }

// function DisplayData(data, batch){
//     console.log(`i am from ${data} and My batch is EA${batch}`)
// }

// DisplayData("PrepBytes", FindSum(20, 1));

//"Guess the output

/*Abc();//canot access Abc() before initialization because Abc is a variable and we cannot acces a local vriable before initialixzation
const Abc = function(){
    let value = 20;
    console.log(value);
}
*/
// Abc2();//20
// function Abc2(){
//     let value = 20;
//     console.log(value);
// }
//3
//"Guess the output

// var a = 10;
// (function (){
//     console.log(a);
//     var a = 20;
// })()
// var a = 10;
// (function (){
//     console.log(a);
// })();

//"Guess the Output
const greet =  function(name){
    return function(m){
    
        console.log(`Hi!! ${name}, ${m}`);
    }
}
  
const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes");