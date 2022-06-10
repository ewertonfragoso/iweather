import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      flex: 1,
      paddingHorizontal: Platform.OS === 'ios' ? 40 : 60,
      backgroundColor: '#ffffff',
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
      marginTop: 30,
      paddingHorizontal: 20,
      height: 46,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: '#53C5F2',
      marginRight: 'auto',
      shadowColor: "#53c5f2",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity:  0.18,
  shadowRadius: 4.59,
//   ...generateZIndex(5),
    },
    textButton: {
      color: '#FFFFFF',
      fontSize: 23,
      textAlign: 'left',
      fontFamily: 'Muli-SemiBold',
      lineHeight: 28,
    }
  });
  