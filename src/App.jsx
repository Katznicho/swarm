import { useState } from 'react'
import './App.css'
import logo from './assets/logo.jpeg'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            <img src={logo} alt="Swarm Matrix Business Hub" className="logo-image" />
          </a>
          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</a></li>
            <li><a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Swarm Matrix Business Hub</h1>
          <p>Automated Voice Calls for All Your Business Solutions in Real-Time</p>
          <p style={{ fontSize: '1rem', opacity: 0.9 }}>
            Kiganda 1, Magezi Road, Hoima City, Uganda
          </p>
          <a href="#contact" className="cta-button">Get Started Today</a>
        </div>
        <div className="hero-logo-container">
          <img 
            src={logo} 
            alt="Swarm Matrix Business Hub Logo" 
            className="hero-logo"
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive business solutions to help your company grow and succeed
          </p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">DM</div>
              <h3>Digital Marketing</h3>
              <p>
                Boost your online presence with our comprehensive digital marketing strategies. 
                We help businesses reach their target audience through effective online campaigns.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">C</div>
              <h3>Campaigns</h3>
              <p>
                Strategic campaign management to promote your products and services. 
                We design and execute campaigns that deliver results and drive engagement.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">T</div>
              <h3>Telemarketing</h3>
              <p>
                Professional telemarketing services to connect with your customers. 
                Our team ensures effective communication and customer engagement.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">VC</div>
              <h3>Bulk Voice Calls</h3>
              <p>
                Automated bulk voice calls for business promotions, notifications, surveys, 
                and more. Reach thousands of customers simultaneously with our advanced system.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">A</div>
              <h3>Automated Solutions</h3>
              <p>
                Real-time automated voice call solutions tailored to your business needs. 
                Streamline your communication and save time with our automated systems.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">R</div>
              <h3>Remote Services</h3>
              <p>
                We work remotely to serve clients anywhere. Our flexible approach ensures 
                you get quality service regardless of your location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section how-it-works">
        <div className="container">
          <h2 className="section-title">How Bulk Calls Work</h2>
          <p className="section-subtitle">
            Simple, efficient, and effective - get started in just a few steps
          </p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Upload Contacts</h3>
              <p>Upload a list of phone numbers you want to call. Our system supports various formats for easy integration.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Call Campaign Setup</h3>
              <p>Configure your call settings including the message to play, call duration, timing, and target audience.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Automated Calls</h3>
              <p>The system automatically sends calls to all numbers on your list simultaneously, ensuring efficient delivery.</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Reporting & Analytics</h3>
              <p>Get detailed reports on call delivery, duration, response rates, and other important metrics to track success.</p>
            </div>
          </div>
          
          <div style={{ marginTop: '4rem', background: 'var(--bg-light)', padding: '2rem', borderRadius: '1rem' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>
              Use Cases
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div style={{ padding: '1rem', background: 'white', borderRadius: '0.5rem' }}>
                <strong>Business Promotions</strong>
                <p style={{ marginTop: '0.5rem', color: 'var(--text-light)', fontSize: '0.9rem' }}>
                  Send promotional messages or special offers to your customer base.
                </p>
              </div>
              <div style={{ padding: '1rem', background: 'white', borderRadius: '0.5rem' }}>
                <strong>Notifications</strong>
                <p style={{ marginTop: '0.5rem', color: 'var(--text-light)', fontSize: '0.9rem' }}>
                  Send reminders, alerts, or important updates to keep customers informed.
                </p>
              </div>
              <div style={{ padding: '1rem', background: 'white', borderRadius: '0.5rem' }}>
                <strong>Surveys</strong>
                <p style={{ marginTop: '0.5rem', color: 'var(--text-light)', fontSize: '0.9rem' }}>
                  Conduct phone surveys to gather valuable customer feedback and insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section pricing">
        <div className="container">
          <h2 className="section-title">Pricing Plans</h2>
          <p className="section-subtitle">
            Choose the plan that best fits your business needs
          </p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-name">Basic</div>
              <div className="pricing-price">100 UGX</div>
              <div className="pricing-details">10 seconds per call</div>
              <ul className="pricing-features">
                <li>Perfect for small campaigns</li>
                <li>Quick notifications</li>
                <li>Basic reporting</li>
                <li>Email support</li>
              </ul>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-name">Premium</div>
              <div className="pricing-price">85 UGX</div>
              <div className="pricing-details">Per call (20,000 numbers)</div>
              <ul className="pricing-features">
                <li>Up to 20,000 numbers</li>
                <li>Extended call duration</li>
                <li>Advanced reporting</li>
                <li>Priority support</li>
                <li>Custom messaging</li>
              </ul>
            </div>
            <div className="pricing-card">
              <div className="pricing-name">Gold</div>
              <div className="pricing-price">75 UGX</div>
              <div className="pricing-details">Per call (50,000 numbers)</div>
              <ul className="pricing-features">
                <li>Up to 50,000 numbers</li>
                <li>Unlimited call duration</li>
                <li>Comprehensive analytics</li>
                <li>24/7 dedicated support</li>
                <li>Custom integrations</li>
                <li>White-label options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            We're here to help. Contact us today to discuss your business needs.
          </p>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">P</div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:+256771213424">+256 771 213 424</a>
                  </p>
                  <p>
                    <a href="tel:+256752896439">+256 752 896 439</a>
                  </p>
                  <p>
                    <a href="tel:+256762765578">+256 762 765 578</a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">W</div>
                <div className="contact-details">
                  <h4>WhatsApp</h4>
                  <p>
                    <a href="https://wa.me/256771213423" target="_blank" rel="noopener noreferrer">
                      +256 771 213 423
                    </a>
                  </p>
                </div>
      </div>
              <div className="contact-item">
                <div className="contact-icon">E</div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:swarmbh23@gmail.com">swarmbh23@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">L</div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>Kiganda 1, Magezi Road</p>
                  <p>Hoima City, Uganda</p>
                </div>
              </div>
            </div>
            <div className="map-container">
              <div style={{ textAlign: 'center' }}>
                <p><strong>Kiganda 1, Magezi Road</strong></p>
                <p>Hoima City, Uganda</p>
                <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                  Add Google Maps embed here
        </p>
      </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h3 style={{ marginBottom: '1rem' }}>Swarm Matrix Business Hub</h3>
          <p>Automated Voice Calls for All Your Business Solutions in Real-Time</p>
          <p style={{ marginTop: '2rem', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Swarm Matrix Business Hub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
