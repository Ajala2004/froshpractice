import React, { useState, useEffect } from 'react';
import { FaSearch, FaBars, FaTimes, FaChevronDown, FaArrowRight, FaFacebook, FaWhatsapp, FaInstagram, FaArrowUp,FaChevronLeft, FaCalendarAlt, FaComment, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import "./App.css"
const App = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  const [currentSlide, setCurrentSlide] = useState(0);


  const blogPosts = [
    {
      id: 1,
      category: "MEDIA SEO",
      title: "Why do project managers need to focus on strategy?",
      date: "Apr 21, 2020",
      comments: 0,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      category: "DIGITAL MARKETING",
      title: "How to improve your website ranking in 2023",
      date: "May 15, 2023",
      comments: 5,
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      category: "CONTENT STRATEGY",
      title: "The importance of quality content for SEO",
      date: "Jun 3, 2023",
      comments: 2,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      category: "SOCIAL MEDIA",
      title: "Maximizing engagement on Instagram in 2023",
      date: "Jun 18, 2023",
      comments: 8,
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];
  const nextSlidee = () => {
    setCurrentSlide((prev) => (prev === blogPosts.length - 1 ? 0 : prev + 1));
  };

  const prevSlidee = () => {
    setCurrentSlide((prev) => (prev === 0 ? blogPosts.length - 1 : prev - 1));
  };

  const testimonials = [
    {
      id: 1,
      name: "Ajala Emmanuel",
      role: "Software Developer",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Marketing Director",
      quote: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Product Manager",
      quote: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  ];
  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  // };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && agreed) {
      setSubmitted(true);
      setEmail('');
      setAgreed(false);
    }
  };


  // const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
      alt: 'Laptop illustration'
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/512/3767/3767084.png',
      alt: 'Folder illustration'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const [counters, setCounters] = useState([
    { name: 'Projects', target: 120, current: 0 },
    { name: 'People', target: 85, current: 0 },
    { name: 'Years', target: 10, current: 0 },
    { name: 'Offices', target: 15, current: 0 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prevCounters =>
        prevCounters.map(counter => ({
          ...counter,
          current: counter.current < counter.target
            ? counter.current + Math.ceil(counter.target / 30)
            : counter.target
        })))
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const navItems = [
    {
      name: 'Home',
      subItems: ['About', 'Creative Agency']
    },
    {
      name: 'Pages',
      subItems: ['Services', 'Team']
    },
    {
      name: 'Portfolio',
      subItems: ['Our Work', 'Case Studies']
    }
  ];

  return (
    <div className="app">
      {/* Background Image */}
      <div className="background-image"></div>

      {/* Header - Fixed at top */}
      <header className={`header ${navOpen || searchOpen ? 'overlay-active' : ''}`}>
        <div className="logo">Smart <span>SEO</span></div>
        <div className="icons">
          {searchOpen ? (
            <button className="icon-btn" onClick={() => setSearchOpen(false)}>
              <FaTimes />
            </button>
          ) : (
            <button className="icon-btn" onClick={() => setSearchOpen(true)}>
              <FaSearch />
            </button>
          )}
          {navOpen ? (
            <button className="icon-btn" onClick={() => setNavOpen(false)}>
              <FaTimes />
            </button>
          ) : (
            <button className="icon-btn" onClick={() => setNavOpen(true)}>
              <FaBars />
            </button>
          )}
        </div>
      </header>

      {/* Nav Overlay */}
      {navOpen && (
        <div className="nav-overlay">
          <div className="nav-menu">
            {navItems.map((item, index) => (
              <div className="nav-item" key={index}>
                <div
                  className="nav-main-item"
                  onClick={() => toggleSubmenu(index)}
                >
                  <span>
                    {item.name}
                    <FaChevronDown className={`chevron ${openSubmenu === index ? 'rotate' : ''}`} />
                  </span>
                </div>
                <div className={`submenu ${openSubmenu === index ? 'active' : ''}`}>
                  {item.subItems.map((subItem, subIndex) => (
                    <a href="#" className="submenu-item" key={subIndex}>{subItem}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <div className="search-overlay">
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <button className="search-btn">
              <FaSearch />
            </button>
          </div>
        </div>
      )}

      {/* Home Screen Content */}
      <section className="home-section">
        <div className="hero-content">
          <h1>Turning Creative Ideas into Success</h1>
          <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua quis nostrud exerc.</p>
          <button className="discover-btn">
            Discover Now <FaArrowRight className="btn-icon" />
          </button>
        </div>
        <div className="curve-end"></div>
      </section>




      {/* Creative Agency Section */}
      <section className="creative-section">
        {/* Overlapping Images */}
        <div className="image-stack">
          <div className="image-wrapper horizontal">
            <img src="https://cdn-icons-png.flaticon.com/512/3058/3058972.png" alt="Creative agency illustration" />
          </div>
          <div className="image-wrapper vertical">
            <img src="https://cdn-icons-png.flaticon.com/512/3058/3058985.png" alt="Business growth illustration" />
          </div>
        </div>

        {/* Main Text */}
        <div className="agency-intro">
          <h2>CREATIVE AGENCY</h2>
          <h3>We help your business grow</h3>
          <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
        </div>

        {/* Features */}
        <div className="features-container">
          <div className="feature">
            <div className="feature-image">
              <img src="https://cdn-icons-png.flaticon.com/512/1995/1995463.png" alt="Creative design icon" />
            </div>
            <div className="feature-text">
              <h4>Creative design</h4>
              <p>Natus error sit voluptatem accus antium doloremque.</p>
            </div>
          </div>

          <div className="feature">
            <div className="feature-image">
              <img src="https://cdn-icons-png.flaticon.com/512/1995/1995485.png" alt="Possibilities icon" />
            </div>
            <div className="feature-text">
              <h4>Endless possibilities</h4>
              <p>Sit voluptatem accus antium doloremque laudan.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="counter-section">
        <div className="container">
          <h2 className="section-title">Our Achievements</h2>
          <div className="counters-grid">
            {counters.map((counter, index) => (
              <div className="counter-item" key={index}>
                <div className="counter-number">
                  <span>{counter.current}</span>+
                </div>
                <div className="counter-name">{counter.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="creative-solutions">
        <div className="container">
          <div className="content-wrapper">
            <div className="text-content">
              <h2>CREATIVE SOLUTIONS</h2>
              <h3>We make unique & memorable brands</h3>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditis praesentium
                voluptatum deleniti atque lorem in voluptate velit iusto odio dignissimos duci esse.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque
                laudantiu totam rem aperiam,eaque ipsa quae
              </p>
              <button className="read-more">Read More</button>
            </div>

            <div className="slider-container">
              <div
                className="slider-track"
                style={{ transform: `translateX(-${currentSlide * 100} %)` }}
              >
                {slides.map((slide, index) => (
                  <div className="slide" key={index}>
                    <img src={slide.image} alt={slide.alt} />
                  </div>
                ))}
              </div>
              <button className="slider-nav prev" onClick={prevSlide}>
                <FaChevronLeft />
              </button>
              <button className="slider-nav next" onClick={nextSlide}>
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-box">
            <h2>Subscribe for the exclusive updates!</h2>
            {submitted ? (
              <div className="success-message">
                <p>Thank you for subscribing!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="subscribe-btn">
                    Subscribe
                  </button>
                </div>
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="privacy-agreement"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)} />
                  <label htmlFor="privacy-agreement">
                    I agree to the <a href="#">Privacy Policy</a>
                  </label>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
      <section className="testimonial-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonial-slider">
            <div className="slider-content">
              <div className="profile-image">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                />
              </div>
              <div className="quote-container">
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">{testimonials[currentSlide].quote}</p>
                <div className="divider"></div>
                <h3 className="client-name">{testimonials[currentSlide].name}</h3>
                <p className="client-role">{testimonials[currentSlide].role}</p>
              </div>
            </div>
            <div className="slider-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
            <button className="slider-nav prev" onClick={prevSlide}>
              &lt;
            </button>
            <button className="slider-nav next" onClick={nextSlide}>
              &gt;
            </button>
          </div>
        </div>
      </section>
      <section className="who-we-are">
        <div className="container">
          <div className="content-wrapper">
            <div className="text-content">
              <h2>WHO WE ARE</h2>
              <h3>We provide best digital services</h3>
              <p>
                Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.
              </p>
              <button className="discover-btn">
                Discover Now <FaArrowRight className="btn-icon" />
              </button>
            </div>
            <div className="image-content">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Digital services illustration"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="blog-section">
        <div className="container">
          <div className="section-header">
            <h2>OUR BLOG</h2>
            <h3>Latest articles</h3>
          </div>

          <div className="blog-slider">
            <div className="slider-wrapper" style={{ transform: `translateX(-${currentSlide * 25} %)` }}>
              {blogPosts.map((post) => (
                <div className="blog-card" key={post.id}>
                  <div className="blog-image">
                    <img src={post.image} alt={post.title} />
                    <div className="category-badge">{post.category}</div>
                  </div>
                  <div className="blog-content">
                    <h4>{post.title}</h4>
                    <div className="blog-meta">
                      <span><FaCalendarAlt /> {post.date}</span>
                      <span><FaComment /> {post.comments} Comments</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="slider-controls">
            <button className="slider-nav prev" onClick={prevSlidee}>
              <FaChevronLeft />
            </button>
            <button className="slider-nav next" onClick={nextSlidee}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-wave"></div>
        <div className="container">
          <div className="footer-content">
            {/* Office Info */}
            <div className="footer-column">
              <h3>Office</h3>
              <p className="address">
                <span>Germany —</span><br />
                785 15h Street, Office 478<br />
                Berlin, De 81566
              </p>
              <p className="contact-info">
                info@email.com<br />
                +1 840 841 25 69
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h3>Links</h3>
              <ul className="footer-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Contacts</a></li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="footer-column">
              <h3>Socials</h3>
              <ul className="footer-links">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Dribbble</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>
            {/* Newsletter */}
            <div className="footer-column newsletter">
              <h3>Newsletter</h3>
              <form className="newsletter-form">
                <input type="email" placeholder="Enter Your Email Address" />
                <div className="privacy-check">
                  <input type="checkbox" id="footer-privacy" />
                  <label htmlFor="footer-privacy">I agree to the Privacy Policy.</label>
                </div>
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Smart SEO. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <div className="fixed-elements">
        {/* Social Media Icons */}
        <div className="fixed-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </div>

        {/* Back to Top Button */}
        <button className="back-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      </div>


    </div>
  )
}

export default App;