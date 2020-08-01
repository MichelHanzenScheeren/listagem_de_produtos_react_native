import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  list: {
    padding: 15,
  },
  productContainer: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  productDescription: {
    fontSize: 15,
    color: "#777",
    lineHeight: 20,
    marginTop: 5,
  },
  productButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#DA552F",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  productButtonText: {
    fontSize: 16,
    color: "#DA552F",
    fontWeight: "bold",
  }
});
export default Styles;