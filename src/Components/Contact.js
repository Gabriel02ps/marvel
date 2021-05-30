import React from 'react';
import styles from './Contact.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

const Contact = () => {
  return (
    <section className={styles.contact + ' animeLeft'}>
      <Head title="Marvel Heroes | Contact" description="Contact Me" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Contact Me</h1>
        <ul className={styles.data}>
          <li>gabriel02ps@gmail.com</li>
          <li>(85) 99791-8474</li>
          <li>Rua Desembargador Gomes Parente, 615</li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
