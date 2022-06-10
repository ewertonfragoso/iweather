import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 60,
    backgroundColor: '#ffffff',
  },
  backgrounds: {
    flex: 1,
    position: 'absolute',
  },
  icon: {
    position: 'absolute',
    height: 300,
    width: 300,
    top: 100,
    resizeMode: 'contain',
  },
  cloud: {
    position: 'absolute',
    top: 100,
    height: 100,
    resizeMode: 'contain',
  },
  cloud2: {
    position: 'absolute',
    top: 280,
    height: 60,
    resizeMode: 'contain',
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  permissions: {
    color: '#0666C1',
    fontSize: 32,
    textAlign: 'left',
    fontFamily: 'Muli-Light',
    lineHeight: 48,
    marginTop: 15,
  },
  permissionsBold: {
    fontFamily: 'Muli-SemiBold',
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  roundButton: {
    position: 'absolute',
    bottom: 45,
    marginTop: 30,
    width: 80,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    // backgroundColor: '#53C5F2',
    marginRight: 'auto',
    shadowColor: '#53c5f2',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    zIndex: 10,
  },
  textButton: {
    color: '#FFFFFF',
    fontSize: 23,
    textAlign: 'left',
    fontFamily: 'Muli-SemiBold',
    lineHeight: 28,
  },
  dayAndHour: {
    position: 'absolute',
    top: 10,
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Muli-SemiBold',
    lineHeight: 28,
    marginTop: 40,
  },
  weather: {
    fontSize: 20,
    fontFamily: 'Muli',
    marginTop: 220,
  },
  temperature: {
    fontSize: 80,
    fontFamily: 'Muli-SemiBold',
    marginTop: 0,
  },
  minMax: {
    fontSize: 12,
    fontFamily: 'Muli-Light',
  },
  iconPosition: {
    margin: 0,
    marginTop: 50,
    marginBottom: -10,
  },
  city: {
    fontSize: 18,
    fontFamily: 'Muli-Light',
  },
  map: {
    width: 300,
    height: 200,
  },
  iconReload: {
    width: 50,
    resizeMode: 'contain',
  },
});
