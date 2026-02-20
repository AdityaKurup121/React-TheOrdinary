import React from 'react';

/**
 * Hero Component
 * Props: showModal (function)
 */
function Hero({ showModal }) {
  const handleClick = () => {
    showModal(
      'Skincare Routine Builder',
      'Start building your personalized skincare routine. Our experts will help you find the perfect products for your skin type!'
    );
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h2>A Fresh Start For Your Regimen</h2>
        <p>Build a personalized routine for your skin concerns in as little as 2 minutes.</p>
        <button className="cta-button" onClick={handleClick}>
          Build My Regimen
        </button>
      </div>
    </section>
  );
}

export default Hero;
