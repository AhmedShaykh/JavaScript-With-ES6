function promises() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            let problem = false;
            if(!problem) {
                console.log('Promise Fulfilled');
                resolve();
            } else {
                console.log('Promise is not Fulfilled');
                reject();
            }
        }, 1000);
    });
};

promises().then(() => {
    console.log(`Your Crush Accepted your Proposal 😂`);
}).catch(() => {
    console.log('Your Crush Rejected your Proposal 💔');
});

new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve('Completed');
    }, 3000);
})
.finally(() => console.log('Done'))
.then(result => console.log(result));

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
delay(2000)
.then(() => console.log('Running After 2 seconds'));

async function getData() {
    let myPromise = new Promise(function(resolve, reject) {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(function(response) {
            return response.json()
        })
        .then(function(result) {
            resolve(result)
        })
        .catch(function(error) {
            reject(error)
        })
    })
    let data = await myPromise
    console.log(data)
};

getData();