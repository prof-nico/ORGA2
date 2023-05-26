import "./main.scss"

const teacherApiKey = "b37c6858cb58515d7a40e37c3b01bbd9";
const myApiKey = "d117952ed469d4ca1e5b049ba79878c4";

/**
fetch("test.txt")
.then(function(response){
    return response.text()
})
.then(function(data){
    console.log(data)
});


async function getWeatherInfo(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${teacherApiKey}&mode=html`);
    const data = await response.text();
    return data;
}
*/

function display(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${teacherApiKey}&mode=html`)
    .then(function(response){
        return response.text()
    })
    .then(function(data) {
        console.log(data);
        document.getElementById('weatherInfo').innerHTML = data;
    })
}

const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener("click", display);
