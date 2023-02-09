import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { productosColeccion } from "../../firebaseConfig";
import {getDocs, query, where} from "firebase/firestore"
import {toast} from 'react-toastify'

export function ItemListContainer(greeting) {
  const [items, setItems] = useState([]);

  const parametro = useParams();

  useEffect(() => {
    const getProducts = ()=>{
        
      let filtro;
      if(parametro.nombreCategoria){
        filtro = query(productosColeccion,where("categoria", "==", parametro.nombreCategoria ))
      }else{
        filtro = productosColeccion
      }
        
        const pedidoCategoria = getDocs(filtro)
        
        pedidoCategoria
        .then((res)=>{
          const productos = res.docs.map((doc)=>{
            return {id: doc.id, ...doc.data()}
          }) 
          setItems(productos);
          if(parametro.nombreCategoria){
            toast.success(parametro.nombreCategoria +" cargados/as con exito")
          }else{
            toast.success("Productos cargados con exito")
          }
        })
        .catch(()=>{
          toast.error("Hubo un error")
        })

    };
    getProducts()

  }, [parametro.nombreCategoria]);

  return (
    <div className="container">
      <h1 className="bienvenida">{greeting.title}</h1>
      <ItemList items={items} />
    </div>
  );
}
