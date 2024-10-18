import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import GetStarted from '../screens/GetStarted';
import Forcast from '../screens/Forcast';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

export type RootStackParamList = {
  Home: undefined;
  GetStarted: undefined;
  Forcast: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  const {locationArray} = useSelector((state: RootState) => state.location);
  return (
    <Stack.Navigator
      initialRouteName={locationArray?.length === 0 ? 'GetStarted' : 'Home'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Forcast" component={Forcast} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
