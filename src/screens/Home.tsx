import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import ScreenContainer from "../commonComponents/ScreenContainer";
import { StackNavigationProp } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import Colors from "../constants/ColorConst";
import { weatherActions } from "../store/weather/weatherActions";
import HourBox from "../commonComponents/HourBox";
import HomeBottomeCom from "../component/home/HomeBottomCom";
import Spinner from "../commonComponents/Spinner";
import { ParamListBase } from "@react-navigation/native";

type HomeScreenNavigationProp = StackNavigationProp<ParamListBase, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<Props> = ({ navigation }) => {
  const dispatch: AppDispatch = useDispatch();

  const { currentLocation } = useSelector((state: RootState) => state.location);
  const { weatherData, toDayData, loading } = useSelector(
    (state: RootState) => state.weather
  );

  useEffect(() => {
    if (currentLocation && currentLocation.lat && currentLocation.lon) {
      const forcastPayload = {
        lat: currentLocation?.lat,
        lon: currentLocation?.lon,
      };
      dispatch(weatherActions.getWeatherFC(forcastPayload));
    }
  }, [currentLocation]);

  return (
    <ScreenContainer headerLabel={weatherData?.location?.name}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <View style={styles.container}>
            <View style={styles.topInnerWrapper}>
              <View style={styles.innerWrapper}>
                <Image
                  style={styles.tinyLogo}
                  source={{ uri: `https:${toDayData?.day?.condition?.icon}` }}
                />
              </View>
              <View style={styles.innerWrapper}>
                <Text style={styles.mainText}>
                  {weatherData?.current?.temp_c}
                </Text>
                <Text style={styles.welcomeText}>°C</Text>
              </View>
              <View style={styles.innerWrapper}>
                <Text style={styles.welcomeText}>
                  {toDayData?.day.condition.text}
                </Text>
              </View>
              <View style={[styles.innerWrapper, styles.hourWrapper]}>
                <FlatList
                  data={toDayData?.hour}
                  horizontal={true}
                  renderItem={({ item }) => <HourBox values={item} />}
                  keyExtractor={(item) => item.time}
                />
              </View>
            </View>
          </View>
          <View style={styles.container}>
            <HomeBottomeCom
              values={weatherData?.forecast}
              navigation={navigation}
            />
          </View>
        </>
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topInnerWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  innerWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  hourWrapper: {
    flex: 5,
  },
  mainText: {
    color: Colors.textColor,
    fontSize: 50,
    fontWeight: "bold",
  },
  welcomeText: {
    fontSize: 25,
    color: Colors.textColor,
  },
  tinyLogo: {
    width: 60,
    height: 60,
  },
});

export { Home };
