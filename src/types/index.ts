export type position = {
  latitude: number;
  longitude: number;
};

export type configurationAnimation = {
  toValue: number;
  duration: number;
  delay: number;
  easing: any;
  useNativeDriver: boolean;
};

export type iconCode =
  | '01d'
  | '02d'
  | '03d'
  | '04d'
  | '09d'
  | '10d'
  | '11d'
  | '13d'
  | '50d'
  | '01n'
  | '02n'
  | '03n'
  | '04n'
  | '09n'
  | '10n'
  | '11n'
  | '13n'
  | '50n';

export type icon =
  | 'w01d'
  | 'w02d'
  | 'w03d'
  | 'w04d'
  | 'w09d'
  | 'w10d'
  | 'w11d'
  | 'w13d'
  | 'w50d'
  | 'w01n'
  | 'w02n'
  | 'w03n'
  | 'w04n'
  | 'w09n'
  | 'w10n'
  | 'w11n'
  | 'w13n'
  | 'w50n';

export type weatherCondition = 'day' | 'night' | 'transition';

export type astrosCondition = 'sun' | 'moon' | 'clouds';

export interface ITemperatures {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}
