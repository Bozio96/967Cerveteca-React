import React, { useContext, useState } from 'react'
import { contexto } from '../Context/CustomProvider';
import Contador from './Contador'
import {toast} from 'react-toastify'

export default function ItemDetail({item}) {
  
  const [confirmado, setConfirmado] = useState(false);
  const {addProduct} = useContext(contexto);
  const [cantidadLocal, setCantidadLocal] = useState(1)

  const handleAdd = (cantidad)=>{
    setCantidadLocal(cantidad);
    setConfirmado(true);
  }

  const handleClick = ()=>{
    addProduct(item,cantidadLocal)
    toast.success(item.titulo+ " agregado")
  }

  return (
    <div className='containerDetail'>
      <img src={item.img} alt="unafoto" />

      <article>
        <h2>{item.titulo}</h2>
        <section>
          <h3>${item.precio}</h3>
        </section>

        <section>
          <p>{item.descripcion}</p>
        </section>

        <Contador stock = {999} handleAdd= {handleAdd}/>
        {confirmado && <button className="add-to-cart" onClick={handleClick}>Agregar al carrito</button>}
      </article>

    </div>
  )
}
