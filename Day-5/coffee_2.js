// Async Programming 

const promise = new Promise((resolve, reject) => {
    const condition = true; // Change this to false to test rejection
    if (condition) {
        resolve('task done successfully!');
    } else {
        reject('task is rejected!');
    }
});

// Using async/await instead of .then()/.catch()
async function handlePromise() {
    try {
        const storeResolvedValue = await promise;
        console.log(storeResolvedValue);
    } catch (storeRejectedValue) {
        console.log(storeRejectedValue);
    }
}
handlePromise();


const coffeeMachine = new Promise((resolve, reject) => {
    console.log('coffee machine is preparing your coffee...');
    const everythingGood = true;
    setTimeout(() => {
        if (everythingGood) {
            resolve("coffee is ready!");
        } else {
            reject('coffee is rejected!');
        }
    }, 5000); // Execute after 5 seconds
});

console.log("Hello I'm Pawan Paudyal");

async function wrcCafe() {
    console.log("Welcome to WRC Cafe");
    console.log("waiter came to you and asked for your order");
    console.log("you ordered a coffee");
    console.log("waiter note it down and went to the coffee machine");

    try {
        const storeResolvedValue = await coffeeMachine;
        console.log(storeResolvedValue);
    } catch (storeRejectedValue) {
        console.log(storeRejectedValue);
    }
}

wrcCafe();s