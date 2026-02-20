import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import ProductGrid from './components/ProductGrid';
import Concerns from './components/Concerns';
import About from './components/About';
import Newsletter from './components/Newsletter';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Modal from './components/Modal';
import './App.css';

/**
 * Main App Component
 * Manages global theme state and passes features to child components
 */
function App() {
  const [theme, setTheme] = useState(() => {
    // Load theme from localStorage
    return localStorage.getItem('theme') || 'light';
  });

  const [modal, setModal] = useState({
    isOpen: false,
    title: '',
    message: ''
  });

  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Show modal
  const showModal = (title, message) => {
    setModal({ isOpen: true, title, message });
  };

  // Close modal
  const closeModal = () => {
    setModal({ isOpen: false, title: '', message: '' });
  };

  return (
    <div className={`app theme-${theme}`}>
      <Header onThemeToggle={toggleTheme} currentTheme={theme} />
      <Hero showModal={showModal} />
      <Carousel showModal={showModal} />
      <ProductGrid showModal={showModal} />
      <Concerns />
      <About showModal={showModal} />
      <Newsletter showModal={showModal} />
      <FAQ />
      <Footer />
      {modal.isOpen && (
        <Modal 
          title={modal.title} 
          message={modal.message} 
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default App;
