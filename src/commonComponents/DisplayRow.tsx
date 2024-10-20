import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/ColorConst";

const DisplayRow: React.FC<any> = ({ rowLable, rowvalues }) => {
  return (
    <View style={styles.modalRow}>
      <Text style={styles.modelHeading}>{rowLable}</Text>
      <Text style={styles.modalText}>{rowvalues}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default DisplayRow;
