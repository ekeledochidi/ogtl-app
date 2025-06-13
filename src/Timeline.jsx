import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from './CartSlice';

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

      <div className="timeline-content">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            {/* Display Category */}
            <h3>Category</h3>
            {item.category.map((category, catIndex) => (
              <div key={catIndex}>
                <h4>{category.topic}</h4>
                <img src={category.image} alt={category.topic} />
                <p>{category.description}</p>
              </div>
            ))}

            {/* Display News */}
            <h3>News</h3>
            {item.news.map((news, newsIndex) => (
              <div key={newsIndex}>
                <h4>{news.name}</h4>
                <img src={news.image} alt={news.name} />
                <p>{news.description}</p>
              </div>
            ))}

            <button onClick={() => dispatch(removeItem(item))}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;