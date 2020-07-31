import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "./pages/home";

const options = {
  headerStyle: {backgroundColor: "#DA552F"}, 
  headerTintColor: "#FFF",
  headerTitleAlign: "center",
};

export default createAppContainer(
  createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: options,
    },
  }),
);