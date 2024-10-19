import React from "react";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import Colors from "../constants/ColorConst";
import { weatherBG } from "../assests/images";
import Header from "./Header";
import { SafeAreaProvider } from "react-native-safe-area-context";

interface ScreenContainerProps {
  headerLabel?: string;
  backBtn?: boolean;
  backBtnPress?: any;
  addBtn?: boolean;
  children: React.ReactNode;
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({
  headerLabel,
  backBtn,
  backBtnPress,
  addBtn,
  children,
}) => {
  return (
    <SafeAreaProvider style={styles.safeArea}>
      <ImageBackground
        source={weatherBG}
        style={styles.image}
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Header
            headerLabel={headerLabel}
            backBtn={backBtn}
            backBtnPress={backBtnPress}
            addBtn={addBtn}
          />
          <View style={{ flex: 1 }}>{children}</View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 0,
  },
  image: {
    flex: 1,
    // justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});

export default ScreenContainer;
