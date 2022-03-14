import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '9ddaef9204d3baad8f4efe6e07473546';

export const fetchWeather = async (query)=>{
    const { data } = await axios.get(URL, {
        params : {
            q : query,
            units : 'metric',
            APPID : API_KEY
        }
    });

    return data;
}