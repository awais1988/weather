import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import ScreenContainer from "../commonComponents/ScreenContainer";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../appNavigator";
import Geolocation from "@react-native-community/geolocation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { latLngTypes } from "../../types";
import { locationActions } from "../store/location/locationActions";
import { weatherActions } from "../store/weather/weatherActions";
import useGeoLocation from "../customHooks/useGeoLocation";
import Colors from "../constants/ColorConst";
import Spinner from "../commonComponents/Spinner";

type GetStartedNavigationProp = StackNavigationProp<
  RootStackParamList,
  "GetStarted"
>;

type Props = {
  navigation: GetStartedNavigationProp;
};

const GetStarted: React.FC<Props> = ({ navigation }) => {
  const dispatch: AppDispatch = useDispatch();
  const { getCurrentPosition, coords } = useGeoLocation();
  const { weatherData } = useSelector((state: RootState) => state.weather);
  const { locationArray, loading } = useSelector(
    (state: RootState) => state.location
  );
  const [position, setPosition] = useState<string | null>(null);

  useEffect(() => {
    if (coords) {
      const { latitude, longitude } = coords;
      const latLngPayload = {
        lat: latitude,
        lon: longitude,
      };
      dispatch(locationActions.getCityData(latLngPayload)).then((data) => {
        navigation.navigate("Home");
      });
    }
  }, [coords]);

  return (
    <ScreenContainer addBtn={false}>
      {loading ? (
        <Spinner />
      ) : (
        <View style={styles.container}>
          <Text style={styles.welcomeText}>Welcome Get Started</Text>
          <View>
            <Text style={styles.title}>
              <Text>Current position: </Text>
              {position}
            </Text>
            <Button title="Get Current Position" onPress={getCurrentPosition} />
          </View>
        </View>
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  welcomeText: {
    fontSize: 24,
    color: Colors.textColor,
  },
  title: {
    fontWeight: "500",
    color: Colors.textColor,
    fontSize: 30,
  },
});

export default GetStarted;
