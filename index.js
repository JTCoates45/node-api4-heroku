require('dotenv').config(); 

const server = require('./api/server');


const PORT = process.env.PORT || 9000;

server.listen(9000, () =>{
    console.log(`server is running on port ${PORT}`)
});










// function someProdcedure(a) {
//     if (a == 1) {
//         return 5;
//     } else if (a == 2) {
//         return 10;
//     }
//     throw new Error("a should be 1 or 2");
// }

// try{

// console.log("my result is: ", someProdcedure(3));
// } catch(error) {
//     console.log("i got an exception: ", error.message);
// }

//callback
// function after1Second(callback) {
//     setTimeout(callback, 1000);
// }

// after1Second(() => console.log('it workd'));


// function after1SecondPromise() {
//     return new Promise (resolve=> {
//         setTimeout(resolve, 1000);
//     });
// }

// after1SecondPromise()
//     .then(() => console.log('it worked'))
//     .then(after1SecondPromise)
//     .then(() => console.log('it worked'))
//     .then(after1SecondPromise)
//     .then(() => console.log('it worked'))
//     .then(after1SecondPromise)
//     .then(() => console.log('it worked'))
//     .then(after1SecondPromise)
//     .then(() => console.log('it worked'))
//     .then(after1SecondPromise)

// async function asyncThing() {
//     await after1SecondPromise();
//     console.log("it workd");
//     await after1SecondPromise();
//     console.log("it workd");
//     await after1SecondPromise();
//     console.log("it workd");
//     await after1SecondPromise();
//     console.log("it workd");

// }    
// thing();