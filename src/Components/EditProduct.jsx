import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditProduct() {
    const { id } = useParams();
    const Navigate = useNavigate();

    let [Product, setProduct] = useState({
        name: '',
        price: 0,
        quantity: 0,
        imgUrl: 'https://source.unsplash.com/random'
    });

    let GetProductById = (id) => {
        axios.get(`http://localhost:2000/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.log(error))
    }

    useEffect(() => { GetProductById(id) }, [])
    let EditProduct = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:2000/products/${id}`, Product)
        .then((response)=>setProduct(response.data))
        .catch(error =>console.log(error))
        Navigate("/products")
    }

    let HandleInputChange = useCallback((event) => {
        const { name, value } = event.target;
        setProduct((old) => ({
            ...old,
            [name]: value
        }))
    })
    return (
        <div>
            <h1>Add New Product</h1>
            <form action="" onSubmit={EditProduct}>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Name" name="name" value={Product.name} onChange={HandleInputChange}/>
                    <label for="floatingInput">Product Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Image" name="imgUrl" value={Product.imgUrl} onChange={HandleInputChange}/>
                    <label for="floatingInput">Product Image</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingInput" placeholder="Price" name="price" value={Product.price} onChange={HandleInputChange}/>
                    <label for="floatingInput">Product Price</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingInput" placeholder="Quantity" name="quantity" value={Product.quantity} onChange={HandleInputChange}/>
                    <label for="floatingInput">Product Quantity</label>
                </div>
                <button className="btn btn-dark">Submit</button>
            </form>

        </div>
    )
}
