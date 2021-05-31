import React, { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';
import { Link } from 'react-router-dom';
import Head from './Head';
import styles from './Heroes.module.css';

const pubKey = 'af90ed94ee0ab97af86b1945293c9349'
const privKey = 'aafc33264d8cb13dc0fd26326e5d02240f19a96d'
const timeStamp = Number(new Date());
const hash = md5(timeStamp + privKey + pubKey)

const Heroes = () => {
  const [heroes, setHeroes] = useState([]);

   useEffect(() => {
    axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${pubKey}&hash=${hash}&limit=48`)
    .then(response => {
      setHeroes(response.data.data.results);
      // console.log(response.data.data.results);
    })
}, []);

  if (heroes === null) return null;
  return (
    <section className={styles.heroes + ' animeLeft'}>
      <Head title="Marvel Heroes | Home" description="Marvel Heroes Website" />
      <div className={styles.grid}>
        {heroes.map((hero) =>(
          <Link to={`hero/${hero.id}`} key={hero.id}>
            <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={`Marvel Heroes ${hero.name}`}/>
            <h1 className={styles.name}>{hero.name}</h1>
          </Link>
          ))}
      </div>
    
    </section>
  )
};

export default Heroes;
