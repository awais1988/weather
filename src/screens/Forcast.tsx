import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenContainer from "../commonComponents/ScreenContainer";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../appNavigator";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import Colors from "../constants/ColorConst";
import ForecastItem from "../component/forecast/ForecastItem";

type ForcastScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Forcast"
>;

type Props = {
  navigation: ForcastScreenNavigationProp;
};

const Forcast: React.FC<Props> = ({ navigation }) => {
  const { weatherData } = useSelector((state: RootState) => state.weather);
  const forecastData = weatherData?.forecast?.forecastday || [];

  return (
    <ScreenContainer
      headerLabel={weatherData?.location?.name}
      backBtn={true}
      backBtnPress={() => navigation.goBack()}
    >
      <View style={styles.container}>
        <Text style={styles.welcomeText}>5-day forecast</Text>
        {forecastData.map((item, index) => (
          <View key={index} style={styles.dayItem}>
            <ForecastItem values={item} />
          </View>
        ))}
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 25,
    color: Colors.textColor,
  },
  dayItem: {
    marginTop: 10,
  },
});

export default Forcast;
