// src/ProductCard.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';


const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  // Get items from cart to check if the product is already added
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some(item => item.id === product.id); // Check if the product is in the cart

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col items-center mr-7 bg-slate-50">
      <img src={product.image} alt={product.title} className="h-40 w-40 object-cover mb-4" />
      <h2 className="text-lg font-semibold mb-2 text-black">{product.title}</h2>
      <p className="text-xl text-green-500 mb-4 font-semibold">${product.price}</p>
      <button 
        onClick={handleAddToCart} 
        className={`py-2 px-4 rounded transition ${isInCart ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500 hover:bg-green-700'}`} 
        disabled={isInCart} // Disable the button if the product is already in the cart
      >
        {isInCart ? 'Added to Cart' : 'Add to Cart'} {/* Change button text based on state */}
      </button>
    </div>
  );
};

export default ProductCard;
