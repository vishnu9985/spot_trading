//Weather Info Fetcher project
console.log("=== Weather Info Fetcher === ");

const cityCoords = {
    "bangalore": { lat: 12.97, lon: 77.59 },
    "mumbai": { lat: 19.07, lon: 72.87 },
    "delhi": { lat: 28.70, lon: 77.10 },
    "kolkata": { lat: 22.57, lon: 88.36 },
    "chennai": { lat: 13.08, lon: 80.27 },
    "hyderabad": { lat: 17.38, lon: 78.47 },
    "anantapur": { lat: 14.68, lon: 77.60 },
    "tadipatri": { lat: 14.23, lon: 77.49 },
    "kadiri": { lat: 14.13, lon: 78.17 },
    "london": { lat: 51.50, lon: -0.12 },
    "newyork": { lat: 40.71, lon: -74.00 }
};

document.getElementById("fetchBtn").addEventListener("click", function() {
    let city = document.getElementById("cityInput").value.toLowerCase();
    
    if(!cityCoords[city]) {
        document.getElementById("weather").innerHTML = "city not found!";
        return;
    }
    let coords = cityCoords[city];
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if(data.current_weather) {
                document.getElementById("weather").innerHTML = 
                `<h3>Weather in ${city} 🌍</h3>
                <p>🌡Temperature: ${data.current_weather.temperature}°C</p>           
                <p>💨Wind Speed: ${data.current_weather.windspeed} km/h</p>
                <p>🕒Time: ${data.current_weather.time}</p>`;
            }
            else {
                document.getElementById("weather").innerHTML = "Weather data not available.";
            }
        })    
        .catch(error => {
            console.error(error);
            document.getElementById("weather").innerHTML = "Error fetching weather data.";
        });
});