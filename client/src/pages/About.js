import React from 'react';
import Layout from '../components/Layouts/Layout';
import './About.css'; 
const About = () => {
  return (
    <Layout >
      <section className="about-container">
        {/* Header Section */}
        <div className="about-header">
          <h1 className="fade-in" style={{ fontSize: '2.5rem',fontFamily:"poppins sans-serif" }}>About Us</h1>
          <p className="fade-in-delay" style={{ fontSize: '1.2rem' ,justifyItems:"left",alignItems:"left",textAlign:"justify",fontWeight:"italic",fontFamily:"poppins sans-serif" }}>
          Welcome to G-shop, your one-stop destination for quality products at unbeatable prices. At G-shop, we believe shopping should be simple, enjoyable, and tailored to meet your unique needs.
          Founded with a passion for delivering excellence, G-shop is a trusted online marketplace committed to offering a wide range of products that cater to your lifestyle. From everyday essentials to exclusive finds, our mission is to bring the best to your doorstep.
          <br/>
          Top-Quality Products Carefully selected and vetted to ensure the highest standards.<br/>
           Affordable Prices: Competitive pricing without compromising quality.<br/>
           Exceptional Service: Dedicated to providing a seamless shopping experience with 24/7 customer support.
          </p>
        </div>

        {/* Image Section */}
  <h2>Our Team </h2>

        <div className="about-image-section">
          <img
            src="images\team.jpg"
            alt="Our Team"
            className="about-image fade-in"
          />
        </div>

        {/* Mission Section */}
        <div className="about-content fade-in-delay">
  <h2>Our Mission</h2>
  <p style={{ textAlign: 'center' , margin: '20px 0', fontSize: '1.2rem', color: '#555' , lineHeight: '1.5', fontFamily: 'poppins, sans-serif'}}> 
    Our mission is to provide innovative solutions that empower individuals and businesses
    to achieve their goals. We operate with integrity, excellence, and a customer-first
    approach.
  </p>

  {/* Grid Section */}
  <div className="mission-grid">
    <div className="grid-item">
      <h3>Innovation</h3>
      <p>We constantly embrace cutting-edge technology to deliver the best solutions.</p>
    </div>
    <div className="grid-item">
      <h3>Integrity</h3>
      <p>We operate with honesty and uphold the highest ethical standards.</p>
    </div>
    <div className="grid-item">
      <h3>Customer Focus</h3>
      <p>Your satisfaction is at the core of everything we do.</p>
    </div>
    <div className="grid-item">
      <h3>Excellence</h3>
      <p>We aim for perfection in every project and service we provide.</p>
    </div>
    <div className="grid-item">
      <h3>Excellence</h3>
      <p>We aim for perfection in every project and service we provide.</p>
    </div>
    <div className="grid-item">
      <h3>Excellence</h3>
      <p>We aim for perfection in every project and service we provide.</p>
    </div>
  </div>
</div>
<br />

        {/* Values Section */}
        <div className="about-content fade-in-delay">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Integrity:</strong> We believe in doing the right thing, always.</li>
            <li><strong>Innovation:</strong> Embracing creativity to drive change and improvement.</li>
            <li><strong>Customer Focus:</strong> Our customers are at the heart of everything we do.</li>
            <li><strong>Excellence:</strong> Striving for the highest standards in all we do.</li>
          </ul>
        </div>

        {/* History Section */}
        <div className="about-content fade-in-delay">
          <h2>Our History</h2>
          <p>
            Founded in 2010, we have grown from a small team of passionate individuals into a
            leading company in our industry. Over the years, we've adapted to changing markets and
            embraced innovation to stay ahead of the curve.
          </p>
        </div>

        {/* Footer Section */}
        <div className="about-footer fade-in-delay">
          <p>We look forward to continuing this journey with you. Thank you for your support!</p>
        </div>
      </section>
    </Layout>
  );
};
Layout.defaultProps = {
  title: "G-Shop",
  description: "Welcome to G-shop, your one-stop destination for quality products at unbeatable prices.",
  keywords: "online marketplace, quality products, unbeatable prices",
  author: "G-shop",
};

export default About;
