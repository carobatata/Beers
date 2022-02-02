import React, { useState, useEffect } from 'react';
import Beer from './Beer';
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
      <div>
        {beers?.map((b) => {
            return <Beer
                id={b.id}
                name={b.name}
                img={b.image_url}
                date={b.first_brewed}
                description={b.description}
                tag={b.tagline}
            />
        })}
      </div>
    );
  }

  export default Beers;
  