import React from 'react';

/**
 * About Component
 * Props: showModal (function)
 */
function About({ showModal }) {
  const handleLabClick = () => {
    showModal(
      'Our Lab',
      'Discover how our products are scientifically formulated. Each ingredient is carefully selected for maximum efficacy and safety.'
    );
  };

  return (
    <section className="about" id="about">
      <div className="container">
        <h3>Grounded in Science. Driven by Purpose.</h3>
        <p>
          Our aim is to empower our community with transparent information about the science 
          behind our products, offering effective and accessible skincare solutions—without 
          compromise on quality.
        </p>
        <button className="cta-button secondary" onClick={handleLabClick}>
          Look Inside Our Lab
        </button>
      </div>
    </section>
  );
}

export default About;
