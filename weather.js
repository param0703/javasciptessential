function showWeatherdetails(){
    event.preventDefault();
    const city=document.getElementById('city').value;
    const apiKey='4fec78ce666b998a73c59e91ea549fcc';
    const apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    fetch(apiUrl)

    .then(response => response.json())
    .then(data => {
        const weatherinfo = document.getElementById('weatherInfo');
        weatherinfo.innerHTML= `<h2>Weather in ${data.name}</h2>
                                <p>Temperature: ${data.main.temp} ;</p>
                                <p>Weather: ${data.weather[0].description}</p>`
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
      });
}
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails);