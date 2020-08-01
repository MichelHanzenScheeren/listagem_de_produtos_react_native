import React from "react";
import AnimatedLoader from "react-native-animated-loader";
import Styles from "./styles";

export default function Loader() {
  return (
    <AnimatedLoader
      visible={true}
      overlayColor="#FAFAFA"
      source={require("./loader.json")}
      animationStyle={Styles.lottie}
      speed={1}
    />
  );
}