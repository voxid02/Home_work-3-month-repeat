const cityName = document.querySelector('.cityName')
const temp = document.querySelector('.temp')

const apiKey = 'e417df62e04d3b1b111abeab19cea714'

const citySearch = () => {
    const cityNameValue = document.querySelector(".cityNameValue").value
    console.log(cityNameValue)

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&appid=${apiKey}`)
    .then((data) => data.json())
    .then((json) => {
        console.log(json)
        cityName.innerHTML = json.name
        temp.innerHTML = Math.round(json?.main?.temp - 273) + "&deg" + "C"
    })
}