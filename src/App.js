import './App.css';
import {NavBar} from "./components/Header/NavBar";
import {ItemListContainer} from "./components/Main/ItemListContainer"; 
import ItemDetailContainer from "./components/Main/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Carrito from './components/Main/Carrito';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>  
        <Route path='/' element={
          <ItemListContainer title="Bienvenido a 967 Cerveteca"/>
        } />

        <Route path='/categoria/:nombreCategoria' element={
          <ItemListContainer title="Bienvenido a 967 Cerveteca"/>
        } />
        
        <Route path='/detalle/:id' element={
          <ItemDetailContainer title="Bienvenido a 967 Cerveteca"/>
        } />

        <Route path='/carrito' element={
          <Carrito/>
        }/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
