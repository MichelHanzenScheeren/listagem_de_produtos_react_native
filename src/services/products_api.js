  import Axios from "axios";

  const api = Axios.create({
    baseURL: "https://rocketseat-node.herokuapp.com/api",
  });

  export default class ProductsApi {
    static async loadProducts(currentPage = 1) {
      try {
        const response = await api.get(`/products?page=${currentPage}`);
        return response.data;
      } catch (error) {
        console.log(error.message);
        return {};
      }
    }
  }