import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CatDetailScreen, CatsScreen } from '../../screens/Screens';
import CatsContextState from '../../contexts/cat/CatState';

export type RootStackParams = {
    CatsScreen      : undefined,
    CatDetailScreen : { catId : string }
};

const CatsStack = createStackNavigator<RootStackParams>();

export const CatsStackNavigator = () => {
  return (
    <CatsContextState>
        <CatsStack.Navigator>
            <CatsStack.Screen name="CatsScreen" options={{ title: 'Catbreeds', headerShown: false }} component={ CatsScreen } />
            <CatsStack.Screen name="CatDetailScreen" options={{ title: 'CatDetailScreen', headerShown: false }} component={ CatDetailScreen } />
        </CatsStack.Navigator>
    </CatsContextState>
  );
};