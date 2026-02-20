import React, { useState } from 'react';

/**
 * FAQ Component
 * State: expandedIndex for tracking which FAQ item is open
 * Features: Expandable/collapsible sections, conditional rendering
 */
function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqItems = [
    {
      question: 'What makes The Ordinary products different?',
      answer: 'Our products feature research-backed formulations with minimal ingredients. We prioritize transparent labeling and effective concentrations of active ingredients at affordable prices.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping typically takes 5-7 business days. Express shipping options are available at checkout for faster delivery to most locations.'
    },
    {
      question: 'Can I return products?',
      answer: 'Yes, we offer a 60-day money-back guarantee on all unopened products. Simply contact our customer service team for return instructions.'
    },
    {
      question: 'Are your products suitable for all skin types?',
      answer: 'We offer specialized products for various skin types and concerns. Each product includes detailed information about suitable skin types and usage instructions.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to over 180 countries worldwide. Shipping costs and delivery times vary by location. Check our store locator for more information.'
    }
  ];

  const toggleFAQItem = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h3>Frequently Asked Questions</h3>
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className={`faq-item ${expandedIndex === index ? 'open' : ''}`}
            >
              <div 
                className="faq-question"
                onClick={() => toggleFAQItem(index)}
              >
                <h4>{item.question}</h4>
                <span className="faq-toggle">
                  {expandedIndex === index ? '−' : '+'}
                </span>
              </div>
              {expandedIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
