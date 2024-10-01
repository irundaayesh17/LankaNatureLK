import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import './index.css';
import LandingPage from './Pages/LandingPage';
import Header from './Components/Header';
import Products from './Pages/Products'; // Assuming you have a Products component
import CartPage from './Pages/CartPanel';

function AppWrapper() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <Header />} {/* Only show Header if not on the LandingPage */}
      <div className='mt-10'>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
