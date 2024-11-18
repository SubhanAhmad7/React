
import reactLogo from './assets/react.svg'
import './App.css'
import { useState } from 'react'
import Card from './component/Card';



function App() {
  const [Products, setProducts] = useState([]);
  const [Loding, setLoding] = useState(false)

  const getProducts = () => {
    setLoding(true)
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .finally(() => setLoding(false))
  }
  return (
    <div className='container'>
      <button className='btn btn-success' onClick={getProducts}>Get all Products</button>
      <div className='row'>
        {
          (Loding == true) ? (<div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>) : null
        }
        {Products.map((product) => {
          return (
            <div className="col-md-4" key={product.id}>
              <Card product={product}/>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}
export default App
