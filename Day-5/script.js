// Async  Programming 
 
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
instanceOfPromise.then((storeResolvedValue) => { 
    console.log(storeResolvedValue);
}) 
.catch((storeRejectedValue) => {
    console.log(storeRejectedValue);
});

