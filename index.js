// let arr = [2,342,,63,67,4]
// let biggestNumber = arr[0]
// for(let i=0;i<arr.length;i++){
//     if(biggestNumber<arr[i]){
//         biggestNumber = arr[i]
//     }
// }
// console.log("biggest Number ",biggestNumber)

// const allUsers = [{
//     firstName:"Alfed",
//     gender:"male"
// },{
//     firstName:"hkirat",
//     gender:"male"
// },{
//     firstName:"priya",
//     gender:"female"
// }]

// for(let i=0;i<allUsers.length;i++){
//     if(allUsers[i]["gender"]=="male"){
//         console.log(allUsers[i]["firstName"])
//     }
// }

// function sum(a,b){
//     return a+b
// }
// console.log(sum(2,3))


// function calculatorArithemetic(a,b,fnCallback){
//     return fnCallback(a,b) 
// }
// function sum(a,b){
//     return a+b
// }
// function subtract(a,b){
//     return a-b
// }
// console.log(calculatorArithemetic(3,3,subtract))


// function greet(){
//     console.log("Hii Alfed, do harkirat course with great dedication")
// }
// setInterval(greet,1000)

// let counter = 30

// const timer = setInterval(function countDown(){
//     console.log(counter)
//     counter--;
//     if(counter<0){
//         clearInterval(timer)
//     }
// },1000)


// let array = [2,4,5,6,7]
// let array3 = array.map((element)=>{
//     return element+element;
// })
// console.log(array)
// console.log(array3)

// let numbers = [2,4353,42,4,6,7,4]
// let evenNumbers = numbers.filter((element)=>element%2==0)
// console.log(numbers)
// console.log(evenNumbers)


// const numbers = [1,2,3,4]
// const sum = numbers.reduce((total,num)=>{
//     return total+num
//     console.log(total,num)
// },0)
// console.log(sum)


// const beforeDate = new Date();
// const beforeTimeInMilliSeconds = beforeDate.getTime();
// console.log(beforeTimeInMilliSeconds)

// let sum = 0;
// for(let i=0;i<10000000;i++){
//     sum+=i;
// }

// const afterDate = new Date();
// const afterTimeInMilliSeconds = afterDate.getTime();

// console.log("Time it took for execution",afterTimeInMilliSeconds-beforeTimeInMilliSeconds)
// function square(n){
//     return n*n;
// }
// function cube(n){
//     return n*n*n;
// }
// function sumOfSquares(a,b){
//     let sum1 = square(a);
//     let sum2 = square(b);
//     return sum1 + sum2;
// }
// function sumOfCubes(a,b){
//     let sum1 = cube(a);
//     let sum2 = cube(b);
//     return sum1+sum2;
// }
// function sumOfTwoOperations(a,b,fn){
//     let sum1 = fn(a);
//     let sum2 = fn(b);
//     return sum1+sum2;
// }

// console.log(sumOfSquares(5,5))
// console.log(sumOfCubes(5,5))
// console.log(sumOfTwoOperations(5,5,cube))
// console.log(sumOfTwoOperations(5,5,square))


// function sumAfterTwoOperations(a,b,fn){
//     let sum1 = fn(a);
//     let sum2 = fn(b);
//     return sum1+sum2;
// }
// console.log(sumAfterTwoOperations(4,4,function square (n){return n*n}))