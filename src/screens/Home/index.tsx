import React, {useEffect} from 'react';
import {SvgXml} from 'react-native-svg';
import {
  Text,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Platform,
  BackHandler,
} from 'react-native';
import {backgroundPermissions, iconPosition} from '../../constants';
import {requestMultiple, PERMISSIONS} from 'react-native-permissions';
import {styles} from './style';

const Home = ({navigation}) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);

  const handlePermit = async () => {
    const result = await requestPermission();
    console.log('resultp', result);
    result === true
      ? navigation.navigate('Main')
      : navigation.navigate('Blocked');
  };

  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      console.log('entrou no android');

      const result = await requestMultiple([
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      ]).then(statuses => {
        const statusFine = statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION];

        console.log('result1and', statusFine);

        return statusFine === 'granted' ? true : false;
      });

      return result;
    } else {
      console.log('íos');

      const result = await requestMultiple([
        PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      ]).then(statuses => {
        const statusFine = statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE];

        console.log('result1ios', statusFine);

        return statusFine === 'granted' ? true : false;
      });

      return result;
    }
  };

  return (
    <ImageBackground
      source={backgroundPermissions}
      style={styles.container}
      resizeMode="cover">
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <SvgXml xml={iconPosition} width="50" height="66" />
      <Text style={styles.permissions}>
        <Text style={styles.permissionsBold}>
          {`Precisamos\nda sua permissão\nde Localização\n`}
        </Text>
        {`para pegarmos\no seu clima.`}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={handlePermit} style={styles.roundButton}>
          <Text style={styles.textButton}>Permitir</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Home;
