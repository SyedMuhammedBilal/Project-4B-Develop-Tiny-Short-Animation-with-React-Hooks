import React, { useEffect, useRef } from 'react';
import './Header.css'
import lottie from 'lottie-web';

function Header() {

  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../animation.json')
    })
  })
  
  return (
        <div className="site_header">
            <nav >
                <div className="logo">
                    <h1>Modern Website</h1>
                </div>
                <div className="menu">
                    <ul> 
                        <li>Home</li>
                        <li>Services</li>
                        <li>Contact us</li>
                        <li>About us</li>                    
                    </ul>
                </div>
            </nav>
            <section>
                <div className="left_side">
                    <div ref={container}></div>
                </div>
                <div className="right_side">
                    <h1>NINJA BOOTCAMP</h1>
                    <p>Animated React Website and Animated Illustrations</p>
                    <button>Welcome</button>
                </div>
            </section>
        </div>
    );
}

export default Header;
