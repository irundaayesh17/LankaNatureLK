import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart, Descrement, incrementQuantity } from '../store/cartSlice'; // Import addToCart action
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function Cart() {
    const cartItems = useSelector((state) => state.cart.items); // Get items from cart state
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeFromCart(id)); // Dispatch action to remove item from cart
    };

    const handleIncrement = (id) => {
        dispatch(incrementQuantity(id)); // Dispatch action to add item (increment)
    };

    const handleDecrement = (id) => {
        dispatch(Descrement(id)); // Dispatch action to remove item (decrement)
    };


    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2); // Calculate total price

    return (
        <div className="w-[390px] p-4 bg rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-white">Your Cart • ${totalPrice}</h2>
            {cartItems.length === 0 ? (
                <p className='text-lg font-normal'>Your cart is empty.</p>
            ) : (
                <ul className="space-y-4 mt-7">
                    {cartItems.map((item) => (
                        <li key={item.id} className="flex justify-between items-center">
                            <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded" />
                            <div className="flex flex-col">
                                <span className="font-bold text-white">{item.title}</span>
                                <span className="text-gray-300">${item.price}</span>
                            </div>
                            <div className="flex items-center">
                                <button
                                    onClick={() => handleDecrement(item.id)}
                                    className="text-white hover:bg-gray-200 rounded-full p-1 mr-1"
                                >
                                    <FaMinus />
                                </button>
                                <span className="mx-2 text-white">{item.quantity}</span> {/* Display item quantity */}
                                <button
                                    onClick={() => handleIncrement(item.id)}
                                    className="text-white hover:bg-gray-200 rounded-full p-1 ml-1"
                                >
                                    <FaPlus />
                                </button>
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                                >
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
