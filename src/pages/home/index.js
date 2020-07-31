import React, {Component} from "react";
import { View, Text } from "react-native";
import Styles from "./styles";
import ProductApi from "../../services/products_api";

export default class Home extends Component {
  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await ProductApi.loadProducts();
    const { docs } = response;
    console.log(docs);
  } 

  render() {
    return (
      <View style={Styles.container}>
        <Text>Oiiii de novoooo!</Text>
      </View>
    );
  }
}

