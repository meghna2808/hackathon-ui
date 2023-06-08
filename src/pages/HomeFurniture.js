import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import jacket3 from "../assets/laptop.png";
import "./Home.css";
import { Link } from 'react-router-dom';
const HomeFurniture = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);
    // const category = "";
    const fetchData = async () => {
        try {
            const category = encodeURIComponent("Home & Furniture");
            const response = await axios.get(`http://localhost:8080/recom/categories/${category}/products/`);

            // const response = await axios.get(`http://localhost:8080/recom/categories/Home & Furniture/products/`);
            // console.log(response);
            // console.log(Object.keys(response.data));
            setData(response.data);
            // console.log(data)
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };
    return (
        <div className='modal-bg'>
            <h1 className='heading'><b>Home & Furniture</b></h1>
            {data ? (
                <div className="image-grid">
                    {data.map(product => (
                        <Link to={`/product/${product.productName}`}
                            key={product.productName} style={{ margin: '20px', textDecoration: 'none' }}>
                            <div className="image-item" key={product.productName} >

                                {/* <li> */}
                                <img src={product.image != null ? product.image : jacket3} alt={product.productName} width="100%" height="100" style={{
                                    display: "block",
                                    maxHeight: 340,
                                    objectFit: "cover",
                                    objectPosition: "top center"
                                }} />
                                <div className="image-info">
                                    <p className="product-name-category">{product.productName}</p>
                                    <p className="price">{product.price}</p>
                                </div>
                                {/* </li> */}
                            </div>
                        </Link>

                    ))}
                </div>

            ) : (
                <p className='spinner'><b>Loading data...</b></p>
            )}
        </div >
    );
};

export default HomeFurniture;
