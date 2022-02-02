import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import s from './BeerDetail.module.css'
import Nav from './Nav';
import { Link } from 'react-router-dom';
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
              <Nav/>
              <Link to='/' className={s.link}>
                        <button className={s.button}>Go Back!</button>
                    </Link>
              <div className={s.allInfo}>
                <p className={s.title}>{beer.name}</p>
                <p className={s.tag}>{beer.tagline}</p>
                <div className={s.imgTags}> 
                    <img src={beer.image_url} alt="BeerImage" className={s.img}/>
                    <div className={s.tags}>
                        <div className={s.tagsDiv}>
                            <p className={s.info}>ABV: {beer.abv}</p>
                            <p className={s.info}>IBU: {beer.ibu}</p>
                            <p className={s.info}>PH: {beer.ph}</p>
                        </div>
                        <div className={s.tagsDiv}>
                            <p className={s.info}>Attenuation Level: {beer.attenuation_level}</p>
                        </div>
                        <p className={s.info}>Yeast: {beer.ingredients.yeast}</p>
                    </div>
                </div>
                <p className={s.description}>{beer.description}</p>
              </div>
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