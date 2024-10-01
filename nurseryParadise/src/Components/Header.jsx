import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Cart from '../Components/Cart'; // Import the Cart component

export default function Header() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const cartCount = useSelector((state) => state.cart.cartCount); // Get items from cart

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen); // Toggle the cart panel
    };

    return (
        <header className="bg-green-500 p-4 fixed top-0 left-0 w-full z-50 flex justify-between items-center">
            <div className="text-white text-2xl font-bold ml-6">
                <Link to="/">LankaNatureLK</Link>
            </div>
            <nav className="flex space-x-4 text-lg">
                <Link to="/products" className="text-white font-bold hover:underline">
                    Products
                </Link>
            </nav>
            <div className="relative flex items-center text-white mr-20">
                <Link to="/cart" className="flex items-center"> {/* Change button to Link */}
                    <FaShoppingCart size={24} />
                    <span className="ml-2">{cartCount}</span> {/* Display cart count */}
                </Link>
            </div>
        </header>
    );
}
