/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import "react-native-devsettings";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/appNavigator";
import { Provider } from "react-redux";
import { store, persistor } from "./src/store";
import { PersistGate } from "redux-persist/integration/react";

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
