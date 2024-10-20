import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Alert, Pressable } from "react-native";
import ScreenContainer from "../commonComponents/ScreenContainer";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../appNavigator";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { locationActions } from "../store/location/locationActions";
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
  const { loading } = useSelector((state: RootState) => state.location);

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
          <View>
            <Text style={styles.welcomeText}>Welcome To Weather App</Text>
          </View>
          <View>
            <Text style={styles.title}>
              Let’s get started and please allow Geo Location to get Weather
              Update.
            </Text>
          </View>

          <View>
            <Pressable onPress={getCurrentPosition} style={styles.btnStyle}>
              <Text style={styles.welcomeText}>Get Current Position</Text>
            </Pressable>
            <Pressable
              style={styles.btnNotNow}
              onPress={() => navigation.navigate("AddCity")}
            >
              <Text style={styles.txtNotNow}>Not Now</Text>
            </Pressable>
          </View>
        </View>
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    paddingVertical: 40,
  },
  welcomeText: {
    fontSize: 25,
    color: Colors.textColor,
    fontWeight: "bold",
  },
  title: {
    color: Colors.textColor,
    fontSize: 20,
  },
  btnStyle: {
    backgroundColor: Colors.transparentBG,
    padding: 20,
    borderRadius: 15,
  },
  btnNotNow: {
    marginTop: 20,
    justifyContent: "center",
    alignSelf: "center",
  },
  txtNotNow: { fontSize: 30, textDecorationLine: "underline" },
});

export default GetStarted;
