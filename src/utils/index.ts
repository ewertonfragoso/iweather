import {Platform} from 'react-native';
import {weatherConditionCodeTranslate} from '../constants';

export const formatTime = (s: number): string => {
  
  return new Date(s * 1000).toTimeString().slice(0, 5);
  //return new Date(s * 1000).toLocaleString('pt-BR');
};

export const formatTemperature = (s: number): string => {
  return s.toString().slice(0, 2);
  //return new Date(s * 1000).toLocaleString('pt-BR');
};

export const translateWeatherCondition = (s: number): string => {
  return weatherConditionCodeTranslate[s];
};
