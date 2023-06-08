import React, { useState } from 'react';
import "./Home.css";
import {
  FormGroup,
  TextArea,
} from "@walmart-web/livingdesign-components";
const FormPage = () => {
  const [productData, setProductData] = useState({
    image: null,
    price: '',
    condition: '',
    question1: '',
    question2: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setProductData((prevData) => ({ ...prevData, image: file }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', productData.image);
    formData.append('price', productData.price);
    formData.append('condition', productData.condition);
    formData.append('question1', productData.question1);
    formData.append('question2', productData.question2);
    console.log(formData)
    // fetch('http://localhost:8080/recom/products/addProduct', {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // Handle the response from the API
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     // Handle any errors that occurred during the API request
    //     console.error(error);
    //   });
  };

  return (
    <div className='main-cont'>
      <h2 className='seller-heading'><b>Tell us more about your product</b></h2>
      <form className='box-container' onSubmit={handleSubmit}>
        <div >
          <label >Desired Price:</label><br />
          <textarea className="text-area" type="text" maxLength="500" required onChange={handleInputChange} />
        </div>
        <div>
          <label>Condition:</label><br />
          <textarea className="text-area" type="text" maxLength="500" required onChange={handleInputChange} />
        </div>
        <div>
          <label>Question 1:</label><br />
          <textarea className="text-area" type="text" maxLength="500" required onChange={handleInputChange} />
        </div>
        <div>
          <label>Question 2:</label><br />
          <textarea className="text-area" type="text" maxLength="500" required onChange={handleInputChange} />
        </div>
        <div>
          <label>Image of the product:</label><br />
          <input type="file" name="image" onChange={handleImageUpload} required/>
        </div>
        <button className="submit-button" type="submit"><b>Submit</b></button>
      </form>
    </div>
  );
};

export default FormPage;
