import React from 'react';


function Footer() {
    return(
        <div className='container-fluid px-3' >
            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12' style={{float: 'left'}}>
                <p>Sideways -yes! Sw.</p>
                <p>All rights reserved</p>
                <p>2025</p>
                <p class="popular">Follow developer</p>
                <ul class="follow">
                    <li><a href="https://www.facebook.com/ekeledo.chidiebere"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="https://instagram.com/ekeledo_chidi?igshid=ZDc4ODBmNjlmNQ=="><i class="fab fa-instagram"></i></a></li>
                    <li><a href="https://www.snapchat.com/add/ekeledochidi?share_id=UrOQw6KGail&locale=en-GB"><i class="fab fa-snapchat"></i></a></li>
                    <li><a href="https://twitter.com/EkeledoChidi?t=_ywd45VsrsRoyJUYVSCD2Q&s=09"><i class="fab fa-twitter"></i></a></li>
                </ul>
            </div>

            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12' style={{float: 'left'}}>Expore</div>

            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12' style={{float: 'left'}}>
                <p>For Users</p>
                <ul>
                    <li>Documentation</li>
                    <li>API</li>
                    <li>Review</li>
                </ul>
            </div>

            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12' style={{float: 'left'}}>
                <p>Company</p>
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Donations</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;