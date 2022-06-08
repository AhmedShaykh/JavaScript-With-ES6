function promises() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            let error = false;
            if(!error) {
                console.log('Promise Fulfilled');
                resolve();
            } else {
                console.log('Promise is not fulfilled');
                reject();
            }
        }, 2000);
    });
};

promises().then(() => {
    console.log(`Your Crush accepted your proposal 😂`);
}).catch(() => {
    console.log('Your crush rejected your proposal 💔')
});

// function promise() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             reject(new Error('Whoops!'));
//         }, 1000);
//     });
// };

// promise().then(
//     result => console.log(result),
//     error => console.log(error)
// );

// new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         resolve('Completed');
//     }, 3000);
// })
//     .finally(() => console.log('Done'))
//     .then(result => console.log(result))

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
  
// delay(3000).then(() => console.log('runs after 3 seconds'));


// class Thenable {
//     constructor(num) {
//         this.num = num        
//     };
//     then(resolve, reject) {
//         console.log(resolve)
//         setTimeout(() => resolve(this.num * 2), 1000);
//     };
// };

// new Promise(resolve => resolve(1))
//     .then(result => {
//         return new Thenable(result)
//     })
//     .then(console.log());



// fetch('/article/promise-chaining/user.json')
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(user) {
//         console.log(user.name)
//     });


// fetch('/article/promise-chaining/user.json')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(user) {
//         fetch(`https://api.github.com/users/${user.name}`)
//     })
//     .then(response => response.json())
//     .then(function(githubUser) {
//         let img = document.createElement('img');
//         img.src = githubUser.avatar_url;
//         img.className = "promise-avatar-example";
//         document.body.append(img);

//         setTimeout(() => {
//             img.remove()
//         }, 3000)
//     });


// async function getData() {
//     let promise01 = new Promise(function(resolve, reject) {
//         fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(function(response) {
//             return response.json()
//         })
//         .then(function(result) {
//             resolve(result)
//         })
//         .catch(function(error) {
//             reject(error)
//         })
//     })
//     let data = await promise01
//     console.log(data)
// };

// getData();