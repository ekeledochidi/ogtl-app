import React from 'react';
import './Footer.css'


function Footer() {
    return (
        <div className="footer container-fluid px-3 gx-2">
            <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                    <p style={{fontFamily: 'Gill Sans MT', fontWeight: 'bold'}}>Sideways -yes! Sw.</p>
                    <p style={{fontWeight: 'lighter', marginBottom: '0px'}}>All rights reserved</p>
                    <p style={{fontSize: '13px'}}>2025 &#169;</p>
                    <p className="popular" style={{marginTop: '70px'}}>Follow developer</p>
                    <ul className="follow">
                        <li>
                            <a href="https://www.facebook.com/ekeledo.chidiebere">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com/ekeledo_chidi?igshid=ZDc4ODBmNjlmNQ==">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.snapchat.com/add/ekeledochidi?share_id=UrOQw6KGail&locale=en-GB">
                                <i className="fab fa-snapchat"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/EkeledoChidi?t=_ywd45VsrsRoyJUYVSCD2Q&s=09">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                    <p className="popular">Explore</p>
                    <img className="me1" src="images/gym.jpg" alt="me" />
                    <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                        <li style={{ marginBottom: "8px" }}>Gym Experience</li>
                        <li style={{ marginBottom: "50px", fontSize: "13px", color: "gray" }}>Services</li>
                    </ul>
                    <hr />
                    <img className="me1" src="images/eat.jpg" alt="me" />
                    <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                        <li style={{ marginBottom: "8px" }}>Food Cuisine</li>
                        <li style={{ marginBottom: "50px", fontSize: "13px", color: "gray" }}>Services</li>
                    </ul>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                    <p>For Users</p>
                    <ul>
                        <li>Documentation</li>
                        <li>API</li>
                        <li>Review</li>
                    </ul>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                    <p>Company</p>
                    <ul>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Donations</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;