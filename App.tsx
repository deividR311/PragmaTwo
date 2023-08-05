import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { CatsStackNavigator } from './src/navigators/Navigators';

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])
  
  return (
    <NavigationContainer>
      <CatsStackNavigator />
    </NavigationContainer>
  )
}

export default App;