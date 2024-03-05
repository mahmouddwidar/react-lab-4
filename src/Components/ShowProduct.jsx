import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams , Link } from 'react-router-dom';

export default function ShowProduct() {
    const { id } = useParams();
    let [product, setProduct ] = useState({});

    let GetProductById = () => {
        axios.get(`http://localhost:2000/products/${id}`)
            .then((response) => {
                console.log(response.data)
                setProduct(response.data)
            })
            .catch(error => console.log(error))
    }
    
    useEffect(() => {
        GetProductById();
    }, [])

    return (
        <div>
            <div class="card">
                <img src={product.imgUrl} class="card-img-top" alt="..." className='w-50 mx-auto'></img>
                <hr />
                <div class="card-body">
                    <h5 class="card-title">{product.name}</h5>
                    <p class="card-text">Quantity: {product.quantity}</p>
                    <p class="card-text">Price: {product.price} $</p>
                    <Link to="/products" class="btn btn-info">Go to Products</Link>
                </div>
            </div>
        </div>
    )
}
