import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import route from "./route/routers.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/feature/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={route}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
