import React from 'react';
import useFetch from '../Fetch';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Products = () => {
    const { data: products, loading, refetch } = useFetch("http://localhost:2000/products");

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:2000/products/${id}`)
            .then(response => {
                console.log(response);
                refetch();
            })
            .catch(error => console.log(error))
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1 className='text-center mb-3'>Products Component</h1>
            <hr />
            <div className="row mt-3 mb-3">
                {products.map((product) => (
                    <div className="col-12 col-md-4 mb-3" key={product.id}>
                        <div className="card" style={{ minHeight: '330px' }}>
                            <img src={product.imgUrl} className="card-img-top" alt="..." style={{ height: '200px' }} />
                            <div className="card-body">
                                <h5 className="card-title text-center">{product.name}</h5>
                                <p className="card-text">{product.price}$</p>
                                <p className="card-text">
                                    {product.quantity === 0 ? (
                                        <p className='bg-danger p-2 text-light rounded text-center'>out of stock</p>
                                    ) : (
                                        <p>{product.quantity}</p>
                                    )}
                                </p>
                            </div>
                            <div className='d-flex justify-content-evenly align-items-center'>
                                <button className='btn btn-danger w-25 m-2' onClick={() => deleteProduct(product.id)}>Delete</button>
                                <Link className='btn btn-dark w-50 m-2' to={`/products/${product.id}`}>Show Details</Link>
                                <Link className='btn btn-success w-25 m-2' to={`/edit/${product.id}`}>Edit</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;