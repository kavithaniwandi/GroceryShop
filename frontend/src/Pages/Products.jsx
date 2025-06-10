import { useEffect, useState } from 'react'
import axios from 'axios'
import './Products.css';


export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
  <div className="products-container">
    <h2>Available Products</h2>
    <div className="products-grid">
      {products.map((product) => (
        <div key={product._id} className="product-card">
          <img src={`http://localhost:5000/uploads/${product.image}`} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button>Buy Now</button>
        </div>
      ))}
    </div>
  </div>
);
}
