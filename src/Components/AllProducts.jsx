import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const AllProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8080/products").then((res)=> setProducts(res.data))
    },[])
    console.log(products)
  return (
    <div>
        <table border="2" cellpadding="5">
            <thead>
                <th>Product</th>
                <th>Price</th>
                <th>more details</th>
            </thead>
            <tbody>
                {products.map((product)=>(
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td><Link to ={`/allProducts/${product.id}`}>More Details</Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
