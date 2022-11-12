import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/BasicRoutes/BasicRoutes";

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
