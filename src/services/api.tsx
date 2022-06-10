import axios from 'axios';
import { OWM_API_KEY } from '@env'
import { position } from '../types';

const api = axios.create({baseURL: 'https://api.openweathermap.org/data/2.5/',});
api.interceptors.request.use(config => {
  config.params = config.params || {};
  config.params.appid = OWM_API_KEY;
  config.params.units = config.params.units || 'metric';
  config.params.lang = config.params.units || 'pt_br';
  return config;
});

export const getWeatherFromLatLong = async ({latitude, longitude}: position) => {
  try{
    let response = await api.get(`weather?lat=${latitude}&lon=${longitude}`)
    if(response.status == 200){
      console.log(response.status)
    }    
    return {result: true, response: response.data }
  }
  catch (err) {
    console.log("Error", err)
    return { result: false, error: err }
  }
}