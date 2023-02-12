import React, { useState, useEffect, useCallback, useMemo, useContext } from 'react'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders

const CartContext = React.createContext()

const calculateMostExpensive = (data) => {
  return (
    data.reduce((total, item) => {
      const price = item.fields.price
      if(price >= total){
        total = price
      }
      return total;
    }, 0) / 100
  )
}
const Index = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState(0)
  const addToCart = useCallback(() => {
    setCart(cart + 1)
  }, [cart]);

  const mostExpensive = calculateMostExpensive(products)
  console.log(mostExpensive)
  
  return (
    <CartContext.Provider value={addToCart}>
      <Counter count={count} setCount={setCount} />
      <CartCounter cart={cart} />
      <h1>Most Expensive: ${mostExpensive}</h1>
      <BigList products={products} />
    </CartContext.Provider>
  )
}


const CartCounter = ({cart}) => {
  return <>
    <h1>Cart Items: {cart}</h1>
  </> 
}
const Counter = ( {count, setCount }) => {
  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
    </>
  )
}

const BigList = React.memo(({ products }) => {
  useEffect(() => {
    console.count("Big List rendered");
  }, [])
  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product}></SingleProduct>
      })}
    </section>
  )
});

const SingleProduct = ({ fields }) => {
  const addToCart = useContext(CartContext)
  useEffect(() => {
    console.count("Single Product rendered")
  })
  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button className='btn' onClick={() => addToCart()}>Add To Cart</button>
    </article>
  )
}
export default Index
