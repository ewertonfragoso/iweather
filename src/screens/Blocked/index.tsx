import React, {useEffect} from 'react';
import {SvgXml} from 'react-native-svg';
import {
  Text,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {backgroundPermissions, iconPositionRed} from '../../constants';
import {openSettings} from 'react-native-permissions';
import {styles} from './style';

const Blocked = () => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);

  const handleSettings = async () => {
    openSettings().catch(() => console.warn('cannot open settings'));
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
      <SvgXml xml={iconPositionRed} width="50" height="66" />
      <Text style={styles.permissions}>
        <Text style={styles.permissionsBold}>
          {`Você negou \no acesso a \nLocalização \nno primeiro uso. `}
        </Text>
        {`\nAgora só permitindo \nnas configurações. \nE reabrir o App.`}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={handleSettings} style={styles.roundButton}>
          <Text style={styles.textButton}>Abrir Configurações</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Blocked;
