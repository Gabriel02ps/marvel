import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Head from './Head';
import styles from './Hero.module.css';
import md5 from 'md5';
import axios from 'axios';

const Hero = () => {
  const [hero, setHero] = React.useState(null);
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {

  const pubKey = 'af90ed94ee0ab97af86b1945293c9349'
  const privKey = 'aafc33264d8cb13dc0fd26326e5d02240f19a96d'
  const timeStamp = Number(new Date());
  const hash = md5(timeStamp + privKey + pubKey)
  
    axios.get(`http://gateway.marvel.com/v1/public/characters/${id}?ts=${timeStamp}&apikey=${pubKey}&hash=${hash}`)
    .then(response => {
      setHero(response.data.data.results);
      // console.log(response.data.data.results);
    })
  }, [id]);


  if (hero === null) return null;
  return (
    <section className={styles.hero + ' animeLeft'}>
      <Head
        title={`Marvel Heroes | ${hero[0].name}`}
        description={`Marvel Heroes | Hero description: ${hero.description}`}
      />
      <div>
        {hero.map((hero) => (
          <img key={hero.id} src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name} />
        ))}
      </div>
      <div>
        {hero.map((hero) => (
          <div key={hero.name}>
            <h1>{hero.name}</h1>
            {hero.description ? <p className={styles.description}>{hero.description}</p>:<p className={styles.description}>Hero without description!</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
