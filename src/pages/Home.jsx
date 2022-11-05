import { Link } from "react-router-dom";
import imgBeers from "../assets/beers.png"
import imgRandom from "../assets/random-beer.png"
import imgNewBeer from "../assets/new-beer.png"

function Home() {

  

  return (
    <div>
    
    
    

    <div>
      <img src={imgBeers} alt="beers" />
      <h3><Link to="/beers">All Beers </Link></h3>
      <p>La más amplia carta de cervezas.Para todos los gustos</p>
    </div>

    <div>
      <img src={imgRandom} alt="random" />
      <h3><Link to="/beers/random-beer">Random Beer </Link></h3>
      <p>¡Ruleta Rusa! Seguro que aciertas</p>
    </div>

    <div>
      <img src={imgNewBeer} alt="new-beer" />
      <h3><Link to="/new-beer">New Beer</Link></h3>
      <p>Aquí tienes una nueva cerveza, ¡disfrutala!</p>
    </div>
    
    
    
    </div>
  )
}

export default Home