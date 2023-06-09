import React, { useState } from 'react';
import "./Home.css";
import {
  Button
} from "@walmart-web/livingdesign-components";
function ProductForm() {
  const [formData, setFormData] = useState({
    productId: '',
    productName: '',
    price: '',
    sellertype: '',
    sellerUsername: '',
    sellerName: '',
    category: '',
    images: [],
    manufacturingDate: '',
    iforiginalreceiptAvailable: false,
    brandName: '',
    originalPurchasedDate: '',
    sellerLocation: '',
    condition: '',
    shipping: '',
    itemDesc: ''
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    let fieldValue;

    if (type === 'checkbox') {
      fieldValue = e.target.checked;
    } else if (type === 'file') {
      fieldValue = Array.from(e.target.files);
    } else if (name === 'sellerLocation') {
      fieldValue = {
        ...formData.sellerLocation,
        [e.target.dataset.field]: value,
      };
    } else {
      fieldValue = value;
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: fieldValue,
    }));
  };
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };


  const handleSubmit = (e) => {
    openPopup();
    
    // e.preventDefault();


    // // Make API call to post the form data
    // // Example using fetch API:
    // fetch('http://localhost:8080/recom/products/addProduct', {
    //   method: 'POST',
    //   body: JSON.stringify(formData),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('Form data submitted:', data);
    //     // Handle the response from the API
    //   })
    //   .catch((error) => {
    //     console.error('Error submitting form data:', error);
    //     // Handle errors
    //   });
  };
 

  return (
    <div className='main-cont'>
      <h2 className='seller-heading'><b>Tell us more about your product</b></h2>
      <form className='box-container' onSubmit={handleSubmit}>
        <div className='form-cont'>
          {/* <label>Product Id:</label><br /> */}
          <input className='text-area' 
            type="text"
            name="productId"
            placeholder="Enter Product ID:"
            value={formData.productId}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-cont'>
          {/* <label>Product Name</label><br /> */}
          <input className='text-area'
            type="text"
            name="productName"
            placeholder="Enter Product Name"
            value={formData.productName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-cont'>
          {/* <label>Price</label><br /> */}
          <input className='text-area'
            type="text"
            name="price"
            placeholder="Enter Price:"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-cont'>
          {/* <label>Seller Type</label><br /> */}
          <input className='text-area'
            type="text"
            name="sellertype"
            placeholder="Enter seller type"
            value={formData.sellertype}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-cont'>
          {/* <label>Seller user name</label><br /> */}
          <input className='text-area'
            type="text"
            name="sellerUsername"
            placeholder="Enter seller user name"
            value={formData.sellerUsername}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-cont'>
          {/* <label>Seller Name</label><br /> */}
          <input className='text-area'
            type="text"
            name="sellerName"
            placeholder="Enter seller name"
            value={formData.sellerName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-cont'>
          {/* <label>Category</label><br /> */}
          <input className='text-area'
            type="text"
            name="category"
            placeholder="Enter Category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-cont'>
          <p>Shipping</p>
          <label className='checkbox'>
            <input className='checkbox'
              type="radio"
              name="shipping"
              value="0"
              checked={formData.shipping === "0"}
              onChange={handleChange}
            />
            0
          </label>

          <label>
            <input
              type="radio"
              name="shipping"
              value="1"
              checked={formData.shipping === "1"}
              onChange={handleChange}
            />
            1
          </label>
        </div>
        <div className='form-cont'>
          <label>Images of the product:</label><br />
          <input
            type="file"
            name="images"
            multiple
            onChange={handleChange}
          />

        </div>
        <div className='form-cont'>
          <label htmlFor="condition">Condition:</label><br />
          <select className='text-box' id="condition" name="condition" value={formData.condition} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className='form-cont'>
          <label>Manufacturing date:</label><br />
          <input className='text-area'
            type="date"
            name="manufacturingDate"
            placeholder="Manufacturing date"
            value={formData.manufacturingDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-cont'>
          <label>
            Original Receipt Available:
            <input
              type="checkbox"
              name="iforiginalreceiptAvailable"
              checked={formData.iforiginalreceiptAvailable}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='form-cont'>
          {/* <label>Brand name</label><br /> */}
          <input className='text-area'
            type="boolean"
            name="brandName"
            placeholder="Enter Brand Name"
            value={formData.brandName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <div className='form-cont'>
            {/* <label>Item description</label><br /> */}
            <input className='text-area'
              type="text"
              name="itemDesc"
              placeholder="Enter item description"
              value={formData.itemDesc}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className='form-cont'>
          <label>Original purchase date</label><br />
          <input className='text-area'
            type="date"
            name="originalPurchasedDate"
            placeholder="Manufacturing date"
            value={formData.originalPurchasedDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-cont'>
          {/* <label>Seller latitude</label><br /> */}
          <input className='text-area'
            type="text"
            name="sellerLocation"
            data-field="latitude"
            placeholder="Enter seller Latitude"
            value={formData.sellerLocation.latitude}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-cont'>
          {/* <label>Seller longitude</label><br /> */}
          <input className='text-area'
            type="text"
            name="sellerLocation"
            data-field="longitude"
            placeholder="Enter seller Longitude"
            value={formData.sellerLocation.longitude}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-cont'>
          <Button className="submit-button" type="submit" onClick={openPopup}>Submit</Button>
          {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2><b>The suggested price for your product is:</b></h2>
            <p className='price-cont'>17$</p>
            <div className="btn-class">
            <Button className="view-options"onClick={closePopup}>Override</Button>
            <Button className="view-options"onClick={closePopup}>Close</Button>
            </div>
          </div>
        </div>
      )}
        </div>
      </form>
    </div>
  );
}

export default ProductForm;