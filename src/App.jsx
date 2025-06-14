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
    setSignUpError('');
    setSignUpSuccess('');
    if (!authData.username || !authData.password) {
      setSignInError('Username and password are required');
      return;
    }
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
    setSignInError('');
    setSignUpSuccess('');
    if (!authData.username || !authData.password) {
      setSignUpError('Username and password are required');
      return;
    }
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
        <source src="videot.mp4" type="video/mp4" />
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
          <h3>Sign In</h3>
          <form>
            <p className='write'>Please enter your username and password. <span style={{ fontSize: '13px', fontWeight: 'lighter'}}>Don't have an account?, click the sign up button.</span></p>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={authData.username}
              onChange={handleAuthChange}
              style={{ padding: '5px', borderRadius: '5px', border: '0px', marginBottom: '10px', fontSize: '20px', width: '50%' }}
              required
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={authData.password}
              onChange={handleAuthChange}
              style={{ padding: '5px', borderRadius: '5px', border: '0px', marginBottom: '10px', fontSize: '20px', width: '50%' }}
              required
            />
            <br />
            <button
              type="button"
              style={{
                marginRight: '15px',
                backgroundColor: '#D8BFD8',
                padding: '5px 15px',
                fontSize: '18px',
                borderRadius: '5px'
              }}
              onClick={handleSignIn}
            >
              Sign In
              <i class="fa fa-user" aria-hidden="true" style={{paddingLeft:'2px'}}></i>
            </button>
            <button
              type="button"
              style={{
                backgroundColor: '#D8BFD8',
                padding: '5px 15px',
                fontSize: '18px',
                borderRadius: '5px'
              }}
              onClick={handleSignUp}
            >
              Sign Up
            </button>
            {signInError && (
              <div className="alert alert-danger mt-2" role="alert">
                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                {signInError}
              </div>
            )}
            {signUpError && (
              <div className="alert alert-danger mt-2" role="alert">
                <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                {signUpError}
              </div>
            )}
            {signUpSuccess && (
              <div className="alert alert-success mt-2" role="alert">
                <i className="fa fa-check" aria-hidden="true"></i>
                {signUpSuccess}
              </div>
            )}
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