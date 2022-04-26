// a = [1,2,3,4,5,6,7,];

// b = a.map( x => x *2)
// console.log(b)

// c = a.filter( x => x >= 4)
// console.log(c)

// d = a.find( x => x > 1)
// console.log(d)

// e = a.every( x => x > 7)
// console.log(e)

// f = a.pop()
// console.log(f)
// console.log(a)

// g = a.push(10)
// console.log(g)
// console.log(a)

// h = a.some(x => x % 2 == 50)
// console.log(h)
// console.log(a)

// console.log(a.fill(13));


// function hi(x,y,z)
// {
//     for(i=x ; i<=y ;i++)
//     {
//       z.includes(i) ? '' : console.log(i)
//     }
// }
// hi(1,10,[10,9,8])


// let b = [1,1,1,2,2,3,3,4,5,6]

// let d = b.filter((e, i, a) => a.indexOf(e) != i) // [2, 4]

// console.log(d)

// let z = x => x > 1 ;

// console.log(b.every(z))
/**
 * filter data based on age and display details
 * those who age > 18 add description in object
 * remove first three object without effecting original array
 * remove 3rd object on orignal array
 * 
 */

// let a = [
//     {
//         name: "khalid",
//         age: 23,
//         gender: "male",

//     },
//     {
//         name: "Anas",
//         age: 18,
//         gender: "male",
//     },
//     {
//         name: "affan",
//         age: 21,
//         gender: "male",
//     },
//     {
//         name: "iqra",
//         age: 60,
//         gender: "female",
//     },
//     {
//         name: "shifa",
//         age: 70,
//         gender: "female",
//     }
// ]

// const m = a.sort((a,b)=>{
//     if(a.name > b.name && a.age > b.age){
//         return 1
//     }
//     else if(a.name < b.name && a.age < b.age){
//         return -1
//     }
//     else{
//         return 0
//     }

// })
// console.log("mm",m);

// n = ["khalid","annu","affan","iqra","shifa",1,5]
// console.log(n.sort());


/**
 * forEach
 * filter
 * map
 * reduce
 * mapReduce
 * slice
 * splice
 * fill
 * indexOf
 * find
 * 
 */
// let tempArr = []
// a.forEach((singleObj)=>{
// singleObj.age > 18 ? tempArr.push(singleObj) :  true
// })
// console.log(tempArr);

// const b = a.filter(single => single.age > 18);
// console.log("b",b);

// const c = a.map((single)=>{
// single.age > 18 ? (single.dis = "bachha bada hogay")  :""
// return single
// })
// console.log("cc",c)

// const d= a.find(single => single.age > 18);
// console.log("d",d);


// const e = a.findIndex(single=> single.name === 'khalid');
// delete a[e]
// console.log("ee",e)


// const hi = []
// for(i=0 ; i < array1.length; i++)
// {
//      h = (hi.push(array1[i]));
//      console.log(h);

// }

// const array1 = [1,2,3,4,5,2,3,5,1];

// const iterator1 = array1.entries();

// console.log(iterator1.next().value);

// for(let x of iterator1){
//     console.log(x);
// }

//  array1.forEach(x => console.log(x))

//  console.log(array1.indexOf(1)); 

//  console.log(array1.lastIndexOf(1)); 

//  console.log(array1.some(x => x > 10)); 

//  console.log(array1.every(x => x > 10)); 


// program to find the factorial of a number

// take input from the user

    // fact = 1;

    // for(i =1; i<=5 ; i++)
    // {
    //     fact *= i;
    // }
    //  console.log(fact)

// program to print prime numbers between the two numbers

// take input from the user



// const lowerNumber = 10;
// const higherNumber = 100;

// console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
// for (let i = lowerNumber; i <= higherNumber; i++) {
//     let flag = 0;

    // looping through 2 to user input number
    // for (let j = 2; j < i; j++) {
    //     if (i % j == 0) {
    //         flag = 1;
    //         break;
    //     }
    // }

    // if number greater than 1 and not divisible by other numbers
//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }

// program to find the LCM of two integers

// take input
// const num1 = 6;
// const num2 = 49;

// higher number among number1 and number2 is stored in min
// let min = (num1 > num2) ? num1 : num2;

// while loop
// while (true) {
//     if (min % num1 == 0 && min % num2 == 0) {
//         console.log(`The LCM of ${num1} and ${num2} is ${min}`);
//         break;
//     }
//     min++;
// }



// const a = 10;
// const b = 100;
// const c = 1000;

// if(a >= b && a>=c )
// {
//     largest = a;
// }
// else if(b >= c && b >= a)
// {
//     largest = b;
// }
// else
// {
//     largest = c;
// }
// console.log(largest);

// const largest = Math.max(a,b,c)
// console.log(largest);









// const num1 = prompt('enter a number')
// const operator = prompt('enter a oprand');
// const num2 = prompt('enter a number')

// let result ;

// if(operator == '+'){
//     result = num1 + num2;
// }
// else if(operator == '-'){
//     result = num1 - num2;
// }
// else if(operator == '*'){
//     result = num1 * num2;
// }
// else
// {
//     result = num1 / num2;
// }

// console.log(result);
    


function hello(x,y,z)
{

    for(i=x ; i<=y ; i++)
    {
     if(z.includes(i) ? console.log('*') : console.log(i));
    }
}
hello(1,10,[5,4,3])






















