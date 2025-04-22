import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import ProductList from './ProductList';

function App() {
  const navigate = useNavigate();

  const navigateToProductList = () => {
    navigate('/product-list');
  };

  const [formData, setFormData] = useState({
    name: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert(`Hello ${formData.name}, welcome to our website!`);
  };

  return (
    <div className="container-fluid">
      <div className="landing-page">
        <div className="col-lg-6 col-sm-12 col-6" style={{ float: 'left', padding: '200px' }}>
          <h4>Welcome to our website!</h4>
          <form onSubmit={handleSubmit}>
            <p>Please Enter your name</p>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
          <br />
          <p>
            Hi {formData.name}, We have designed this website to fit some of your interests. Browse
            through our content, select the content of your interest, and add to your timeline.
            Enjoy the view {formData.name}!
          </p>
          <button onClick={navigateToProductList}>Get Started</button>
        </div>

        <div className="col-lg-6 col-sm-12" style={{ float: 'left', padding: '50px' }}>
          <img src="technology.jpg" className="logo" alt="Vite logo" />
        </div>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product-list" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;