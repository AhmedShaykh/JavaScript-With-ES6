function promises() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            let problem = false;
            if(!problem) {
                console.log('Promise Fulfilled');
                resolve();
            } else {
                console.log('Promise is not fulfilled');
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
  
delay(2000).then(() => console.log('Running After 2 seconds'));

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