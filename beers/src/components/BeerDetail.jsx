import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import s from './BeerDetail.module.css'
const axios = require('axios');

async function getBeer(id){
    try {
        let response =  await axios.get(`https://api.punkapi.com/v2/beers?ids=${id}`)
        response = response.data[0];
        return response;
    } catch (error) {
        console.log(error)
    }
}

function BeerDetail() {

    let { id } = useParams();

    const [beer, setBeer] = useState(null);

    useEffect(async () => {
        const aBeer = await getBeer(id);
        console.log(aBeer)
        setBeer(aBeer);
      }, []);

    if(beer){
        return (
          <div className={s.container}>
              <span>{beer.name}</span>
              <span>{beer.tagline}</span>
          </div>
        );
    }
    else{
        return(
            <div>Loading...</div>
        );
    }
  }
  
  export default BeerDetail;