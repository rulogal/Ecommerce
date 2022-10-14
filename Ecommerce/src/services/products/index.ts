import axios from "axios";
import { TypeProduct } from "./models/index.types";

const ProductsGetAll = async () => {
  try {
    const response = await axios.get<TypeProduct[]>(
      "https://fakestoreapi.com/products"
    );
    console.info(response);
    return response;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export { ProductsGetAll };
