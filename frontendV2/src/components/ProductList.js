import React from 'react';
//import { products } from '../products';
import { useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';

const imagenes = require.context('../assets', true);


export const ProductList = ({allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal}) => {

    const [products, setProducts] = useState([]);


    const getProducts = () => {
        Axios.get("http://localhost:3005/licores").then((response) => {
            setProducts(response.data);
            console.log(response.data[0].image_url);
        })
    }

    useEffect(() => {
        getProducts();
    }, [])

   
    const onAddProduct = (product) => {

        if (allProducts.find(item => item.licor_id === product.licor_id)) {
            const products = allProducts.map(item => item.licor_id === product.licor_id 
                ? {...item, quantity: item.quantity + 1}
                : item
            );

            setTotal(total + product.price * product.quantity);
            setCountProducts(countProducts + product.quantity)
            return setAllProducts([...products]);
        }

        setTotal(total + product.price * product.quantity);
        setCountProducts(countProducts + product.quantity);
        setAllProducts([...allProducts, product]);
        
    }


    return (
        
        <div className='container-items'>
            {   
                
                products.map( product => (
                    <div className='item' key={product.licor_id}>
                        <figure>
					        <img src = {imagenes(`./${product.image_url}`)} alt = {product.product_name}/>
				        </figure>
                        <div className="info-product">
                            <h2>{product.product_name}</h2>
                            <p className="price">${product.price}</p>
                            <button className="btn-add-cart" onClick={() => onAddProduct(product)}>Añadir al carrito</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}