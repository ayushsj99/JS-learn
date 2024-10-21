// console.log('Hello, JavaScript!');


// // understanding var and obj nullity in js
// let x= {}
// console.log(x)
// console.log(x.value)


// // Functions in JS
// const obj = {color: 'red'};
// obj.changeColor = function(color) {this.color = color}
// obj.changeColor('green')
// console.log(obj.color)


// // getting data from html
// const d= document.getElementById('d1');
// d1.innerHTML = 'Hello, JavaScript!';


// // decleration of basic array
// let x = [1,2,3,4,5]
// console.log(`${typeof(x)}: ${x} with length: ${x.length}`);
// console.log(x[0]);


// let y= [1, 'b', a => a+1, {name: 'John'}]
// console.log(`${typeof(y)}: ${y} with length: ${y.length}`);
// console.log(x.length, y.length);


// // iteration
// let x= [1, 'b', a => a+1, {name: 'John'}]
// x.length = 5
// for (let i=0; i<x.length; i++) {
//     console.log(`x: ${x[i]} of type ${typeof(x[i])}`);
// }


// // 'in' interation - skips undefined values - and 'i' is the index value
// for (const i in x) {
//     console.log(`x: ${x[i]} of type ${typeof(x[i])}`);
// }


// // 'of' iteration - skips undefined values - and 'i' is the value
// for (const i of x) {
//     console.log(`x: ${i} of type ${typeof(i)}`);
// }


// // Are objects iterable?

// let obj = {name: 'John', age: 30}
// for (const i in obj) {
//     console.log(i);
//     console.log(obj[i]);
// }


// // // 'of' gives error as objects are not iterable
// for (const i of obj) {
//     console.log(i);
//     console.log(obj[i]);
// }


// // // alternate way to iterate objects without error
// for (const [i,j] of Object.entries(obj)) {
//     console.log(j);
//     console.log(i,j);
// }


// // // spread operator
// let x=[2,3,4]
// let y=[1,...x,5]
// console.log(x)
// console.log(y)


// // // interation and transformation
// let x=[2,3,4,-2,5,-10,1];
// let y= x.find (a => a<0);
// console.log(y);

// console.log(x.filter(a => a<0));

// console.log(x.map(a => a>0? '=': '/'));

// console.log(x.reduce((a,i) => a+i, 0)); // i is the value and a is the accumulator

// console.log(x.sort()); // this sorts the array in lexicographical order or alphabetical order

// console.log(x.sort((a,b) => a-b)); // this sorts the array in ascending order


// // // Destructioning
// let x=[2,3,4];
// let [a,b] = x;
// console.log(x,a,b);
// console.log(a);
// console.log(b);

// // // object destructioning
// let obj = {name: 'John', age: 30, city: 'New York'};
// const {name: fn, age: a} = obj;
// console.log(obj);
// console.log(fn);
// console.log(a);


// // // get and set
// let user={
//     first:'Albert',
//     last:'Einstein',
//     get fullName() {
//         return `${this.first} ${this.last}`;
//     },
//     set fullName(value) {
//         const parts = value.split(' ');
//         this.first = parts[0];
//         this.last = parts[1];
//     }
// }

// console.log(user.fullName);
// user.fullName = 'Isaac Newton';
// console.log(user.fullName);


// // // // Function methods // // // // 


// let x = {'a':2, 'b':'hello', 'add': function(a,b) {return a+b+this.a}}
// console.log(x.add(1,2)); // method 1

// console.log(x.add(1,2,3)); // this will ignore the extra argument - method 2

// let z= x.add; //call() - method 3
// console.log(z.call(x,1,2)); // 'x' here is the reference object to give the context

// console.log(z.apply(x,[1,2])); // apply() - method 4 - spreads the arguments - extra arguments are ignored

// //bind - closure
// let z2 = z.bind(x, 2); // now 2 is fixed as the first argument
// console.log(z2(3)); // 2+3+2 = 7


// // Prototypes // // //

// const x= {a: 1, inc: function() {this.a++;}};
// console.log(x);
// const y= {__proto__: x, b: 2};
// console.log(y); // y has a and b
// console.log(y.a); // calling a from x using y
// y.inc(); // incrementing a in x using y
// console.log(y.a); // calling a from x using y after incrementing



// // // // Classes // // // //

// class Animal{
//     constructor(name) {
//         this.name = name;
//     }
//     describe() {
//         return `I am ${this.name} and I make ${this.sound}`;
//     }
// }

// let x= new Animal('jerry');
// console.log(x.describe()); // This will give error as sound is not defined

// class Dog extends Animal { // Inheritance
//     constructor(name) {
//         super(name);
//         this.sound = 'bark';
//     }
// }

// let d= new Dog('Tom');
// console.log(d.describe()); // This will give the correct output


