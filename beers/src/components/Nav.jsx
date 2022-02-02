import cheers from './../cheers.png';
import s from './Nav.module.css'

function Nav() {
    return (
      <div className={s.container}>
        <span className={s.title}>All about Beers</span>
        <img src={cheers} alt="beer" className={s.img}/>
      </div>
    );
  }
  
  export default Nav;
