import React, { useState, useEffect } from 'react';
import Beer from './Beer';
import s from './Beers.module.css'
const axios = require('axios');

async function getAllBeers(){
    try {
        let response =  await axios.get('https://api.punkapi.com/v2/beers');
        response = response.data;
        return response;
    } catch (error) {
        console.log(error)
    }
}

function Beers() {

    const [beers, setBeers] = useState(null);

    useEffect(async () => {
        const allBeers = await getAllBeers();
        setBeers(allBeers);
      }, []);
    
    return (
      <div className={s.container}>
          <div className={s.beers}>
            {beers?.map((b) => {
                return <Beer
                    id={b.id}
                    name={b.name}
                    img={b.image_url}
                    date={b.first_brewed}
                    abv={b.abv}
                    ibu={b.ibu}
                    tag={b.tagline}
                />
            })}
          </div>
      </div>
    );
  }

  export default Beers;
  