
let element = document.getElementById("messageArea");
fetch("http://jsonplaceholder.typicode.com/users/1")
.then(response => response.json())
.then(data => {
let message = "User email: " + data.email;
element.innerHTML = message
});
console.log(messageArea)
