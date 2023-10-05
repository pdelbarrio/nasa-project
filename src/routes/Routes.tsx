import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../views/Home';
import Detail from '../views/Detail';
import {RootStackParams} from '../types';

const Stack = createNativeStackNavigator<RootStackParams>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: 'rgba(7, 26, 93, 255)',
            },
            headerTitleStyle: {
              color: '#ffffff',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerStyle: {
              backgroundColor: 'rgba(7, 26, 93, 255)',
            },
            headerTitleStyle: {
              color: '#ffffff',
            },
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
