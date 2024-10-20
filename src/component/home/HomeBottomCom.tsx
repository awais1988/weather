import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/ColorConst";
import Icon from "react-native-vector-icons/AntDesign";
import { utilies } from "../../utils/utilities";

const HomeBottomeCom: React.FC<any> = ({ values, navigation }) => {
  return (
    <View style={styles.opacityBG}>
      <View style={styles.bottomInnerWrap}>
        <Text style={styles.smallText}>5-day forecast</Text>
        <Pressable onPress={() => navigation.navigate("Forcast")}>
          <Text style={styles.smallText}>
            More details
            <Icon name="right" size={18} color="#fff" />
          </Text>
        </Pressable>
      </View>
      <View style={styles.bottomInnerWrap}>
        <Text style={styles.smallText}>
          {utilies.getDayLabel(values?.forecastday[0]?.date)}
        </Text>
        <Text
          style={styles.smallText}
        >{`${values?.forecastday[0]?.day.maxtemp_c}/${values?.forecastday[0]?.day.mintemp_c}`}</Text>
      </View>
      <View style={styles.bottomInnerWrap}>
        <Text style={styles.smallText}>
          {utilies.getDayLabel(values?.forecastday[1]?.date)}
        </Text>
        <Text
          style={styles.smallText}
        >{`${values?.forecastday[1]?.day.maxtemp_c}/${values?.forecastday[1]?.day.mintemp_c}`}</Text>
      </View>
      <View style={styles.bottomInnerWrap}>
        <Text style={styles.smallText}>
          {utilies.getDayLabel(values?.forecastday[2]?.date)}
        </Text>
        <Text
          style={styles.smallText}
        >{`${values?.forecastday[2]?.day.maxtemp_c}/${values?.forecastday[2]?.day.mintemp_c}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  opacityBG: {
    backgroundColor: Colors.transparentBG,
    borderRadius: 20,
    padding: 20,
    flexDirection: "column",
    flex: 1,
  },
  bottomInnerWrap: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    alignItems: "center",
    borderBottomColor: Colors.indicator,
  },
  smallText: {
    fontSize: 20,
    color: Colors.textColor,
  },
});

export default HomeBottomeCom;
