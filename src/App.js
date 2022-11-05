
import './App.css';
import{Routes,Route} from "react-router-dom"

// import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ListBeer from './pages/ListBeer';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import SingleBeer from './pages/SingleBeer';
import NotFound from "./pages/NotFound"
import Error from "./pages/Error"




function App() {

       
  return (
    <div className="App">

    {/* <Navbar /> */}

    <Routes>
    
    
    <Route path='/' element={<Home />}/>
    <Route path='/beers' element={<ListBeer />}/>
    <Route path='/beers/random-beer' element={<RandomBeer />}/>
    <Route path='/new-beer' element={<NewBeer />}/>
    <Route path='/beers/:beerId' element={<SingleBeer />}/>

    <Route path='*' element={<NotFound />}/>
    <Route path='/error' element={<Error />}/>
    

    </Routes>


      
    </div>
  );
}

export default App;
