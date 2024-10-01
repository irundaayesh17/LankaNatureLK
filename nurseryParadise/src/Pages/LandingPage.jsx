import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundImage from '../assets/bg1.jpg';

export default function LandingPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Ensure it covers the full viewport height
        width: '100vw', // Ensure it covers the full viewport width
      }}
      className="mt-[-80px] ml-[-165px] size-2 relative"
    >
      <div className="absolute inset-0 bg-black opacity-70"></div> {/* Dark overlay */}
      <div className="relative grid grid-cols-2 gap-1 h-full">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold text-green-500 border-2 border-white">LankaNatureLK</h1>
          <Link to="/products">
            <button className="bg-green-500 hover:bg-green-600 transition duration-300 hover:border-white hover:text-white py-2 px-4 mt-7 w-48 text-white font-bold text-xl">
              SHOP
            </button>
          </Link>
        </div>
        <div className="flex flex-col justify-center px-8 mr-10">
          <p className="text-center font-semibold text-xl">LankaNatureLK: Your Green Haven</p>
          <p className="text-justify font-medium text-lg mt-7">
            Welcome to Paradise Nursery, where nature meets elegance! We specialize in providing a wide selection of vibrant houseplants that bring life and beauty to your home. Our passion for plants is reflected in our carefully curated collection, featuring everything from low-maintenance succulents to lush tropical foliage.
            <br />
            At Paradise Nursery, we believe that every home deserves a touch of greenery. Our team of plant enthusiasts is dedicated to helping you find the perfect plants that suit your space and lifestyle. We prioritize quality, sourcing our plants from trusted growers to ensure that you receive healthy and thriving specimens.
          </p>
        </div>
      </div>
    </div>
  );
}