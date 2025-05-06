import React, { useEffect } from 'react';
import './ProductList.css'; // Assuming you have a CSS file for styling
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JavaScript
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function ProductList() {
    const backgroundStyle = () => {
        let background = document.querySelector(".start");
        let slideIndex = 0;

        setInterval(function () {
            if (slideIndex === 1) {
                slideIndex = 0;
                background.style.backgroundImage = "url('Twitch.jpg')";
            } else {
                slideIndex++;
                background.style.backgroundImage = "url('download (2).jpg')";
            }
        }, 5000);
    };

    // Call the backgroundStyle function when the component mounts
    useEffect(() => {
        backgroundStyle();
    }, []); // Empty dependency array ensures this runs only once after the component mounts

    return (
        <div className="product-list">
            <div className="navbar">
                <ul className="navbar-list">
                    <li>Switch</li>
                    <li>About</li>
                    <li>Selection</li>
                    <li>Timeline</li>
                    <li><i className="fa-solid fa-envelope"></i></li>
                </ul>
            </div>

            <div className="start">
                <p>Switch</p>
                <p>whatMATTERS</p>
            </div>

            <div className="newsblog">
                <p>A news blog is a website that focuses on sharing and discussing news stories, updates, and information about current events. It's a way for individuals or organizations to share their perspectives on the news, often offering analysis, commentary, or unique insights beyond the mainstream media coverage.</p>
                <p>News blogs can cover a wide range of topics, including politics, technology, entertainment, health, and more. They may feature articles, opinion pieces, interviews, and multimedia content such as videos and podcasts. Readers can engage with the content by leaving comments or sharing it on social media.</p>
                <p>Overall, a news blog serves as a platform for individuals or groups to share their thoughts and opinions on current events, providing an alternative source of information and analysis.</p>
                <p>It can be a valuable resource for those looking to stay informed and gain different perspectives on the news.</p>
                <p>News blogs can also foster community engagement and discussion, allowing readers to connect with like-minded individuals and share their own insights.</p>
                <p>In addition, many news blogs offer subscription options, allowing readers to receive updates and notifications about new content. This can help build a loyal readership and create a sense of community around the blog.</p>
                <p>A news blog is an online publishing platform that creates content based on current events. News blogs will often create a summary of a news event based on what other news outlets have reported. News blogs are usually not first-hand news sources. News blogs should contain facts and honest information.</p>
            </div>

            <div className="container-fluid px-4">
                <div className="row gx-4">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="mover">
                            {/* Carousel */}
                            <div id="demo1" className="carousel slide" data-bs-ride="carousel">
                                {/* Indicators/dots */}
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#demo1" data-bs-slide-to="0" className="active"></button>
                                    <button type="button" data-bs-target="#demo1" data-bs-slide-to="1"></button>
                                </div>

                                {/* The slideshow/carousel */}
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="art1.jpg" alt="Los Angeles" className="d-block" style={{ width: "100%" }} />
                                        <div className="carousel-caption">
                                            <h3>Art</h3>
                                            <p>The beauty of colors!</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="art2.jpg" alt="Chicago" className="d-block" style={{ width: "100%" }} />
                                        <div className="carousel-caption">
                                            <h3>Cycling</h3>
                                            <p>The sport of riding bicycles</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Left and right controls/icons */}
                                <button className="carousel-control-prev" type="button" data-bs-target="#demo1" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#demo1" data-bs-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </button>
                            </div>
                            
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="mover">
                            {/* Carousel */}
                            <div id="demo2" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4000" style={{ zIndex: 0 }}>
                                {/* Indicators/dots */}
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#demo2" data-bs-slide-to="0" className="active"></button>
                                    <button type="button" data-bs-target="#demo2" data-bs-slide-to="1"></button>
                                </div>

                                {/* The slideshow/carousel */}
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="eat1.jpg" alt="Los Angeles" className="d-block" style={{ width: "100%" }} />
                                        <div className="carousel-caption">
                                            <h3>Food Cuisine</h3>
                                            <p>The art of preparing food!</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="food.jpg" alt="Chicago" className="d-block" style={{ width: "100%" }} />
                                        <div className="carousel-caption">
                                            <p>So, what's your order?</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className='newsblog'>
                <p>Welcome to our newsblog! Unlike a traditional blog, we’ve created a shopping cart-like experience for news content. It’s all about making your news consumption enjoyable and interactive. You can browse through your favorite categories, select the stories that interest you, and easily add them to your personalized timeline. Once you’ve made your selections, you can dive deep into the content at your leisure in the timeline section. Have fun exploring the news in a whole new way!</p>
            </div>

            <h4>News article</h4>
        </div>
    );
}

export default ProductList;