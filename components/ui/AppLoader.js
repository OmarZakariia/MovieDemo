import React from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
// import AnimatedLottieView from "lottie-react-native";
import LottieView from "lottie-react-native";

const AppLoader = () => {
  return (
    <View style={[styles.container, StyleSheet.absoluteFillObject]}>
      <LottieView
        source={require("../../assets/1961-movie-loading.json")}
        autoPlay
        loop={false}
        // speed={1}

        // duration={1000}
        // duration={1}
      />
      {/* <Text style={styles.text}>{message}</Text> */}
    </View>
  );

  // return <ActivityIndicator size="large" color={"red"} />;
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignContent: "center",
    // justifyContent: "center",
    // backgroundColor: "rgba(0,0,0,0.3)",
    // zIndex: 1,
    width: "50%",
    height: "50%",
  },
});

export default AppLoader;
