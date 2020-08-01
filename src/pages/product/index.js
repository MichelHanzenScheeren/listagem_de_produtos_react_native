import React, { Component } from "react";
import { WebView } from "react-native-webview";
import Loader from "../../components/loader";

export default class Product extends Component {
  static navigationOptions = ({ navigation }) => ({
      title: navigation.state.params.product.title,
    });

  renderLoading = () => (<Loader />);

  render() {
    return (
      <WebView 
        source={{ uri: this.props.navigation.state.params.product.url}}
        renderLoading={this.renderLoading}
        startInLoadingState={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    );
  }
}