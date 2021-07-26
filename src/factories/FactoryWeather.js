import { WEATHER_API_KEY } from "@env"

function FactoryWeather(){
    const weather = {}

    function get(city){ 

        const response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&cnt=7&appid=${WEATHER_API_KEY}`)
            .then(response => {
                if(!response.ok) {
                    return {error: true}
                }
                return response.json()
            })
            .then(data => {
                if(!data) {
                    return 'erro'
                }
                return data
            });

        return response
    }

    function translate(city) {

        const name = {

            Thunderstorm: 'Trovoada',
            Drizzle: 'Chuviscando',
            Rain: 'Chuva',
            Snow: 'Nevando',
            Clear: 'Ensolarado',
            Clouds: 'Nublado'
        }

        if(!name[city]) {
            return 'Trovoada' 
        }

        return name[city]

    }
    
    weather.get = get
    weather.translate = translate

    return weather
}

export default FactoryWeather