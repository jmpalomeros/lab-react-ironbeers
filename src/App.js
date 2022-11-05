
import './App.css';
import{Routes,Route} from "react-router-dom"
import {useState} from "react"
// import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ListBeer from './pages/ListBeer';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import SingleBeer from './pages/SingleBeer';
import NotFound from "./pages/NotFound"
import Error from "./pages/Error"




function App() {

  //!esta es la funcion q paso por props

  // const [beerList, setBeerList] = useState([])

  // const addListHere = (listToAdd) =>{

  //   console.log("añadiendo lista", listToAdd);

  //   //copio el array
  //   const copy=[...beerList]
  //   copy.push(listToAdd)
  //   setBeerList(copy)

  // }

      
  return (
    <div className="App">

    {/* <Navbar /> */}

    <Routes>
    
    
    <Route path='/' element={<Home />}/>
    <Route path='/beers' element={<ListBeer />}/>
    {/* getList={addListHere} */}
    <Route path='/random-beer' element={<RandomBeer />}/>
    <Route path='/new-beer' element={<NewBeer />}/>
    <Route path='/:beerId' element={<SingleBeer />}/>

    <Route path='*' element={<NotFound />}/>
    <Route path='/error' element={<Error />}/>
    

    </Routes>


      
    </div>
  );
}

export default App;
