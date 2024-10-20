import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Modal,
  Dimensions,
  Platform,
} from "react-native";
import Colors from "../../constants/ColorConst";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import { utilies } from "../../utils/utilities";
import DisplayRow from "../../commonComponents/DisplayRow";

const DayDetailModal: React.FC<any> = ({ values, isVisible, togglePress }) => {
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
            <DisplayRow
              rowLable="Day"
              rowvalues={utilies.getDayLabel(values?.date)}
            />
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
            <DisplayRow
              rowLable="Max Temp"
              rowvalues={values?.day?.maxtemp_c}
            />
            <DisplayRow
              rowLable="Min Temp"
              rowvalues={values?.day?.mintemp_c}
            />
            <DisplayRow
              rowLable="Rain Chance"
              rowvalues={values?.day?.daily_chance_of_rain}
            />
            <DisplayRow
              rowLable="Snow Chance"
              rowvalues={values?.day?.daily_chance_of_snow}
            />
            <DisplayRow
              rowLable="Wind - km/h"
              rowvalues={values?.day?.maxwind_kph}
            />
            <DisplayRow rowLable="Sunrise" rowvalues={values?.astro?.sunrise} />
            <DisplayRow rowLable="Sunset" rowvalues={values?.astro?.sunset} />
            <DisplayRow
              rowLable="Moonrise"
              rowvalues={values?.astro?.moonrise}
            />
            <DisplayRow rowLable="Moonset" rowvalues={values?.astro?.moonset} />
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
