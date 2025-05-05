import React from 'react';
import './ProductList.css'; // Assuming you have a CSS file for styling

function ProductList() {
    const backgroundStyle = () => {
        let background = document.querySelector(".welcome");
        let slideIndex = 0;
    
        setInterval(function() {
            if (slideIndex === 1) {
                slideIndex = 0;
                background.style.backgroundImage = "url('Twitch.jpg')";
            } else {
                slideIndex++;
                background.style.backgroundImage = "url('download (2).jpg')";
            }
        }, 5000); 
    
        setTimeout(function() {
            background.style.backgroundImage = "url('Twitch.jpg')";
        }, 5000);   
    };

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

           <div className='start'>
            <p>Switch</p>
            <p>whatMATTERS</p>
           </div>
        </div>
    );
}

export default ProductList;