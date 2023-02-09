import { useContext } from 'react'
import { contexto } from '../Context/CustomProvider'
import {addDoc} from 'firebase/firestore'
import { ventasColeccion } from '../../firebaseConfig';
import {toast} from 'react-toastify'

export default function Carrito() {
  const {carrito,emptyCart, deleteProduct, total, setTotal } = useContext(contexto); 

  const handleVaciar = ()=>{
    emptyCart()
    toast.success("Carrito vaciado")
    setTotal(0)
  }

   const handleCompra = ()=>{
    const compra = {
      usuario:{
        nombre: "Rodrigo",
        email: "rodrigobozio96@gmail.com"
      },
      carrito: carrito,
      fecha: new Date(),
      totalCompra: total
    }

    

    if(total === 0){
      toast.warning("Por favor ingrese productos para realizar la compra")
    }else{
      const agregar = addDoc(ventasColeccion, compra)
      agregar
    .then((res)=>{
      
      toast.success("Compra realizada con exito")
      toast.success("Gracias por comprar")
      handleVaciar()
    })
    .catch(()=>{
      toast.error("Hubo un error")
    })
    }
  }

  return (
    <div className="cart">
      <hr />
    <div className="productos">
      {carrito.map((producto) => {
        return (
          
          <div className="productoCarrito" key={producto.id}>
              <img
                className="imgProd"
                src={producto.img}
                alt="imagen"
              />
            <div className="nombreYCantidad">
              <h3>{producto.titulo}</h3>
              <p>Cantidad: {producto.cantidad}</p>
            </div>
        
            <p className="precioCart">$ {producto.precio * producto.cantidad}</p> 

            <button className='add-to-cart botonBorrar' onClick={()=>{
              deleteProduct(producto)
              toast.success("Producto Borrado")
              }}> X </button>    
          </div>
        );
      })}
      <h4 className='lblTotal'>Total de la compra: ${total} </h4>
    </div>

      <button className='add-to-cart' onClick={handleVaciar}>Vaciar carrito</button>
       
      <button className='add-to-cart' onClick={handleCompra}>Realizar Compra</button>
      
    </div>
  )
}
