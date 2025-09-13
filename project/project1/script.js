console.log("==Hour 1: Json Basics==");

let book =[ {
    title: "rohit sharama",
    author: "vishnu",
    year: 2025
    },
    {
    title: "264",
    author: "vardhan",
    year: 2014
},
 {
    title: "Leadership Qualities",
    author: "vishnu vardhan",
    year: 2025
}];

console.log("Books Array:", book);

let jsonString = JSON.stringify(book);
console.log("JSON String:", jsonString);

let parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject);

console.log("==Hour 2: Ajax with Fetch==");

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log("Fetched Data :", data);
    })
    .catch(error => console.error("Error :", error));




fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => {
        let output = "<h3>Users List</h3><ul>";
        users.forEach(user => {
            output += `<li>${user.name} - ${user.email}</li>`;
        });
        output += '</ul>';
        document.body.innerHTML += output;
    });


