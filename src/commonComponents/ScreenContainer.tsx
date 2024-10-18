import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import Colors from "../constants/ColorConst";
import { weatherBG } from "../assests/images";
import Header from "./Header";

interface ScreenContainerProps {
  headerLabel?: string;
  children: React.ReactNode;
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({
  headerLabel,
  children,
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={weatherBG}
        style={styles.image}
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Header headerLabel={headerLabel} />
          <View style={{ flex: 1 }}>{children}</View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
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
