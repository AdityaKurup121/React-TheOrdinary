import React from 'react';

/**
 * ProductCard Component (Reusable)
 * Props: product (object with title, image, benefits, size, price, badge), showModal (function)
 */
function ProductCard({ product, showModal }) {
  const handleAddToCart = () => {
    showModal('Added to Cart', `${product.title} has been added to your cart!`);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
        <span className="badge">{product.badge}</span>
      </div>
      <div className="product-info">
        <h4>{product.title}</h4>
        <p className="benefits">{product.benefits}</p>
        <p className="size">{product.size}</p>
        <p className="price">${product.price} USD</p>
        <button 
          className="add-to-cart"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
