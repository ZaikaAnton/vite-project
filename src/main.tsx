import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Menu } from "./Pages/Menu/Menu";
import { Cart } from "./Pages/Cart/Cart";
import { Error as ErrorPage } from "./Pages/Error/Error";
import { Layout } from "./layout/Menu/Layout";
import { ProductOne } from "./Pages/Product/ProductOne";
import axios from "axios";
import { PREFIX } from "./helpers/API";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element: <ProductOne />,
        errorElement: <>Ошибка</>,
        loader: async ({ params }) => {
          // Промис, который отрабатывает 2 секунды, имитирует длительность работы прелоадера
          await new Promise<void>((resolve) => {
            setTimeout(() => {
              resolve();
            }, 2000);
          });
          const { data } = await axios.get(`${PREFIX}/produts/${params.id}`);
          return data;
        },
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>,
);
