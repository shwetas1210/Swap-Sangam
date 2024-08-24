import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';
import Navbar from './Navbar';
import Footer from './Footer';

const AddProduct = ({ authUser }) => {
  const [productDetails, setProductDetails] = useState({
    price: '',
    category: '',
    image: '',
    title: '',
    description: '',
    seller: authUser._id,
    phone: '',
    date: '',
  });

  const [flag, setFlag] = useState(false);
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:4001/product/addproduct/${authUser._id}`, productDetails);
      console.log('Book added:', response.data);
      setFlag((prev) => !prev);
      setProductDetails({
        price: '',
        category: '',
        image: '',
        title: '',
        description: '',
        seller: authUser._id,
        phone: '',
        date: '',
      });
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  useEffect(() => {
    const getMyProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:4001/product/getproducts/${authUser._id}`);
        console.log('Products retrieved:', response.data);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    getMyProducts();
  }, [authUser, flag]);

  return (
    <>
      <Navbar />
     
     
      <br />
      <div className='flex items-center justify-center'>
      <div className='flex items-center justify-center w-4/5 '> {/* Adjusted width to 80% of the screen */}
        <div className="card border-purple-500 bg-base-100 shadow-xl scale-90 hover:scale-92 dark:bg-slate-900 dark:text-white border justify-center align-center p-8 border-pink-500 ">
          <h2 className='text-2xl md:text-4xl text-purple-500 text-center mb-4'>Add a New Book</h2>
          <br/>
          <br/>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className='text-md md:text-xl text-purple-500'>Price :</label>
              <input
                type="number"
                name="price"
                value={productDetails.price}
                onChange={handleChange}
                required
                className="input ml-3"
              />
            </div>
            <div className="mb-4">
              <label className='text-md md:text-xl text-purple-500'>Category :</label>
              <input
                type="text"
                name="category"
                value={productDetails.category}
                onChange={handleChange}
                required
                className="input ml-3"
              />
            </div>
            <div className="mb-4">
              <label className='text-md md:text-xl text-purple-500'>Image URL :</label>
              <input
                type="text"
                name="image"
                value={productDetails.image}
                onChange={handleChange}
                required
                className="input ml-3"
              />
            </div>
            <div className="mb-4">
              <label className='text-md md:text-xl text-purple-500'>Title :</label>
              <input
                type="text"
                name="title"
                value={productDetails.title}
                onChange={handleChange}
                required
                className="input ml-3"
              />
            </div>
            <div className="mb-4">
              <label className='text-md md:text-xl text-purple-500'>Description :</label>
              <input
                type="text"
                name="description"
                value={productDetails.description}
                onChange={handleChange}
                required
                className="input ml-3"
              />
            </div>
            <div className="mb-4">
              <label className='text-md md:text-xl text-purple-500'>Preferred contact number :</label>
              <input
                type="number"
                name="phone"
                value={productDetails.phone}
                onChange={handleChange}
                required
                className="input ml-3"
                
              />
            </div>
            <div className="mb-4">
              <label className='text-md md:text-xl text-purple-500'>Date :</label>
              <input
                type="date"
                name="date"
                value={productDetails.date}
                onChange={handleChange}
                required
                className="input ml-3"
          
              />
            </div>
            <button type="submit" className="btn bg-purple-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-purple-700 duration-200">Add Product</button>
          </form>
          <h2 className='text-2xl md:text-4xl text-purple-500 text-center mt-8 mb-4'>My Products</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 px-2 py-2'>
            {products.map((product) => (
              <Cards key={product.id} authUser={authUser} item={product} />
            ))}
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default AddProduct;