import React from 'react';

/**
 * Header Component
 * Props: onThemeToggle (function), currentTheme (string)
 */
function Header({ onThemeToggle, currentTheme }) {
  const navItems = [
    { label: 'Bestsellers', href: '#bestsellers' },
    { label: 'Shop', href: '#shop' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>The Ordinary</h1>
        </div>
        <nav className="nav">
          <ul>
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-controls">
          <button 
            className="theme-toggle"
            onClick={onThemeToggle}
            aria-label="Toggle theme"
          >
            {currentTheme === 'light' ? '🌙' : '☀️'}
          </button>
          <div className="cart-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
