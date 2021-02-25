import axois from 'axios';

const productBaseApi = 'http://localhost:8082/api/v1/products';

class ProductService {
  getProducts = () => {
    return axois.get(productBaseApi);
  };
}

const productApi = new ProductService();
export default productApi;
