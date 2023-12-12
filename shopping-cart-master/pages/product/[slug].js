import React, { useContext } from 'react'
import Layout from '../../components/Layout'
import Router, {useRouter} from 'next/router'
import data from '../../utils/data'
import {Store} from '../../utils/Store'

export default function ProductScreen() {

    // inicializar el estado
    const {state, dispatch} = useContext(Store)

    const router = useRouter()

    const {query} = useRouter()
    const {slug} = query

    const product = data.products.find((x) => x.slug === slug)

    if(!product){
        return <div>producto no encontrado</div>
    }

    // funcion para agregar al carrito
    // donde enviamos a guardar en nuestra variable de estado global
    const addToCartHandler = ()=>{
      const existItem = state.cart.cartItems.find(x => x.slug === product.slug)
      const quantity = existItem ?  existItem.quantity + 1 : 1

      if(product.countInStock < quantity ){
        alert("sorry. Product is out of stock")
        return;
      }

      dispatch({type : 'CARD_ADD_ITEM', payload: {...product, quantity}})
      router.push('/cart')
    }

  return (
    <div>
      <Layout title={"product screen"}>
        <h2 className='text-center mt-5 mb-5'>PRODUCTO UNICO</h2>
        <div className="container">
        <button className='btn btn-secondary mb-4' onClick={()=>router.push('/')}>Volver a la</button>
        <div className="card mb-3 maximo-card">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={product.image} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
       
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <center><p className='card-title' style={{ fontWeight: 'bold' }}>{product.description}</p></center>

                <p className='card-title' style={{ fontWeight: 'bold' }}>PRECIO UNITARIO:{product.price}$
</p>

                <p className='card-title' style={{ fontWeight: 'bold' }}>CATEGORIA: {product.category}</p>
                <p className='card-title' style={{ fontWeight: 'bold' }}>CLASIFICACION: {product.rating}</p>
                <p className="card-text" style={{ fontWeight: 'bold' }}></p>
                <p className='card-title' style={{ fontWeight: 'bold' }}>DESCRIPCION:{product.n}
                </p>
              
                <center><p>{product.countInStock > 0 ? "EN INVENTARIO":"Unavailable"}</p></center>
                <button className='btn btn-primary' onClick={addToCartHandler}>Agregar Al Carrito</button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </Layout>
    </div>
  );
}
