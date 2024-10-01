import React from 'react';
import Cart from '../Components/Cart'; // Import the Cart component
import { Link } from 'react-router-dom';

const CartPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-primary">
            <div className="flex-grow flex flex-col items-center justify-start">
                <div className='items-start'>
                    <Cart />
                </div>
                <div className="flex-grow justify-center mt-2">
                    <Link to="/products">
                        <button className="bg-white text-black px-4 py-2 rounded-lg w-96 hover:bg-primary hover:border-white hover:text-white transition duration-200">
                            Coming Soon
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartPage;