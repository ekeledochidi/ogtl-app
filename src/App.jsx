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

  const [signUpData, setSignUpData] = useState({ username: '', password: '' });
  const [signUpError, setSignUpError] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState('');

  const handleSignUpChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setSignUpError('');
    setSignUpSuccess('');
    try {
      const response = await axios.post('http://localhost:5000/signup', signUpData);
      if (response.data.success) {
        setSignUpSuccess('Sign up successful! You can now sign in.');
        setSignUpData({ username: '', password: '' });
      } else {
        setSignUpError('Sign up failed. Try a different username.');
      }
    } catch (error) {
      setSignUpError('Sign up failed. Username may already exist.');
    }
  };

  return (
    <div className='background'>
      <div class="sticky">
       <ul class="horizontal">
          <img src="images/Direction.jpg" className="logoo" alt="web logo" />
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
          <br />
          <p className='write'>
            Hi {signUpData.username}, We have designed this website to fit some of your interests. Browse
            through our content, select the content of your interest, and add to your timeline.
            Enjoy the view {signUpData.username}!
          </p>
          <h3>Sign Up</h3>
          <form onSubmit={handleSignUp}>
            <p className='write'>Please enter your username and password</p>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={signUpData.username}
              onChange={handleSignUpChange}
              style={{padding: '5px', borderRadius: '5px', border: '0px', marginBottom: '10px'}}
              required
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signUpData.password}
              onChange={handleSignUpChange}
              style={{padding: '5px', borderRadius: '5px', border: '0px', marginBottom: '10px'}}
              required
            />
            <br />
            <button type="submit" style={{marginRight: '15px', backgroundColor: '#D8BFD8', padding: '5px 15px', fontSize: '20px', borderRadius: '5px'}}>Sign Up</button>
            <button type="button" className='getstarted' onClick={navigateToProductList}>Get Started</button>
            {signUpError && <p style={{color: 'red'}}>{signUpError}</p>}
            {signUpSuccess && <p style={{ color: 'green' }}>{signUpSuccess}</p>}
          </form>
        </div>

        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" style={{ float: 'left', padding: '50px' }}>
          <img src="images/AI.jpg" className="logo" alt="AI logo" />
        </div>
      </div>

      <div className='footer-container'>
        <p style={{fontWeight: 'bold'}}>Switch</p>
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
