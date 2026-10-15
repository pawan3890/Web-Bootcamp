// Promise 

const promise = new Promise((resolve, reject) => {
    const condition = true; // Change this to false to test rejection
    if (condition) {
        resolve('task done successfully!');
    } else {
        reject('task is rejected!');
    }   
} );

// resolve value ---> then ()
// reject value ---> catch ()
promise.then((storeResolvedValue) => { 
    console.log(storeResolvedValue);
}) 
.catch((storeRejectedValue) => {
    console.log(storeRejectedValue);
});

const coffeeMachine = new Promise((resolve, reject) => {
    console.log('coffee machine is preparing your coffee...');    
     const everythingGood = true;
    setTimeout(() => {
        if (everythingGood) {
            resolve("coffee is ready!");
        } else {
            reject('coffee is rejected!');
        }
    }, 5000)  //Execute after 5 seconds
    });
console.log("Hello I'm Pawan Paudyal");

function wrcCafe() {
        console.log("Welcome to WRC Cafe");
        console.log("waiter came to you and asked for your order");
        console.log("you ordered a coffee");
        console.log("waiter note it down and went to the coffee machine");
    coffeeMachine.then((storeResolvedValue) => {
        console.log(storeResolvedValue);
    })
    .catch((storeRejectedValue) => {
        console.log(storeRejectedValue);
    });
    }
wrcCafe ();