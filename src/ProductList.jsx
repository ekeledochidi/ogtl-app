import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './ProductList.css'; // Assuming you have a CSS file for styling
import Timeline from './Timeline'; 
import { addItem } from './CartSlice';
import Footer from './Footer';

function ProductList() {
    const [addedToCart, setAddedToCart] = useState([]);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);
    
    const handleAddToCart = (item) => {
        const cartItem = {
            category: item.Category, // Add the Category array
            news: item.News,         // Add the News array
        };
        dispatch(addItem(cartItem)); // Dispatch the combined object to the Redux store
        setAddedToCart([...addedToCart, ...item.Category.map((cat) => cat.topic)]); // Track added topics
    };

    const backgroundStyle = () => {
        let background = document.querySelector(".start");
        let slideIndex = 0;

        // Set the initial background image
        background.style.backgroundImage = "url('images/download (2).jpg')";

        setInterval(function () {
            if (slideIndex === 1) {
                slideIndex = 0;
                background.style.backgroundImage = "url('images/Twitch.jpg')";
            } else {
                slideIndex++;
                background.style.backgroundImage = "url('images/download (2).jpg')";
            }
        }, 5000);
    };

    // Call the backgroundStyle function when the component mounts
    useEffect(() => {
        backgroundStyle();
    }, []); // Empty dependency array ensures this runs only once after the component mounts

    const navigate = useNavigate();

    const navigateToTimeline = () => {
        navigate('/Timeline');
    };

    const NewsArray = [
        {
            Category: [
                {
                    topic: "Sport",
                    image: "images/soccer-field.jpg",
                    description: "Soccer is a team sport played between two teams of eleven players with a spherical ball. It is played by 250 million players in over 200 countries, making it the world's most popular sport.",
                }
            ],
            News: [
                {
                    name: "Ucl",
                    image: "images/UCL.jpg",
                    description: "The UEFA Champions League (UCL) is an annual club football competition organized by the UEFA and contested by top-division European clubs. It is one of the most prestigious tournaments in the world and the most prestigious club competition in European football.",
                },
                {
                    name: "Epl",
                    image: "images/EPL.jpg",
                    description: "The English Premier League (EPL) is the top tier of English football, featuring 20 clubs. It is known for its competitive nature and attracts top talent from around the world.",
                }
            ]
        },
        {
            Category: [
                {
                    topic: "Food",
                    image: "images/food1.jpg",
                    description: "Food is any substance consumed to provide nutritional support for the body. It is usually of plant or animal origin and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.",
                }
            ],
            News: [
                {
                    name: "Cuisine",
                    image: "images/eat1.jpg",
                    description: "Cuisine refers to a style or method of cooking, especially as characteristic of a particular country or region. It encompasses the ingredients, techniques, and traditions used in food preparation.",
                },
                {
                    name: "Recipe",
                    image: "images/drink.jpg",
                    description: "A recipe is a set of instructions for preparing a particular dish, including a list of the ingredients required. Recipes can vary widely in complexity and style.",
                }
            ]
        },{
            Category: [
                {
                    topic: "Social Media",
                    image: "images/SocialMedia.png",
                    description: "Social media refers to websites and applications that enable users to create and share content or participate in social networking. It has transformed the way people communicate and interact online.",
                }
            ],
            News: [
                {
                    name: "Instagram",
                    image: "images/IG.jpg",
                    description: "Instagram is a photo and video-sharing social networking service owned by Facebook. It allows users to share photos and videos, follow other users, and engage with content through likes and comments.",
                },
                {
                    name: "TikTok",
                    image: "images/Tiktok.jpg",
                    description: "TikTok is a social media platform for creating, sharing, and discovering short music videos. It has gained immense popularity for its user-generated content and viral challenges.",
                }
            ]
        }
    ];

    return (
        <div className="product-list">
            <div className="navbar">
                <ul className="navbar-list">
                    <li style={{fontWeight:'bold'}}>Switch</li>
                    <li>About</li>
                    <li onClick={navigateToTimeline} style={{float:'right', backgroundColor:'dodgerblue'}}>Timeline<i class="fa fa-folder" aria-hidden="true" style={{paddingLeft: '5px'}}></i></li>
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
                                        <img src="images/art1.jpg" alt="Los Angeles" className="d-block" style={{ width: "100%" }} />
                                        <div className="carousel-caption">
                                            <h3>Art</h3>
                                            <p>The beauty of colors!</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/art2.jpg" alt="Chicago" className="d-block" style={{ width: "100%" }} />
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
                                        <img src="images/eat1.jpg" alt="Los Angeles" className="d-block" style={{ width: "100%" }} />
                                        <div className="carousel-caption">
                                            <h3>Food Cuisine</h3>
                                            <p>The art of preparing food!</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/food.jpg" alt="Chicago" className="d-block" style={{ width: "100%" }} />
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

            <div className='product-grid container-fluid'>
                <div className="row gx-4">
                {NewsArray.map((item, index) => (
                    <div key={index} className="product-card col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        {item.Category.map((category, catIndex) => (
                            <div key={catIndex}>
                                <img src={category.image} alt={category.topic} className="product-image" />
                                <h5>{category.topic}</h5>
                                <p>{category.description}</p>
                                {cart.some((cartItem) =>
                                    cartItem.category.some((cat) => cat.topic === category.topic)
                                 ) ? (
                                    <button className="product-button added-to-cart" disabled>
                                        Added to Cart
                                    </button>
                                ) : (
                                    <button className="product-button" onClick={() => handleAddToCart(item)}>
                                        Add to Cart
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
        ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default ProductList;

export function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/Timeline" element={<Timeline />} />
      </Routes>
    </Router>
  );
}