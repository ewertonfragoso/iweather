import React, {useEffect, useState, useRef} from 'react';
import {SvgXml} from 'react-native-svg';
import {
  Text,
  View,
  Animated,
  TouchableOpacity,
  StatusBar,
  Platform,
  Easing,
  BackHandler,
} from 'react-native';
import {checkMultiple, PERMISSIONS} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import {getWeatherFromLatLong} from '../../services/api';
import {
  cloud,
  cloud2,
  DEFAULT_TEMPERATURE,
  DEFAULT_CONFIGURATION,
  iconCondition,
  skyCondition,
  iconPosition,
  iconReload,
  weatherConditionCodeTranslate,
} from '../../constants';
import {
  configurationAnimation,
  weatherCondition,
  ITemperatures,
  iconCode,
  position,
} from '../../types';
import {styles} from './style';
import {formatTime, formatTemperature} from '../../utils';

const Main = ({navigation}) => {
  const animationClouds = useRef(new Animated.Value(0)).current;
  const animationBackground = useRef(new Animated.Value(0)).current;
  const animationLoading = useRef(new Animated.Value(0)).current;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const [position, setPosition] = useState<position>({
    latitude: 0,
    longitude: 0,
  });
  const [sky, setSky] = useState<weatherCondition>('day');
  const [icon, setIcon] = useState<iconCode>('01d');
  const [temperature, setTemperature] =
    useState<ITemperatures>(DEFAULT_TEMPERATURE);
  const [weather, setWeather] = useState({
    name: '',
    weather: [],
    sys: {country: ''},
  });
  const [dateHourApiWeather, setDateHourApiWeather] = useState<number>(0);

  const animatedOpacityDay = {opacity: animationBackground};

  const styleStatusBar = sky === 'day' ? 'dark-content' : 'light-content';
  const textColorGeneral =
    sky === 'day' ? {color: '#3886D0'} : {color: '#FFFFFF'};

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      checkPermissions();
      loadPosition();
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);

  const CallAnimation = () => {
    animationLoading.setValue(0);
    Animated.timing(animationLoading, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(() => CallAnimation());
  };
  useEffect(() => {
    CallAnimation();
  }, []);

  const rotateLoading = animationLoading.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const cloudsAnimation = (config: configurationAnimation) => {
    Animated.sequence([
      Animated.timing(animationClouds, config),
      Animated.timing(animationClouds, {
        duration: 120000,
        delay: 0,
        toValue: 0,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start(() => cloudsAnimation(DEFAULT_CONFIGURATION));
  };

  const checkPermissions = async () => {
    try {
      if (Platform.OS === 'android') {
        console.log('entrou no android');

        const result = await checkMultiple([
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        ]).then(statuses => {
          const statusFine = statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION];

          console.log('result1and', statusFine);

          return statusFine === 'granted' ? true : navigation.navigate('Home');
        });

        return result;
      } else {
        console.log('íos');

        const result = await checkMultiple([
          PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        ]).then(statuses => {
          const statusFine = statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE];

          console.log('result1ios', statusFine);

          return statusFine === 'granted' ? true : navigation.navigate('Home');
        });

        return result;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const loadWeather = () => {
    const response = getWeatherFromLatLong({
      latitude: position.latitude,
      longitude: position.longitude,
    })
      .then(res => {
        console.log('retorno api', res);
        console.log('retorno api 2', res.response.weather[0]);
        if (res.result) setWeather(res.response);
        let skyResponse = Array.from(res.response.weather[0].icon);
        const skyFinal = () => {
          if (skyResponse[2] === 'n') {
            return 'night';
          } else {
            return 'day';
          }
        };
        setSky(skyFinal);
        setDateHourApiWeather(res.response.dt);
        setIcon(res.response.weather[0].icon);
        setTemperature(res.response.main);
        setIsLoading(false);
        return true;
      })
      .catch(err => {
        setErrorMsg('Falha na requisição ao servidor.');
      });
  };

  const loadPosition = () => {
    setIsLoading(true);
    // hideSkyBackground()
    Geolocation.getCurrentPosition(
      ({coords}) => {
        console.log(coords);
        setPosition({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
        console.log('pegou a posição: ', coords);
      },
      error => {
        setErrorMsg('Não foi possível obter a localização');
      },
      {
        enableHighAccuracy: true,
        timeout: 2000,
        maximumAge: 20000,
        showLocationDialog: true,
      },
    );
  };

  const generateSky = (condition: weatherCondition): JSX.Element => {
    return (
      <Animated.Image
        source={skyCondition[condition]}
        style={[styles.backgrounds, animatedOpacityDay]}
        resizeMode="cover"
      />
    );
  };

  const generateAstro = (icon: iconCode): JSX.Element => {
    return (
      <Animated.Image
        source={iconCondition[icon]}
        style={[
          styles.icon,
          {
            transform: [
              {
                scale: animationClouds.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 1.1],
                }),
              },
            ],
          },
        ]}
      />
    );
  };

  const showSkyBackground = () => {
    Animated.sequence([
      Animated.timing(animationBackground, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // const hideSkyBackground = () => {
  //   Animated.sequence([
  //     Animated.timing(animationBackground, {
  //       toValue: 0,
  //       duration: 1000,
  //       easing: Easing.linear,
  //       useNativeDriver: true,
  //     }),
  //   ]).start();
  // };

  useEffect(() => {
    checkPermissions();
    loadPosition();
  }, []);

  useEffect(() => {
    if (position.latitude !== 0) {
      loadWeather();
    }
    showSkyBackground();
  }, [position]);

  useEffect(() => {
    cloudsAnimation({
      ...DEFAULT_CONFIGURATION,
      delay: 0,
    });
  }, []);

  // return screen
  return (
    <View style={[styles.container]}>
      <StatusBar
        barStyle={styleStatusBar}
        backgroundColor="transparent"
        translucent={true}
      />
      {generateSky(sky)}
      <Text style={[styles.dayAndHour, textColorGeneral]}>
        Hoje, {formatTime(dateHourApiWeather)}
      </Text>
      <Animated.Image
        source={cloud}
        style={[
          styles.cloud,
          {
            transform: [
              {
                translateX: animationClouds.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-150, 100],
                }),
              },
            ],
          },
        ]}
      />
      {generateAstro(icon)}
      <Animated.Image
        source={cloud2}
        style={[
          styles.cloud2,
          {
            transform: [
              {
                translateX: animationClouds.interpolate({
                  inputRange: [0, 1],
                  outputRange: [150, -100],
                }),
              },
            ],
          },
        ]}
      />
      {isLoading === false ? (
        <>
          <Text style={[styles.weather, textColorGeneral]}>
            {weatherConditionCodeTranslate[weather?.weather[0]?.id]}{' '}
          </Text>
          <Text style={[styles.temperature, textColorGeneral]}>
            {`${formatTemperature(temperature?.temp)}`}º
          </Text>
          <Text style={[styles.minMax, textColorGeneral]}>
            Min {formatTemperature(temperature?.temp_min)}º / Máx{' '}
            {formatTemperature(temperature?.temp_max)}º
          </Text>
          <SvgXml
            xml={iconPosition}
            width="12"
            height="40"
            style={styles.iconPosition}
          />
          <Text style={[styles.city, textColorGeneral]}>
            {weather?.name} / {weather?.sys?.country}
          </Text>
        </>
      ) : (
        <Text style={[styles.city, textColorGeneral]}>Carregando Dados</Text>
      )}

      {isLoading === false ? (
        <TouchableOpacity onPress={loadPosition} style={[styles.roundButton]}>
          <Animated.Image source={iconReload} style={[styles.iconReload]} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={loadPosition} style={[styles.roundButton]}>
          <Animated.Image
            source={iconReload}
            style={[styles.iconReload, {transform: [{rotate: rotateLoading}]}]}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Main;
