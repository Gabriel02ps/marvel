import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Developed with love by Gabriel Pereira <span role="img" aria-label="heart">💜</span> </p>
    </footer>
  );
};

export default Footer;
