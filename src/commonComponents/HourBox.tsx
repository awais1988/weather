import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable, Alert } from "react-native";
import Colors from "../constants/ColorConst";
import moment from "moment";
import HourDetailModal from "../component/home/HourDetailModal";
import useToggleHDM from "../customHooks/useToggleHDM";

const HourBox: React.FC<any> = ({ values }) => {
  const { togglePress, isVisible } = useToggleHDM();

  return (
    <>
      <Pressable onPress={togglePress}>
        <View style={styles.boxContainer}>
          <Text style={styles.timeStyle}>
            {moment(values?.time).format("hh:mm A")}
          </Text>
          <Image
            style={styles.tinyLogo}
            source={{ uri: `https:${values?.condition?.icon}` }}
          />
          <Text style={styles.textStyle}>{values?.temp_c}</Text>
        </View>
      </Pressable>
      {isVisible && (
        <HourDetailModal
          values={values}
          isVisible={isVisible}
          togglePress={togglePress}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    width: 100,
    height: 130,
    borderRadius: 10,
    backgroundColor: Colors.transparentBG,
    padding: 10,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  timeStyle: {
    fontSize: 15,
    color: Colors.textColor,
  },
  textStyle: {
    fontSize: 20,
    color: Colors.textColor,
  },
  tinyLogo: {
    width: 60,
    height: 60,
  },
});

export default HourBox;
