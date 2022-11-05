import axios from "axios";
import { useEffect } from "react";
import {useState} from "react"
import { Link } from "react-router-dom";
import imgHome from "../assets/icon.png";
import { Card } from 'antd'

function RandomBeer() {

  //1. creo el estado
const [ randomBeer, setRandomBeer] = useState ({})
const [isLoading, setIsLoading] = useState (true)

//2.llamo a la api

  useEffect (( )=>{

    getData ()

  }, [])

    const getData = async() => {
      try{
        const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        console.log(response);
      //3. actualiza el estado
      setRandomBeer(response.data)
      
      setIsLoading(false)

      } catch(err){
        console.log(err);
      }
      
    }

    //4. cl de guardia

    if(isLoading===true){
      return<h3>Loading.Take it easy, baby</h3>
    }


  return (
    <div>
    <header id="home">
      <Link to="/">
      <img src={imgHome} alt="casa" width={"30px"}/>
      </Link>
    </header>
    <h3>¡Chorprecha! </h3>
    <p>Te tocó esta birra</p>

    <Card style={{ width: 300 }}>
    <img src={randomBeer.image_url} alt="beer" width={"50px"}/>
      <h5>Name: {randomBeer.name}</h5>
      <p> Tagline: {randomBeer.tagline}</p>
      <p>First brewed:{randomBeer.first_brewed}</p>
      <p>Attenuation level:{randomBeer.attenuation_level}</p>
      <p>Description: {randomBeer.description}</p>
      <p>Contributed by: {randomBeer.contributed_by.split("<", 1)} </p>
      
      </Card>
    
    
    </div>
  )
}

export default RandomBeer