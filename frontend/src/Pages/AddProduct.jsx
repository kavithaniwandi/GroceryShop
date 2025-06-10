import { useState } from 'react'
import axios from 'axios'
import './AddProduct.css'


export default function AddProduct() {
  const [form, setForm] = useState({
    name: '',
    price: '',
    image: null
  })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleImage = e => {
    setForm({ ...form, image: e.target.files[0] })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const data = new FormData()
    data.append('name', form.name)
    data.append('price', form.price)
    data.append('image', form.image)

    try {
      await axios.post('http://localhost:5000/products', data)
      alert('Product added successfully!')
    } catch (err) {
      console.error('Error adding product:', err);
      alert('Error adding product')
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
      <h2>Add Product</h2>
      <input name="name" placeholder="Product Name" onChange={handleChange} required /><br />
      <input name="price" placeholder="Price" type="number" onChange={handleChange} required /><br />
      <input type="file" accept="image/*" onChange={handleImage} required /><br />
      <button type="submit">Add Product</button>
    </form>
  )
}
