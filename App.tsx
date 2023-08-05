import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CatsStackNavigator } from './src/navigators/Navigators';

const App = () => {
  return (
    <NavigationContainer>
      <CatsStackNavigator />
    </NavigationContainer>
  )
}

export default App;