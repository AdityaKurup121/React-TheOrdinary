import React, { useState } from 'react';

/**
 * Newsletter Component
 * Props: showModal (function)
 * State: email, errors
 * Features: Form validation, error handling
 */
function Newsletter({ showModal }) {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);

  const isValidEmail = (emailToCheck) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailToCheck);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = [];

    // Validation checks
    if (!email.trim()) {
      newErrors.push('Email address is required');
    } else if (!isValidEmail(email)) {
      newErrors.push('Please enter a valid email address');
    }

    // Display errors or submit
    if (newErrors.length > 0) {
      setErrors(newErrors);
    } else {
      // Success
      setEmail('');
      setErrors([]);
      showModal(
        'Subscription Successful!',
        `Thank you for subscribing! We'll send science-backed skincare tips to ${email}`
      );
    }
  };

  return (
    <section className="newsletter">
      <div className="container">
        <h3>Be in the know.</h3>
        <p>Subscribe to receive science-backed tips, access to special offers, and new innovations.</p>
        
        {errors.length > 0 && (
          <div className="form-errors">
            <strong>Please fix the following errors:</strong>
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input 
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.length > 0 ? 'form-field-error' : ''}
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
