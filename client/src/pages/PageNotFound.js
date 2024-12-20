import React from 'react';
import Layout from '../components/Layouts/Layout';


const PageNotFound = () => {
  return (
    <Layout>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1 style={{ fontSize: '9rem', color: '#ff4d4f' }}>404</h1>
        <h2 style={{ fontSize: '2rem', margin: '20px 0' }}>Page Not Found</h2>
        <p style={{ fontSize: '1rem', color: '#555' }}>
          Sorry, the page you are looking for does not exist.
        </p>
        <a href="/" style={{ textDecoration: 'none', color: '#007bff', backgroundColor: '#eee',  }}>
          <button type="button" class="btn btn-warning" variant="outline-warning">Warning</button>
        </a>
      </div>
    </Layout>
  );
};

export default PageNotFound;
