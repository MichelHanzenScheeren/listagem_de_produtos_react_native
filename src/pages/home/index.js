import React, {Component} from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Loader from "../../components/loader";
import ProductApi from "../../services/products_api";
import Styles from "./styles";

export default class Home extends Component {
  state = {
    products: [],
    currentPage: 1,
    totalPages: 1,
  } 

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (nextPage = 1) => {
    const response = await ProductApi.loadProducts(nextPage);
    const { docs, page, pages } = response;
    this.setState({
      products: [...this.state.products, ...docs], 
      currentPage: page, 
      totalPages: pages
    });
  }

  loadMoreProducts = async () => {
    const {currentPage, totalPages} = this.state;
    if(currentPage == totalPages) return;
    this.loadProducts(Number.parseInt(currentPage) + 1);
  }

  renderItem = ({ item }) => (
    <View style={Styles.productContainer}>
      <Text style={Styles.productTitle}>{item.title}</Text>
      <Text  style={Styles.productDescription}>{item.description}</Text>
      <TouchableOpacity 
        onPress={() => this.props.navigation.navigate("Product", {product: item})}  
        style={Styles.productButton}
      >
        <Text style={Styles.productButtonText}>Ver mais</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    if(this.state.products.length == 0) {
      return (<Loader />);
    }
    return (
      <View style={Styles.container}>
        <FlatList
          contentContainerStyle={Styles.list} 
          data={this.state.products} 
          keyExtractor={(item) => item._id}
          renderItem={this.renderItem}
          /*Porcentagem que falta da lista para que a função onEndReached seja chamada
          //0.15 = faltando 15% / após 85% da lista ter sido vista*/
          onEndReachedThreshold={0.15} 
          /* função chamada para carregar restante da lista */
          onEndReached={this.loadMoreProducts}
        />
      </View>
    );
  }
}


