import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import ScreenContainer from "../commonComponents/ScreenContainer";
import { StackNavigationProp } from "@react-navigation/stack";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import Colors from "../constants/ColorConst";
import ForecastItem from "../component/forecast/ForecastItem";
import { locationActions } from "../store/location/locationActions";
import {
  selectLocation,
  removeLocation,
} from "../store/location/locationReducer";
import { cityTypes } from "../../types";
import Icon from "react-native-vector-icons/AntDesign";
import useResetStack from "../customHooks/useResetStack";
import { ParamListBase } from "@react-navigation/native";

type CitiesScreenNavigationProp = StackNavigationProp<ParamListBase, "Cities">;

type Props = {
  navigation: CitiesScreenNavigationProp;
};

const Cities: React.FC<Props> = ({ navigation }) => {
  const dispatch: AppDispatch = useDispatch();
  const { resetStack } = useResetStack();
  const [deleteMood, setDeleteMood] = useState<boolean>(false);
  const { locationArray } = useSelector((state: RootState) => state.location);

  const onLocationSelection = (item: cityTypes) => {
    dispatch(selectLocation(item));
    resetStack("Home");
  };
  const onDeleteItem = (item: cityTypes) => {
    dispatch(removeLocation(item));
    setDeleteMood(false);
  };

  return (
    <ScreenContainer
      headerLabel={"Manage Cities"}
      backBtn={true}
      backBtnPress={() => navigation.goBack()}
      addBtn={false}
    >
      <View style={styles.container}>
        <View style={styles.btnWrapper}>
          <Pressable onPress={() => navigation.navigate("AddCity")}>
            <Icon name="pluscircleo" size={35} color="#fff" />
          </Pressable>
        </View>
        <View style={styles.citiesWrapper}>
          {locationArray.map((item, index) => {
            return (
              <View key={index} style={styles.itemWrapper}>
                {locationArray.length > 1 && deleteMood && (
                  <Pressable onPress={() => onDeleteItem(item)}>
                    <Icon name="delete" size={30} color="#ff0000" />
                  </Pressable>
                )}
                <Pressable
                  onPress={() => onLocationSelection(item)}
                  onLongPress={() => setDeleteMood(!deleteMood)}
                  style={styles.cityBox}
                >
                  <Text style={styles.cityNameTxt}>{item?.name}</Text>
                  <Text style={styles.cityNameTxt}>{item?.region}</Text>
                  <Text style={styles.cityNameTxt}>{item?.country}</Text>
                </Pressable>
              </View>
            );
          })}
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  citiesWrapper: {
    flex: 7,
    flexDirection: "column",
    marginTop: 10,
  },
  itemWrapper: {
    flexDirection: "row",
    backgroundColor: Colors.greenColor,
    alignItems: "center",
    borderRadius: 20,
    marginTop: 10,
  },
  cityBox: {
    flexDirection: "column",
    height: 100,
    borderRadius: 20,
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 25,
    color: Colors.textColor,
    fontWeight: "bold",
  },
  cityNameTxt: {
    fontSize: 20,
    color: Colors.textColor,
  },
  btnWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  addMoreBtn: {
    backgroundColor: Colors.greenColor,
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    paddingVertical: 20,
    borderRadius: 50,
  },
});

export { Cities };
