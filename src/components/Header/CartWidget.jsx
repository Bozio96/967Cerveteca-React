import { useContext } from "react";
import {contexto} from "../Context/CustomProvider"

export function CartWidget() {
  const {cantidad} = useContext(contexto )
  
  const icono =
    "https://res.cloudinary.com/dnfil5isx/image/upload/v1671478868/imagenes/icons8-carrito-de-compras-30_pizplc.png";
  return (
    <>
      <div className="logoYnot">
        <img className="logoCarrito" src={icono} alt="imagenDeCarrito"></img>
        <span className="notification">{cantidad}</span>
      </div>
    </>
  );
}
