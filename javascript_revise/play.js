// let user_name = 'Anirban'; 
// console.log(user_name);


// const person = {
//     name : 'Anirban',
//     age: 29,
//     greet(){
//         console.log(`hello Testing`);
        
//     }
// }
// person.greet();

// //rest operator
// const coppiedPerson = {...person};
// console.log(coppiedPerson);


// const arr = new Array(1,2,3);
// console.log(arr);

// const coppiedArray = new Array(...arr, 87, 98)
// console.log(coppiedArray);


// // spread operator

// const toArray = (...args) => {
//     return args;
// }

// console.log(`rest: ${toArray(1,2,34)}`);
// console.log(toArray(1,2,34));

//=====================Obect and Array destructuring==================

const person = {
    name : 'Anirban',
    age: 29,
    greet(){
        console.log(`hello Testing`);
        
    }
}

const { name, greet } = person;

console.log(name, greet);


const hobbies = ['Cooking', 'Music'];

const [hobby1, hobby2] = hobbies;

console.log(typeof hobby1, hobby2);







