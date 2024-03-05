import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <Link class="navbar-brand text-white" to="/">React Lab</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link class="nav-link active text-white" aria-current="page" to="/home">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-white" to="/products">Products</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-white" to="/add">Add product</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-white" to="/comments">Comments</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-white" to="/commentstable">Comments Table</Link>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    )
}
