import "./App.css";
import { NavBar } from "./components/Header/NavBar";
import { ItemListContainer } from "./components/Main/ItemListContainer";
import ItemDetailContainer from "./components/Main/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carrito from "./components/Main/Carrito";
import CustomProvider from "./components/Context/CustomProvider";
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <CustomProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer title="🍺Bienvenido a 967 Cerveteca🍺" />
            }
          />

          <Route
            path="/categoria/:nombreCategoria"
            element={<ItemListContainer title="🍺Bienvenido a 967 Cerveteca🍺"/>}
          />

          <Route path="/detalle/:id" element={<ItemDetailContainer />} />

          <Route path="/carrito" element={<Carrito/>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={1000}/>
    </CustomProvider>
  );
}

export default App;
