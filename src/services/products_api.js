  import Axios from "axios";

  const api = Axios.create({
    baseURL: "https://rocketseat-node.herokuapp.com/api",
  });

  export default class ProductsApi {
    static async loadProducts() {
      try {
        const response = await api.get("/products");
        return response.data;
      } catch (error) {
        console.log(error.message);
        return {};
      }
    }
  }