function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    const resultDiv = document.getElementById('weatherResult');
     if (city === '') {
        resultDiv.innerHTML = '<p class="error">Please enter a city name.</p>';
        return;
 }
 const apiKey = "8f4c498f1ee1401d74461dea0aa1af80";
 const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 resultDiv.innerHTML = '<p>Loading...</p>';
 fetch(apiUrl)
 .then(response => {
     if (!response.ok) {
         throw new Error('City not found');
     }
     return response.json();
 })
 .then(data => {
     const weatherInfo = `
         <h2>Weather in ${data.name}</h2>
         <p>Temperature: ${data.main.temp} °C</p>
         <p>Weather: ${data.weather[0].description}</p>
         <p>Humidity: ${data.main.humidity}%</p>
         <p>Wind Speed: ${data.wind.speed} m/s</p>
     `;
     resultDiv.innerHTML = weatherInfo;
 } )
 .catch(error => {
     resultDiv.innerHTML = `<p class="error">${error.message}</p>`;
 } );   

}