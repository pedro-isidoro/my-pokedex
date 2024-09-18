import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./components/redux/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Pokedex from "./routes/pokedex/Pokedex";
import Home from "./routes/home/Home";
import PokeProfile from "./routes/profile/PokeProfile.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "pokedex",
        element: <Pokedex />,
      },
      {
        path: "/pokedex/pokeProfile/:id",
        element: <PokeProfile />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
