import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import jacket3 from "../assets/laptop.png";
import "./Home.css"
import {
    Button,
    ButtonGroup,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia
} from "@walmart-web/livingdesign-components";
const Electronics = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);
    const category = "Electronics";
    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/recom/categories/Electronics/products/`);
            // console.log(response);
            // console.log(Object.keys(response.data));
            setData(response.data);
            // console.log(data[0])
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };
    return (
        <div className='modal-bg'>
            <h1 className='heading'><b>Electronics</b></h1>
            {data ? (
                <div className="image-grid">
                    {data.map(product => (
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
                    ))}
                </div>

            ) : (
                <p className='spinner'><b>Loading data...</b></p>
            )}
        </div >
    );
};

export default Electronics;
