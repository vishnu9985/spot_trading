console.log("get a joke")

let url = 'https://official-joke-api.appspot.com/random_joke';

function getJoke() {
    fetch(url)
        .then(res => res.json())
        .then(joke => displayJoke(joke))
        .catch(err => {
            console.error(err);
            displayJoke({setup: 'Oops!', punchline: 'Could not fetch a joke.'});
        });
}

function displayJoke(joke) {
    const setupDiv = document.querySelector('#joke-container .setup');
    const punchlineDiv = document.querySelector('#joke-container .punchline');
    setupDiv.textContent = joke.setup;
    punchlineDiv.textContent = joke.punchline;
}
const getJokeBtn = document.getElementById('getjokebtn');
const nextJokeBtn = document.getElementById('nextjokebtn'); 

function showJoke() {
    getJoke();
    nextJokeBtn.style.display = 'inline-block';
}
getJokeBtn.addEventListener('click', showJoke);
nextJokeBtn.addEventListener('click', showJoke);    


