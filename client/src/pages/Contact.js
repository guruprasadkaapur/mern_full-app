import React, { useState } from 'react';
import Layout from '../components/Layouts/Layout';
import { MdHeadphones } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate the form
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Valid email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // If no errors, proceed
    setErrors({});
    setSuccess(true);

    // Reset form (simulate form submission)
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Layout>
      <section style={{ padding: '2rem' }}>
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out to us using the contact information or form below!</p>

        

        {success && <p style={{ color: 'green' }}>Message sent successfully!</p>}

        <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="name" style={{ display: 'block', fontWeight: 'bold' }}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold' }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="message" style={{ display: 'block', fontWeight: 'bold' }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', height: '100px' }}
            />
            {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: '#007BFF',
              color: '#fff',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>

        </form>
        <div style={{ marginTop: '2rem' ,padding:'1rem',border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#f9f9f9' }}>
          <h3>Our Contact Information</h3>
          <p>
            <strong><MdHeadphones /> Phone:</strong> +1 (555) 123-4567
          </p>
          <p>
            <strong><IoMdMail />Email:</strong> contact@companyname.com
          </p>
          <p>
            <strong><IoLocation />Location:</strong> 123 Business Street, Suite 100, Cityville, State, 12345
          </p>
        </div>


        
      </section>
    </Layout>
  );
};

export default Contact;