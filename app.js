const http = new easyHttp();

//GET USERS
// const users = http.get('https://jsonplaceholder.typicode.com/users');

// users.then(data => console.log(data)).catch(error => console.log(error));

// CREATE USER
// const user = {
//     name: "John Doe",
//     username: "JDoe",
//     email: "JoeDoe@faker.com",
// }

// const createUser = http.post('https://jsonplaceholder.typicode.com/users', user);

// createUser.then(data => console.log(data)).catch(error => console.log(error));

//UPDATE USER
// const userUpdated = {
//     name: "John Doe",
//     username: "John_Doe",
//     email: "JoeDoe@faker.com",
// }

// const updateUser = http.post('https://jsonplaceholder.typicode.com/users', userUpdated);
// updateUser.then(data => console.log(data)).catch(error => console.log(error));

//DELETE USER

// const deleteUser = http.delete('https://jsonplaceholder.typicode.com/users/1');

// deleteUser.then(msg=> console.log(msg)).catch(error => console.log(error));