import {configurationAnimation} from '../types';
import {Easing} from 'react-native';

// CONSTANTS
export const backgroundPermissions = require('../assets/images/background_permissions.png');
export const backgroundDay = require('../assets/images/background_day.png');
export const backgroundNight = require('../assets/images/background_night.png');
export const backgroundDayNight = require('../assets/images/background_transition_day_night.png');

export const sunlight = require('../assets/images/weather_clear_sky_01d.png');
export const moon = require('../assets/images/weather_clear_sky_01n.png');

export const cloud = require('../assets/images/cloud1.png');
export const cloud2 = require('../assets/images/cloud2.png');

export const w01d = require('../assets/images/weather_clear_sky_01d.png');
export const w01n = require('../assets/images/weather_clear_sky_01n.png');
export const w02d = require('../assets/images/weather_few_clouds_02d.png');
export const w02n = require('../assets/images/weather_few_clouds_02n.png');
export const w03d = require('../assets/images/weather_scattered_clouds_03n_03d.png');
export const w03n = require('../assets/images/weather_scattered_clouds_03n_03d.png');
export const w04d = require('../assets/images/weather_broken_clouds_04n_04d.png');
export const w04n = require('../assets/images/weather_broken_clouds_04n_04d.png');
export const w09d = require('../assets/images/weather_shower_rain_09n_09d.png');
export const w09n = require('../assets/images/weather_shower_rain_09n_09d.png');
export const w10d = require('../assets/images/weather_rain_10d.png');
export const w10n = require('../assets/images/weather_rain_10n.png');
export const w11d = require('../assets/images/weather_thunderstorm_11n_11d.png');
export const w11n = require('../assets/images/weather_thunderstorm_11n_11d.png');
export const w13d = require('../assets/images/weather_snow_13n_13d.png');
export const w13n = require('../assets/images/weather_snow_13n_13d.png');
export const w50d = require('../assets/images/weather_mist_50n_50d.png');
export const w50n = require('../assets/images/weather_mist_50n_50d.png');

export const iconPosition = `<svg width="79" height="101" viewBox="0 0 79 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.8547 1.15126C14.4931 5.23534 2.73131 18.4348 0.485833 34.1099C-0.242674 39.2005 -0.183462 40.9599 0.878569 45.6655C3.89828 59.0489 17.4926 81.1619 31.26 95.0865C37.7679 101.668 39.3118 102.213 43.4085 99.3695C50.3361 94.5611 66.0267 73.8014 72.5428 60.8219C80.2528 45.4651 80.9634 35.1907 75.1833 22.6608C72.0099 15.7829 63.8727 7.26424 57.5859 4.23853C48.8289 0.0238464 38.4446 -1.1321 29.8547 1.15126ZM48.1176 23.503C49.8797 24.5373 52.3088 26.8109 53.5162 28.5561C55.5061 31.4317 55.7122 32.3046 55.7122 37.8539C55.7122 43.2823 55.4776 44.3324 53.6444 47.1059C50.531 51.8183 46.3563 54.2563 40.7951 54.6113C30.4513 55.2711 23.155 48.352 23.1325 37.8629C23.1168 30.3801 27.7756 23.9856 34.9243 21.6775C38.3277 20.5786 44.6182 21.4493 48.1176 23.503Z" fill="#F9BC00"/>
</svg>`;

export const iconPositionWhite = `<svg width="79" height="101" viewBox="0 0 79 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.8547 1.15126C14.4931 5.23534 2.73131 18.4348 0.485833 34.1099C-0.242674 39.2005 -0.183462 40.9599 0.878569 45.6655C3.89828 59.0489 17.4926 81.1619 31.26 95.0865C37.7679 101.668 39.3118 102.213 43.4085 99.3695C50.3361 94.5611 66.0267 73.8014 72.5428 60.8219C80.2528 45.4651 80.9634 35.1907 75.1833 22.6608C72.0099 15.7829 63.8727 7.26424 57.5859 4.23853C48.8289 0.0238464 38.4446 -1.1321 29.8547 1.15126ZM48.1176 23.503C49.8797 24.5373 52.3088 26.8109 53.5162 28.5561C55.5061 31.4317 55.7122 32.3046 55.7122 37.8539C55.7122 43.2823 55.4776 44.3324 53.6444 47.1059C50.531 51.8183 46.3563 54.2563 40.7951 54.6113C30.4513 55.2711 23.155 48.352 23.1325 37.8629C23.1168 30.3801 27.7756 23.9856 34.9243 21.6775C38.3277 20.5786 44.6182 21.4493 48.1176 23.503Z" fill="#FFFFFF"/>
</svg>`;

