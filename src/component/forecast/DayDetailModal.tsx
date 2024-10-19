import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Alert,
  Modal,
  Dimensions,
  Platform,
} from "react-native";
import Colors from "../../constants/ColorConst";
import moment from "moment";
import { ScrollView } from "react-native-gesture-handler";
import useDayLabel from "../../customHooks/useDayLabel";
import Icon from "react-native-vector-icons/AntDesign";

const DayDetailModal: React.FC<any> = ({ values, isVisible, togglePress }) => {
  const { getDayLabel } = useDayLabel();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={togglePress}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ScrollView style={{ width: "100%" }}>
            <View style={styles.crossStyle}>
              <Pressable onPress={togglePress}>
                <Icon name="closecircle" size={30} color="#fff" />
              </Pressable>
            </View>
            <View style={styles.modalRow}>
              <Text style={styles.modelHeading}>Day</Text>
              <Text style={styles.modalText}>{getDayLabel(values?.date)}</Text>
            </View>
            <View style={styles.modalRow}>
              <Text style={styles.modelHeading}>Condition</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={styles.tinyLogo}
                  source={{ uri: `https:${values?.day?.condition?.icon}` }}
                />
                <Text style={styles.modalText}>
                  {values?.day?.condition.text}
                </Text>
              </View>
            </View>
            <View style={styles.modalRow}>
              <Text style={styles.modelHeading}>Max Temp</Text>
              <Text style={styles.modalText}>{values?.day?.maxtemp_c}</Text>
            </View>
            <View style={styles.modalRow}>
              <Text style={styles.modelHeading}>Min Temp</Text>
              <Text style={styles.modalText}>{values?.day?.mintemp_c}</Text>
            </View>
            <View style={styles.modalRow}>
              <Text style={styles.modelHeading}>Rain Chance</Text>
              <Text style={styles.modalText}>
                {values?.day?.daily_chance_of_rain}
              </Text>
            </View>
            <View style={styles.modalRow}>
              <Text style={styles.modelHeading}>Snow Chance</Text>
              <Text style={styles.modalText}>
                {values?.day?.daily_chance_of_snow}
              </Text>
            </View>
            <View style={styles.modalRow}>
              <Text style={styles.modelHeading}>Wind - km/h</Text>
              <Text style={styles.modalText}>{values?.day?.maxwind_kph}</Text>
            </View>
            <View style={styles.modalRow}>
              <Text style={styles.modelHeading}>Sunrise</Text>
              <Text style={styles.modalText}>{values?.astro?.sunrise}</Text>
            </View>
            <View style={styles.modalRow}>
              <Text style={styles.modelHeading}>Sunset</Text>
              <Text style={styles.modalText}>{values?.astro?.sunset}</Text>
            </View>
            <View style={styles.modalRow}>
              <Text style={styles.modelHeading}>Moonrise</Text>
              <Text style={styles.modalText}>{values?.astro?.moonrise}</Text>
            </View>
            <View style={styles.modalRow}>
              <Text style={styles.modelHeading}>Moonset</Text>
              <Text style={styles.modalText}>{values?.astro?.moonset}</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: Platform.OS === "ios" ? 30 : 0,
  },
  modalView: {
    margin: 20,
    backgroundColor: "rgba(96,96,96, 0.9)",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flex: 1,
    width: Dimensions.get("screen").width - 20,
  },
  modalRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: Colors.indicator,
    borderBottomWidth: 1,
    alignItems: "center",
    paddingVertical: 10,
    height: 70,
  },
  modelHeading: {
    color: Colors.whiteColor,
    fontSize: 22,
  },
  modalText: {
    color: Colors.whiteColor,
    fontSize: 18,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  crossStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default DayDetailModal;
