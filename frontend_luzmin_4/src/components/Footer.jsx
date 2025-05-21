import React from 'react';

const Footer = () => (
  <footer style={{ background: '#222', color: '#fff', textAlign: 'center', padding: '1rem 0', marginTop: '2rem' }}>
    <p>© {new Date().getFullYear()} LUZMIN. Todos los derechos reservados.</p>
  </footer>
);

export default Footer;