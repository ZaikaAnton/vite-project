import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter, defer } from "react-router-dom";
import { Cart } from "./Pages/Cart/Cart";
import { Error as ErrorPage } from "./Pages/Error/Error";
import { Layout } from "./layout/Menu/Layout";
import { ProductOne } from "./Pages/Product/ProductOne";
import axios from "axios";
import { PREFIX } from "./helpers/API";
import { Suspense, lazy } from "react";
import { AuthLayout } from "./layout/Auth/AuthLayout";
import { Login } from "./Pages/Login/Login";
import { Registr } from "./Pages/Registr/Regist";
import { RequiedAuth } from "./helpers/RequireAuth";
import { Provider } from "react-redux";
import { store } from "./store/store";

const Menu = lazy(() => import("./Pages/Menu/Menu"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequiedAuth>
        <Layout />
      </RequiedAuth>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<>Загрузка...</>}>
            <Menu />
          </Suspense>
        ),
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
          return defer({
            data: new Promise((resolve, reject) => {
              setTimeout(() => {
                axios
                  .get(`${PREFIX}/products/${params.id}`)
                  .then((data) => resolve(data))
                  .catch((e) => reject(e));
              }, 2000);
            }),
          });
        },
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Registr />,
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
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>,
);
