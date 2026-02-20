import React from 'react';

/**
 * Footer Component
 */
function Footer() {
  const footerColumns = [
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Blog']
    },
    {
      title: 'Customer Care',
      links: ['Contact Us', 'Track Order', 'Store Locator']
    },
    {
      title: 'Our Commitments',
      links: ['Sustainability', 'Transparency', 'Quality']
    },
    {
      title: 'Legal',
      links: ['Terms & Conditions', 'Privacy Policy', 'Cookie Settings']
    }
  ];

  const socialLinks = ['Facebook', 'Instagram', 'Twitter', 'TikTok'];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {footerColumns.map((column, idx) => (
            <div key={idx} className="footer-column">
              <h5>{column.title}</h5>
              <ul>
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <div className="social-links">
            {socialLinks.map((social, idx) => (
              <a key={idx} href="#">
                {social}
              </a>
            ))}
          </div>
          <p>&copy; 2024 The Ordinary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
