import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Admin() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Admin Dashboard</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Image</th><th>Name</th><th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p._id}>
              <td><img src={`http://localhost:5000/uploads/${p.image}`} alt="" width="80" /></td>
              <td>{p.name}</td>
              <td>${p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
