import React, { useState, useEffect } from 'react';

/**
 * Carousel Component
 * Props: showModal (function)
 * State: current slide index, autoplay timer
 */
function Carousel({ showModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayDelay = 5000; // 5 seconds

  const slides = [
    {
      title: 'Glycolic Acid 7%',
      description: 'Gentle exfoliation for radiant, even skin',
      image: '/images/product2.jpg',
      alt: 'Glycolic Acid Toner'
    },
    {
      title: 'Natural Moisturizing Factors + HA',
      description: 'Strengthen your skin barrier with essential moisture',
      image: '/images/product3.jpg',
      alt: 'Moisturizing Factors'
    },
    {
      title: 'Volufiline 92%',
      description: 'Combat visible volume loss with precision',
      image: '/images/product4.jpg',
      alt: 'Volufiline'
    },
    {
      title: 'Multi-Peptide Eye Serum',
      description: 'Targeted care for the delicate eye area',
      image: '/images/product5.jpg',
      alt: 'Peptide Eye Serum'
    },
    {
      title: 'Niacinamide 10% + Zinc 1%',
      description: 'Oil control, brightening, and smoothing power',
      image: '/images/product6.jpg',
      alt: 'Niacinamide'
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, autoPlayDelay);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const handleLearnMore = () => {
    const slide = slides[currentSlide];
    showModal(slide.title, `Discover the benefits of ${slide.title}. ${slide.description}`);
  };

  const slide = slides[currentSlide];

  return (
    <section className="carousel-section" id="carousel">
      <div className="carousel-container">
        <button 
          className="carousel-btn carousel-btn-prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ❮
        </button>

        <div className="carousel-wrapper">
          <div className="carousel-track">
            <div className="carousel-slide active">
              <div 
                className="slide-background"
                style={{ backgroundImage: `url('${slide.image}')` }}
              >
                <img src={slide.image} alt={slide.alt} className="fallback-image" />
              </div>
              <div className="slide-content">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
                <button className="slide-cta" onClick={handleLearnMore}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        <button 
          className="carousel-btn carousel-btn-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ❯
        </button>

        {/* Dot Indicators */}
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <span 
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              data-slide={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carousel;
