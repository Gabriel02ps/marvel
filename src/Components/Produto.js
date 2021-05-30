import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Head from './Head';
import styles from './Produto.module.css';
import md5 from 'md5';

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {

  const pubKey = 'af90ed94ee0ab97af86b1945293c9349'
  const privKey = 'aafc33264d8cb13dc0fd26326e5d02240f19a96d'
  const timeStamp = Number(new Date());
  const hash = md5(timeStamp + privKey + pubKey)
  
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(response.data.data.results);
      } catch (erro) {
        setError('Ocorreu um erro!');
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${pubKey}&hash=${hash}/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <section className={styles.produto + ' animeLeft'}>
      <Head
        title={`Ranek | ${produto.name}`}
        description={`Ranek | Esse é um produto: ${produto.description}`}
      />
      <div>
        {produto.fotos.map((foto) => (
          <img key={`${produto.thumbnail.path}.${produto.thumbnail.extension}`} src={`${produto.thumbnail.path}.${produto.thumbnail.extension}`} alt={foto.titulo} />
        ))}
      </div>
      {/* <div>
        <h1>{produto.name}</h1>
        <span className={styles.preco}>R$: {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div> */}
    </section>
  );
};

export default Produto;
