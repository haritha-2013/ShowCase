import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = ({ searchTerm }) => {
    const [products, setProducts] = useState([]);


    //.Using Axios, Install axios
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching the products:', error);
            });
    }, []);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="product-list">
            {filteredProducts.map(product => (
                <div key={product.id} className="product">
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Products;