export const iconPositionRed = `<svg width="79" height="101" viewBox="0 0 79 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.8547 1.15126C14.4931 5.23534 2.73131 18.4348 0.485833 34.1099C-0.242674 39.2005 -0.183462 40.9599 0.878569 45.6655C3.89828 59.0489 17.4926 81.1619 31.26 95.0865C37.7679 101.668 39.3118 102.213 43.4085 99.3695C50.3361 94.5611 66.0267 73.8014 72.5428 60.8219C80.2528 45.4651 80.9634 35.1907 75.1833 22.6608C72.0099 15.7829 63.8727 7.26424 57.5859 4.23853C48.8289 0.0238464 38.4446 -1.1321 29.8547 1.15126ZM48.1176 23.503C49.8797 24.5373 52.3088 26.8109 53.5162 28.5561C55.5061 31.4317 55.7122 32.3046 55.7122 37.8539C55.7122 43.2823 55.4776 44.3324 53.6444 47.1059C50.531 51.8183 46.3563 54.2563 40.7951 54.6113C30.4513 55.2711 23.155 48.352 23.1325 37.8629C23.1168 30.3801 27.7756 23.9856 34.9243 21.6775C38.3277 20.5786 44.6182 21.4493 48.1176 23.503Z" fill="#C20023"/>
</svg>`;

export const iconReload = require('../assets/images/icon_reload.png');

export const DEFAULT_CONFIGURATION: configurationAnimation = {
  toValue: 1,
  duration: 60000,
  delay: 0,
  easing: Easing.linear,
  useNativeDriver: true,
};

export const DEFAULT_TEMPERATURE = {
  feels_like: 0,
  humidity: 0,
  pressure: 0,
  temp: 0,
  temp_max: 0,
  temp_min: 0,
};

export const iconCondition = {
  '01d': w01d,
  '02d': w02d,
  '03d': w03d,
  '04d': w04d,
  '09d': w09d,
  '10d': w10d,
  '11d': w11d,
  '13d': w13d,
  '50d': w50d,
  '01n': w01n,
  '02n': w02n,
  '03n': w03n,
  '04n': w04n,
  '09n': w09n,
  '10n': w10n,
  '11n': w11n,
  '13n': w13n,
  '50n': w50n,
};

export const skyCondition = {
  day: backgroundDay,
  transition: backgroundDayNight,
  night: backgroundNight,
};

export const weatherConditionCodeTranslate = {
  '200': 'Tempestade com chuva leve',
  '201': 'Tempestade com chuva',
  '202': 'Tempestade com chuva forte',
  '210': 'Trovoada leve',
  '211': 'Tempestade',
  '212': 'Tempestade pesada',
  '221': 'Tempestade torrencial',
  '230': 'Tempestade com chuvisco de luz',
  '231': 'Tempestade com chuvisco',
  '232': 'Tempestade com chuvisco pesado',
  '300': 'Intensidade de luz chuvisco',
  '301': 'Chuvisco',
  '302': 'Chuviscos de forte intensidade',
  '310': 'Chuva chuviscante de intensidade leve',
  '311': 'Chuva chuviscante',
  '312': 'Chuva chuviscante de forte intensidade',
  '313': 'Chuva de chuva e chuvisco',
  '314': 'Chuva forte do chuveiro e chuvisco',
  '321': 'Chuvisco de chuva',
  '500': 'Chuva leve',
  '501': 'Chuva moderada',
  '502': 'Chuva intensa',
  '503': 'Chuva muito forte',
  '504': 'Chuva extrema',
  '511': 'Chuva gelada',
  '520': 'Chuvisco de chuva de intensidade leve',
  '521': 'Chuvisco de chuva',
  '522': 'Chuvisco de chuva intensa',
  '531': 'Chuvisco de chuva irregula',
  '600': 'Neve leve',
  '601': 'Neve',
  '602': 'Neve pesada',
  '611': 'Granizo',
  '612': 'Chuva de chuva leve',
  '613': 'Granizo de chuveiro',
  '615': 'Chuva leve e neve',
  '616': 'Chuva e neve',
  '620': 'Neve de chuva leve',
  '621': 'Chuva de neve',
  '622': 'Neve de chuva pesada',
  '701': 'Névoa',
  '711': 'Fumaça',
  '721': 'Névoa ',
  '731': 'Ventania de areia / poeira',
  '741': 'Nevoeiro',
  '751': 'Areia',
  '761': 'Pó',
  '762': 'Cinzas vulcânicas',
  '771': 'Rajadas',
  '781': 'Tornado',
  '800': 'Céu Limpo',
  '801': 'Poucas nuvens',
  '802': 'Nuvens esparsas',
  '803': 'Nublado',
  '804': 'Totalmente nublado',
};
