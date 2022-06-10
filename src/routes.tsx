import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './screens/Main';
import Home from './screens/Home';
import Blocked from './screens/Blocked';

const route = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <route.Navigator screenOptions={{ headerShown: false }}>
        <route.Screen name="Main" component={Main}/>
        <route.Screen name="Home" component={Home}/>
        <route.Screen name="Blocked" component={Blocked}/>
      </route.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
