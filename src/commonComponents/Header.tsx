import React from "react";
import { View, StyleSheet, Pressable, Text, Platform } from "react-native";
import Colors from "../constants/ColorConst";
import Icon from "react-native-vector-icons/AntDesign";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type ScreenNavigationProp = StackNavigationProp<ParamListBase>;

type Props = {
  headerLabel?: string;
  backBtn?: boolean;
  backBtnPress?: any;
  addBtn?: boolean;
};

const Header: React.FC<Props> = ({
  headerLabel,
  backBtn,
  backBtnPress,
  addBtn = true,
}) => {
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.backBtnStlye}>
        {backBtn && (
          <Pressable onPress={() => backBtnPress()}>
            <Icon name="arrowleft" size={30} color="#fff" />
          </Pressable>
        )}
      </View>
      <View style={styles.headingStlye}>
        <Text style={styles.labelStyle}>{headerLabel}</Text>
      </View>
      <View style={styles.addBtnStlye}>
        {addBtn && (
          <Pressable onPress={() => navigation.navigate("Cities")}>
            <Icon name="plus" size={30} color="#fff" />
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: Platform.OS === "ios" ? 50 : 0,
  },
  labelStyle: {
    fontSize: 20,
    color: Colors.whiteColor,
    fontWeight: "bold",
  },
  txtColor: {
    color: Colors.whiteColor,
  },
  backBtnStlye: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  addBtnStlye: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  headingStlye: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Header;
