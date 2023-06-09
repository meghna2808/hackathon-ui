import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import jacket3 from "../assets/laptop.png";
import sports from "../assets/sports.png";
import { Link } from 'react-router-dom';
import { Spinner, Button } from "@walmart-web/livingdesign-components";
import "./Home.css";
const Recommerce = () => {
  const [data, setData] = useState(null);
  const[photo,setPhoto]=useState(jacket3);
  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/recom/categories/products/');
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };
  // function addCategoryImage(category) {
  //   let imageSrc = jacket3;
  
  //   switch (category) {
  //     case "Sports & Fitness":
  //       imageSrc = sports;
  //       break;
  //     case 'category2':
  //       imageSrc = 'path/to/category2-image.jpg';
  //       break;
  //     case 'category3':
  //       imageSrc = 'path/to/category3-image.jpg';
  //       break;
  //     // Add more cases for other categories as needed
  //     default:
  //       imageSrc = sports;
  //   }
  
  //   return imageSrc;
  // }
  const handleImageError = (event) => {
    event.target.src = ''; // Replace with the fallback image URL or any placeholder image
  };

  return (
    <div className='modal-bg'>
      {/* <div className='button-container'> */}
      <Link
        to='/formPage'
        className='button-container'
      >
        <Button className='blue-button'><b>Want to sell your product</b></Button>
        {/* <Button className='blue-botton'>View All</Button> */}
      </Link>

      {/* </div> */}
      {data ? (
        <div>
          {Object.keys(data).map((category, index) => (
            <div key={category}>
              <div style={{ overflowX: 'auto' }}>
                <div style={{ display: 'flex' }}>
                  <div>
                  <p className="category-cont"><b>{category}</b></p>
                    <div className="image-cnt">
                    <Link
                    to={{
                      pathname: `/${category}`,
                      state: {
                        category: category,
                      }
                    }}
                    className='md:flex hidden  items-center flex-1  p-3 rounded-full'
                  >
                    <Button className='view-options'>View All</Button>
                  </Link>
                    </div>
                      
                  </div>
                  {data[category].map(product => (
                    <div>
                    {product.imageUrls &&(<div key={product.productName} style={{ margin: '20px',padding:"" }}>

                    <div className="image-cnt">
                      <img className="image-cnt"src={product.imageUrls} alt={product.productName} width="100%" height="100%" onError={handleImageError} />
                      </div>
                    <p className="product-name">{product.productName}</p>
                    <p className="price">{product.price}</p>
                  </div>)}
                  </div>
                    // <div key={product.productName} style={{ margin: '20px',padding:"" }}>

                    //   <div className="image-cnt">
                    //     <img className="image-cnt"src={product.imageUrls!=null?product.imageUrls:jacket3} alt={product.productName} width="100%" height="100%" onError={handleImageError} />
                    //     </div>
                    //   <p className="product-name">{product.productName}</p>
                    //   <p className="price">{product.price}</p>
                    // </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className='spinner'><b>Loading data...</b></p>
      )}
    </div>

  );
};

export default Recommerce;