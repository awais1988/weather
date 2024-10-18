import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Colors from "../../constants/ColorConst";
import useDayLabel from "../../customHooks/useDayLabel";
import useToggleDDM from "../../customHooks/useToggleDDM";
import DayDetailModal from "./DayDetailModal";

const ForecastItem: React.FC<any> = ({ values }) => {
  const { getDayLabel } = useDayLabel();
  const { togglePress, isVisible } = useToggleDDM();
  return (
    <>
      <Pressable onPress={togglePress}>
        <View style={styles.topWrapper}>
          <View style={styles.innerWrapper}>
            <Image
              style={styles.tinyLogo}
              source={{ uri: `https:${values?.day?.condition.icon}` }}
            />
            <Text style={styles.dayText}>{getDayLabel(values?.date)}</Text>
            <Text style={styles.temText}>{values?.day?.maxtemp_c}</Text>
            <Text style={styles.temText}>{values?.day?.mintemp_c}</Text>
          </View>
          <View style={styles.innerWrapper}>
            <Text
              style={styles.temText}
            >{`Sun-Rise ${values?.astro?.sunrise}`}</Text>
            <Text
              style={styles.temText}
            >{`Moon-Rise ${values?.astro?.moonrise}`}</Text>
          </View>
        </View>
      </Pressable>
      {isVisible && (
        <DayDetailModal
          values={values}
          isVisible={isVisible}
          togglePress={togglePress}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
  dayText: {
    fontSize: 20,
    color: Colors.textColor,
  },
  temText: {
    fontSize: 15,
    color: Colors.whiteColor,
  },
  topWrapper: {
    flex: 1,
    flexDirection: "column",
    borderRadius: 10,
    backgroundColor: Colors.transparentBG,
    padding: 15,
  },
  innerWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ForecastItem;
