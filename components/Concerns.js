import React from 'react';

/**
 * Concerns Component
 * Displays common skin concerns
 */
function Concerns() {
  const concerns = [
    {
      title: 'Aging',
      description: 'For early signs of aging',
      image: '/images/concern-aging.jpg'
    },
    {
      title: 'Congestion',
      description: 'For acne-prone skin',
      image: '/images/concern-congestion.jpg'
    },
    {
      title: 'Texture',
      description: 'For uneven skin texture',
      image: '/images/concern-texture.jpg'
    },
    {
      title: 'Eye Care',
      description: 'For sensitive eye area',
      image: '/images/concern-eye care.jpg'
    }
  ];

  return (
    <section className="concerns" id="shop">
      <div className="container">
        <h3>Common Concerns</h3>
        <p className="section-subtitle">Not sure where to begin? Here are some common skin concerns.</p>
        <div className="concerns-grid">
          {concerns.map((concern, index) => (
            <div key={index} className="concern-card">
              <img src={concern.image} alt={concern.title} />
              <h4>{concern.title}</h4>
              <p>{concern.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Concerns;
