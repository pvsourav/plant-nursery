import React from 'react';
import { Leaf, Shield, Heart, Truck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import "../styles/landingpage.css";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/products');
  };

  return (
    <div className="landing-page-container">
      <div
        className="hero-section-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url('https://images.unsplash.com/photo-1584204559709-ca7d413229eb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content-area">
          <div className="hero-inner-container">
            <div className="hero-text-block">
              <h1 className="hero-title">
                Welcome to <span className="text-green-600">Paradise Nursery</span>
              </h1>
              <p className="hero-description">
                Transform your space with our carefully curated collection of beautiful, healthy plants. From air-purifying varieties to stunning tropical specimens.
              </p>
              <button
                onClick={handleGetStarted}
                className="hero-get-started-button"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="why-choose-section">
        <div className="why-choose-inner-container">
          <h2 className="why-choose-heading">
            Why Choose Paradise Nursery?
          </h2>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon-container">
                <Leaf className="feature-icon" />
              </div>
              <h3 className="feature-title">Premium Quality</h3>
              <p className="feature-description">
                Carefully selected, healthy plants that thrive in your home
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon-container">
                <Shield className="feature-icon" />
              </div>
              <h3 className="feature-title">Plant Guarantee</h3>
              <p className="feature-description">
                30-day guarantee on all plants with expert care support
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon-container">
                <Heart className="feature-icon" />
              </div>
              <h3 className="feature-title">Expert Care Tips</h3>
              <p className="feature-description">
                Detailed care instructions and ongoing support for success
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon-container">
                <Truck className="feature-icon" />
              </div>
              <h3 className="feature-title">Safe Delivery</h3>
              <p className="feature-description">
                Secure packaging ensures your plants arrive in perfect condition
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to Transform Your Space?
          </h2>
          <p className="cta-description">
            Browse our collection of beautiful plants and start your green journey today.
          </p>
          <button
            onClick={handleGetStarted}
            className="cta-button"
          >
            Shop Plants Now
          </button>
        </div>
      </div>
    </div>
  );
}