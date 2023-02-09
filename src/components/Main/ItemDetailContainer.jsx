import ItemDetail from './ItemDetail'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {getDoc, doc} from 'firebase/firestore'
import { productosColeccion } from '../../firebaseConfig'
import {toast} from 'react-toastify'

export default function ItemDetailContainer() {
  const [item, setItem] = useState({})
  const parametro = useParams();
 
  useEffect(()=>{
    const getProduct = ()=>{
        
        const auxDoc = doc(productosColeccion, parametro.id);
        const pedido = getDoc(auxDoc)

        pedido
        .then((res)=>{
          const producto = res.data()
          const auxProd = {...producto, id:parametro.id}
          setItem(auxProd)
        })
        .catch(()=>{
          toast.error("Hubo un error")
        })
      };
      getProduct()
    },[])
  
  return (
    <ItemDetail item={item}/>
  )
  
}
