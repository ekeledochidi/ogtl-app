import React from 'react';
import './ProductList.css'; // Assuming you have a CSS file for styling

function ProductList() {
    return (
        <div className="product-list">
           <div className='navbar'>
            <ul className='navbar-list'>
                <li>Switch</li>
                <li>About</li>
                <li>Selection</li>
                <li>Timeline</li>
                <li><i class="fa-solid fa-envelope"></i></li>
            </ul>
           </div>
        </div>
    );
}

export default ProductList;