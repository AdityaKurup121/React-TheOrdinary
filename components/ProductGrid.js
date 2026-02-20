import React from 'react';
import ProductCard from './ProductCard';

/**
 * ProductGrid Component
 * Props: showModal (function)
 * Receives product data and renders ProductCard components with props
 */
function ProductGrid({ showModal }) {
  const products = [
    {
      title: 'Hyaluronic Acid 2% + B5 (with Ceramides)',
      benefits: 'Plumps, Smooths',
      size: '30ml • 60ml',
      price: '11.90',
      badge: 'Bestseller',
      image: '/images/product1.jpg'
    },
    {
      title: 'Glycolic Acid 7% Exfoliating Toner',
      benefits: 'Evens Texture & Tone, Radiance',
      size: '100ml • 240ml',
      price: '10.80',
      badge: 'Bestseller',
      image: '/images/product2.jpg'
    },
    {
      title: 'Natural Moisturizing Factors + HA',
      benefits: 'Supports Skin Barrier',
      size: '30ml • 100ml',
      price: '8.00',
      badge: 'Bestseller',
      image: '/images/product3.jpg'
    },
    {
      title: 'Volufiline 92% + Pal-Isoleucine 1%',
      benefits: 'Targets Visible Volume Loss',
      size: '15 mL',
      price: '25.70',
      badge: 'Trending',
      image: '/images/product4.jpg'
    },
    {
      title: 'Multi-Peptide Eye Serum',
      benefits: 'Age Support, Dark Circles',
      size: '15ml',
      price: '30.00',
      badge: 'Trending',
      image: '/images/product5.jpg'
    },
    {
      title: 'Niacinamide 10% + Zinc 1%',
      benefits: 'Oil Control, Brightens, Smooths',
      size: '30ml • 60ml',
      price: '7.20',
      badge: 'Bestseller',
      image: '/images/product6.jpg'
    }
  ];

  return (
    <section className="bestsellers" id="bestsellers">
      <div className="container">
        <div className="section-header">
          <h3>Bestsellers</h3>
          <a href="#" className="view-all">View All →</a>
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              product={product}
              showModal={showModal}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;
