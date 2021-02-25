import axois from 'axios';

const cartBaseApi = 'http://localhost:8081/api/v1/carts';

class CartService {
  getCarts = () => {
    return axois.get(cartBaseApi);
  };
}

const cartApi = new CartService();
export default cartApi;
