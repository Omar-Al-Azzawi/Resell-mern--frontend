import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

export default function UpdataProduct() {
    const [name, setName] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [description, setDescription] = React.useState('')
    
    const navigate = useNavigate()

    const handleUpdata = async (id: any) => {
        const data = {
            name,
            price,
            description
        }
        await axios.post(`http://localhost:3000/api/v1/products/${id}`, data)
        navigate('/')
    }

    return (
        <div>
            <h1>Updata Product</h1>
            <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="text" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button onClick={() => handleUpdata}>Updata</button>
        </div>
    )
}
