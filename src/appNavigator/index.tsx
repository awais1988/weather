import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, GetStarted, Forcast, Cities, AddCity } from "../screens/index";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ParamListBase } from "@react-navigation/native";

const Stack = createStackNavigator<ParamListBase>();

const AppNavigator: React.FC = () => {
  const { locationArray } = useSelector((state: RootState) => state.location);
  return (
    <Stack.Navigator
      initialRouteName={locationArray?.length === 0 ? "GetStarted" : "Home"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Forcast" component={Forcast} />
      <Stack.Screen name="Cities" component={Cities} />
      <Stack.Screen name="AddCity" component={AddCity} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
