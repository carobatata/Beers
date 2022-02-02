import Beers from "./components/Beers";
import Nav from "./components/Nav";
import BeerDetail from './components/BeerDetail'
import s from './App.module.css'
import { Route } from 'react-router';

function App() {
  return (
    <div className={s.container}>      
      <Route exact path='/'>
        <Nav/>
        <Beers/>
      </Route>
      <Route path='/beers/:id'> 
        <BeerDetail/>
      </Route>
    </div>
  );
}

export default App;
