import { createBrowserRouter } from "react-router-dom";

// Pages
import PageHome from "../pages/Home";
import PageProducts from "../pages/Products";
import PageProduct from "../pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageHome />,
  },
  {
    path: "/products",
    element: <PageProducts />,
  },
  {
    path: "/product",
    element: <PageProduct />,
  },
]);

export default router;
