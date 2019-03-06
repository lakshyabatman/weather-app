class UI {
    constructor() {
        this.outDiv = document.getElementById('outputDIV');

    }
    updateWeather(data) {
        console.log(data.weather.name);
        var output = ``;
        output += `
        <h1 class="text-light" id="w-location">${data.weather.name}</h1>
        <h3 class="text-dark mb-3" id="w-desc">${data.weather.weather[0].main}</h3>
        <div class=" list-group">
            <div class="list-group-item"><b>Temperature</b>: ${data.weather.main.temp}C <b>Max Temperature:</b> ${data.weather.main.temp_max}C</div>
            <div class="list-group-item"><b>Humidity(in %)</b>: ${data.weather.main.humidity}</div>
            <div class="list-group-item"><b>Wind Speed</b>: ${data.weather.wind.speed}</div>
            
        </div>`;

        this.outDiv.innerHTML = output;


    }
}