import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import ProductList from './Productlist';
import axios from 'axios';


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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signup', formData);
      alert(response.data); // Success message from the server
    } catch (error) {
      console.error('Error saving user:', error);
      alert('Failed to save user');
    }
  };

  return (
    <div className='background'>
      <div class="sticky">
       <ul class="horizontal">
          <img src="Direction.jpg" className="logoo" alt="web logo" />
          <h5 style={{float: 'left', color: 'black', padding: '10px 5px'}}>Sw <span style={{fontSize: '12px'}}>-more than just a blog.</span></h5>
          <li style={{float: 'right', color: 'black'}}>ENG<a href="mailto:ekeledochidiebere@gmail.com"><i class="fa-solid fa-envelope" style={{fontSize: '22px', paddingTop: '5px'}}></i></a></li>
       </ul>
      </div>
      
      <video autoPlay loop muted playsInline className="video-background">
        <source src="videobg.mp4" type="video/mp4" />
      </video>

      <div className="container-fluid">
        <div className="welcome col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <h3>Welcome to our website!</h3>
          <form onSubmit={handleSubmit}>
            <p className='write'>Please Enter your name</p>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              style={{padding: '5px', borderRadius: '5px', border: '0px'}}
            />
            <button type="submit" style={{marginLeft: '15px', backgroundColor: '#D8BFD8', padding: '5px 15px', fontSize: '20px'}}>Submit <i class="fas fa-paper-plane"></i></button>
          </form>
          <br />
          <p className='write'>
            Hi {formData.name}, We have designed this website to fit some of your interests. Browse
            through our content, select the content of your interest, and add to your timeline.
            Enjoy the view {formData.name}!
          </p>
          <button onClick={navigateToProductList} className='getstarted'>Get Started</button>
        </div>

        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" style={{ float: 'left', padding: '50px' }}>
          <img src="AI.jpg" className="logo" alt="AI logo" />
        </div>
      </div>

      <div className='footer-container'>
        <p style={{fontWeight: 'bold'}}>Powered by CHIDI</p>
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
