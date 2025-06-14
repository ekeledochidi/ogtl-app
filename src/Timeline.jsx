import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from './CartSlice';
import Footer from './Footer';

const Timeline = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="timeline-container">
      <div className="navbar">
        <ul className="navbar-list">
          <li style={{fontWeight:'bold'}}>Switch</li>
          <li>About</li>
          <li style={{float:'right', backgroundColor:'dodgerblue'}}>Timeline<i class="fa fa-folder" aria-hidden="true" style={{paddingLeft: '5px'}}></i></li>
        </ul>
      </div>

      <video autoPlay loop muted playsInline className="videobackground container-fluid">
        <source src="videow.mp4" type="video/mp4" />
      </video>

      <div className="timeline-content">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            {/* Display Category */}
            <h3 style={{textAlign: 'center', fontFamily: 'fantasy', fontWeight: 'lighter'}}>Category</h3>
            <hr/>
            {item.category.map((category, catIndex) => (
              <div key={catIndex} className='container-fluid' style={{padding:"10px 40px"}}>
                <div className='row gx-4'>
                  <img src={category.image} alt={category.topic} className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'/>
                  <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                    <h4 style={{backgroundColor:'dimgray', borderRadius: '6px', textAlign: 'center', padding: '7px 20px', marginBottom: '30px'}}>{category.topic}</h4>
                    <p>{category.description}</p>
                    <br/><br/>
                    <button onClick={() => dispatch(removeItem(item))}>Remove category</button>
                    <a href={category.image} download="custom-filename.jpg" style={{paddingLeft: '20px'}}>
                      <button type="button">Download Image</button>
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Display News */}
            <div className='container-fluid'>
                <div className="row gx-4 p-3">
                  <h3>News</h3>
                  {item.news.map((news, newsIndex) => (
                    <div key={newsIndex} className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                      
                      <img src={news.image} alt={news.name} width={600}/>
                      <h4>{news.name}</h4>
                      <p>{news.description}</p>
                      <a href={news.image} download="news-filename.jpg">
                        <button type="button">Download Image</button>
                      </a>
                    </div>
                  ))}
                </div>
            </div>

          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Timeline;