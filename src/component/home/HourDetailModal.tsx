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
import Icon from "react-native-vector-icons/AntDesign";

const HourDetailModal: React.FC<any> = ({ values, isVisible, togglePress }) => {
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
              <Text style={styles.modelHeading}>Time</Text>
              <Text style={styles.modalText}>
                {moment(values?.time).format("hh:mm A")}
              </Text>
            </View>
            <View style={styles.modalRow}>
              <Text style={styles.modelHeading}>Condition</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={styles.tinyLogo}
                  source={{ uri: `https:${values?.condition?.icon}` }}
                />
                <Text style={styles.modalText}>{values?.condition.text}</Text>
              </View>
            </View>
            <View style={styles.modalRow}>
              <Text style={styles.modelHeading}>Wind/KM</Text>
              <Text style={styles.modalText}>{values?.wind_kph}</Text>
            </View>
            <View style={styles.modalRow}>
              <Text style={styles.modelHeading}>Atmospheric/Inch</Text>
              <Text style={styles.modalText}>
                <Text style={styles.modalText}>{values?.pressure_in}</Text>
              </Text>
            </View>
            <View style={styles.modalRow}>
              <Text style={styles.modelHeading}>Cloud</Text>
              <Text style={styles.modalText}>
                <Text style={styles.modalText}>{values?.cloud}</Text>
              </Text>
            </View>
            <View style={styles.modalRow}>
              <Text style={styles.modelHeading}>Temp</Text>
              <Text style={styles.modalText}>
                <Text style={styles.modalText}>{values?.temp_c}</Text>
              </Text>
            </View>
            <View style={styles.modalRow}>
              <Text style={styles.modelHeading}>Feels Like</Text>
              <Text style={styles.modalText}>
                <Text style={styles.modalText}>{values?.feelslike_c}</Text>
              </Text>
            </View>
            <View style={styles.modalRow}>
              <Text style={styles.modelHeading}>Heat Index</Text>
              <Text style={styles.modalText}>
                <Text style={styles.modalText}>{values?.heatindex_c}</Text>
              </Text>
            </View>
            <View style={styles.modalRow}>
              <Text style={styles.modelHeading}>Dewpoint</Text>
              <Text style={styles.modalText}>
                <Text style={styles.modalText}>{values?.dewpoint_c}</Text>
              </Text>
            </View>
            <View style={styles.modalRow}>
              <Text style={styles.modelHeading}>Rain Chance</Text>
              <Text style={styles.modalText}>
                <Text style={styles.modalText}>{values?.chance_of_rain}</Text>
              </Text>
            </View>
            <View style={styles.modalRow}>
              <Text style={styles.modelHeading}>Snow Chance</Text>
              <Text style={styles.modalText}>
                <Text style={styles.modalText}>{values?.chance_of_snow}</Text>
              </Text>
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
    marginTop: Platform.OS === "ios" ? 25 : 0,
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

export default HourDetailModal;
