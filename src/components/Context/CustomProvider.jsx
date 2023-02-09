import { createContext, useState } from "react";

export const contexto = createContext();
const Provider = contexto.Provider;

const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidad, setCantidad] = useState(0)
    
    function isInCart(id){
        return carrito.some((item)=>item.id === id);
   }
    const addProduct = (producto, cant)=>{       
        if(isInCart(producto.id)){
            const repetido = carrito.find((item)=>item.id === producto.id);
            repetido.cantidad = repetido.cantidad + cant;
            setCantidad(cantidad + cant);
            setTotal(total + producto.precio * cant)
        }else{
            const auxProd = {...producto, cantidad: cant};
            const auxCarrito = [...carrito, auxProd];
            setCarrito(auxCarrito);
            setCantidad(cantidad + cant);
            setTotal(total + producto.precio * cant);
        }
    }

    const deleteProduct = (producto)=>{
        let i = 0;
        let articuloNoBorrado = true;
        while (i < carrito.length && articuloNoBorrado) {
            if (carrito[i] === producto) {
                let auxTotal = total;
                auxTotal = auxTotal - (producto.precio * producto.cantidad);
                let auxCarrito = [...carrito];
                auxCarrito.splice(i, 1);
                setCarrito(auxCarrito);
                setCantidad(cantidad - producto.cantidad);
                setTotal(auxTotal);
                articuloNoBorrado = false;
             }
            i++;
        }
    }

    const emptyCart = ()=>{
        setCarrito([]);
        setCantidad(0);
        setTotal(0);
    }

   
    const valorDelContexto ={
        carrito,
        total,
        cantidad,
        addProduct,
        emptyCart,
        deleteProduct,
        setTotal
    }
    return(
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    ) 
};

export default CarritoProvider