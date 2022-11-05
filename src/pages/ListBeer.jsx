import {useState} from "react"
import { useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import imgHome from "../assets/icon.png"

function ListBeer() {

  //1. estado para almacenar data de la api

  const [list, setList] = useState([])
  const[isLoading, setIsLoading] = useState(true)

  //2. llamar a la api useEffect

  useEffect(()=>{

    getData()

  }, [])

  const getData = async () =>{

    try{
      const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
      console.log("la api me dice",response)
       //3. actualizar estado data
       setList(response.data)
       setIsLoading(false)

    }catch(err){
      console.log(err);
    }

  }

  //4. clausula de guardia

  if (isLoading === true){
    return <h3>Loading.Take it easy, baby</h3>
  }

 
  //5. renderizar data

  return (
    <div>

    <header id="home">
      <Link to="/">
      <img src={imgHome} alt="casa" width={"30px"}/>
      </Link>
    </header>
    
    <h3>Beer List</h3>

    {list.map((eachBeer)=>{
      return (<div key={eachBeer._id}>
      <img src={eachBeer.image_url} alt="beer" width={"50px"}/>
      <h5>Name: <Link to={`/beers/${eachBeer._id}`}>{eachBeer.name}</Link></h5>
      <p>Tagline: {eachBeer.tagline}</p>
      <p>Contributed by: {eachBeer.contributed_by.split("<", 1)}</p>
       
      </div>)
    })}
    

    
    
    </div>
  )
}

export default ListBeer