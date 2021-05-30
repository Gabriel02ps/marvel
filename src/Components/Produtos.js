import React, { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';
import { Link } from 'react-router-dom';
import Head from './Head';
import styles from './Produtos.module.css';

const pubKey = 'af90ed94ee0ab97af86b1945293c9349'
const privKey = 'aafc33264d8cb13dc0fd26326e5d02240f19a96d'
const timeStamp = Number(new Date());
const hash = md5(timeStamp + privKey + pubKey)

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

   useEffect(() => {
    axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${pubKey}&hash=${hash}`)
    .then(response => {
      setProdutos(response.data.data.results);
      console.log(produtos);
    })
}, []);

  if (produtos === null) return null;
  return (
    <section>
      <Head title="Marvel Heroes" description="Descrição do site Marvel Heroes" />
      {produtos.map((produto) =>(
        <Link to={`produto/${produto.name}`} key={produto.name}>
          <img src={`${produto.thumbnail.path}.${produto.thumbnail.extension}`} alt={`Marvel Heroe ${produto.name}`}/>
          <h1 className={styles.nome}>{produto.name}</h1>
        </Link>
      
      ))}
    </section>
  )
};

export default Produtos;
