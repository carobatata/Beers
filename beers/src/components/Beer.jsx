import s from './Beer.module.css'
import { Link } from 'react-router-dom';

function Beer({id, name, img, abv, ibu, tag}) {
    return (
      <div key={id} className={s.container}>
        <div className={s.flexItem}>
          <div className={s.fullName}>
            <span className={s.title}>{name.slice(0,25)}</span>
            <span className={s.tag}>{tag.slice(0,30)}</span>
            <div className={s.abvIbu}>
              <span className={s.item}>ABV {abv}</span>
              <span className={s.item}>IBU {ibu}</span>
            </div>
          <Link className={s.moreDetails} to={`/beers/${id}`}>More details</Link>
          </div>
          <img src={img} alt="BeerImage" className={s.img}/>
        </div>
      </div>
    );
  }
  
  export default Beer;
