import { useEffect } from "react";
import { ProductsGetAll } from "../services/products";

const PageProducts = (): JSX.Element => {
  useEffect(() => {
    const getAll = async () => {
      try {
        await ProductsGetAll();
      } catch (error) {
        console.info(error);
      }
    };

    getAll();
    console.info("RUN");
  }, []);

  return (
    <div>
      <h1>Products</h1>
    </div>
  );
};

export default PageProducts;
