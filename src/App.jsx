import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import ProductList from './ProductList';
import Timeline from './Timeline';
import axios from 'axios';

function App() {
  const navigate = useNavigate();

  const navigateToProductList = () => {
    navigate('/product-list');
  };

  // Shared state for both sign in and sign up
  const [authData, setAuthData] = useState({ username: '', password: '' });
  const [signInError, setSignInError] = useState('');
  const [signUpError, setSignUpError] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState('');

  // Handle input changes for both actions
  const handleAuthChange = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  // Handle Sign In
  const handleSignIn = async (e) => {
    e.preventDefault();
    setSignInError('');
    try {
      const response = await axios.post('http://localhost:5000/signin', authData);
      if (response.data.success) {
        alert('Sign in successful!');
        navigateToProductList();
      } else {
        setSignInError('Invalid username or password');
      }
    } catch (error) {
      setSignInError('Sign in failed');
    }
  };

  // Handle Sign Up
  const handleSignUp = async (e) => {
    e.preventDefault();
    setSignUpError('');
    setSignUpSuccess('');
    try {
      const response = await axios.post('http://localhost:5000/signup', authData);
      if (response.data.success) {
        setSignUpSuccess('Sign up successful! You can now sign in.');
        setAuthData({ username: '', password: '' });
      } else {
        setSignUpError('Sign up failed. Try a different username.');
      }
    } catch (error) {
      setSignUpError('Sign up failed. Username may already exist.');
    }
  };

  return (
    <div className='background'>
      <div className="sticky">
        <ul className="horizontal">
          <img src="images/Direction.jpg" className="logoo" alt="web logo" />
          <h5 style={{ float: 'left', color: 'black', padding: '10px 5px' }}>
            Sw <span style={{ fontSize: '12px' }}>-more than just a blog.</span>
          </h5>
          <li style={{ float: 'right', color: 'black' }}>
            <button type="button" className='getstarted' onClick={navigateToProductList}>Get Started</button>
          </li>
        </ul>
      </div>

      <video autoPlay loop muted playsInline className="video-background">
        <source src="videobg.mp4" type="video/mp4" />
      </video>

      <div className="container-fluid">
        <div className="welcome col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <h3>Welcome to our website!</h3>
          <br />
          <p className='write'>
            Hi {authData.username}, We have designed this website to fit some of your interests. Browse
            through our content, select the content of your interest, and add to your timeline.
            Enjoy the view {authData.username}!
          </p>
          <h3>Sign In / Sign Up</h3>
          <form>
            <p className='write'>Please enter your username and password. <span style={{ fontSize: '13px' }}>Don't have an account?, click the sign up button.</span></p>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={authData.username}
              onChange={handleAuthChange}
              style={{ padding: '5px', borderRadius: '5px', border: '0px', marginBottom: '10px' }}
              required
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={authData.password}
              onChange={handleAuthChange}
              style={{ padding: '5px', borderRadius: '5px', border: '0px', marginBottom: '10px' }}
              required
            />
            <br />
            <button
              type="button"
              style={{
                marginRight: '15px',
                backgroundColor: '#D8BFD8',
                padding: '5px 15px',
                fontSize: '20px',
                borderRadius: '5px'
              }}
              onClick={handleSignIn}
            >
              Sign In
            </button>
            <button
              type="button"
              style={{
                backgroundColor: '#B0E0E6',
                padding: '5px 15px',
                fontSize: '20px',
                borderRadius: '5px'
              }}
              onClick={handleSignUp}
            >
              Sign Up
            </button>
            {signInError && <p style={{ color: 'red' }}>{signInError}</p>}
            {signUpError && <p style={{ color: 'red' }}>{signUpError}</p>}
            {signUpSuccess && <p style={{ color: 'green' }}>{signUpSuccess}</p>}
          </form>
        </div>

        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" style={{ float: 'left', padding: '50px' }}>
          <img src="images/AI.jpg" className="logo" alt="AI logo" />
        </div>
      </div>

      <div className='footer-container'>
        <p style={{ fontWeight: 'bold' }}>Switch</p>
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
        <Route path="/Timeline" element={<Timeline />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;