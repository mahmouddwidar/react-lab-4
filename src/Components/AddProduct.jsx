import React, { useCallback, useState }  from 'react'
import axios from 'axios';
import {Navigate, useNavigate} from 'react-router-dom';

export default function AddProduct() {
    const Navigate = useNavigate();
    
    let [product, setProduct] = useState({
        name:'',
        price:0,
        quantity:0,
        imgUrl:'https://source.unsplash.com/random'
    });

    let HandleInputChange = useCallback((event)=>{
        const {name, value} = event.target;

        setProduct((old)=>({
            ...old,
            [name] : value
        }))
    })

    let AddProduct = (event)=>{
        event.preventDefault();
        axios.post("http://localhost:2000/products", product)
        .then(res=>{
            setProduct(res.data)
        })
        .catch(error => console.log(error))
        Navigate("/products")
    }

    return (
        <div>
            <h1>Add New Product</h1>
            <form action="" onSubmit={AddProduct}>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Name" name="name" value={product.name} onChange={HandleInputChange}/>
                    <label for="floatingInput">Product Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Image" name="imgUrl" value={product.imgUrl} onChange={HandleInputChange}/>
                    <label for="floatingInput">Product Image</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingInput" placeholder="Price" name="price" value={product.price} onChange={HandleInputChange}/>
                    <label for="floatingInput">Product Price</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingInput" placeholder="Quantity" name="quantity" value={product.quantity} onChange={HandleInputChange}/>
                    <label for="floatingInput">Product Quantity</label>
                </div>
                <button className="btn btn-dark">Submit</button>
            </form>

        </div>
    )
}
