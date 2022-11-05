import axios from "axios"
import {useState} from "react"
import { useEffect } from "react";
import { useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import { Card } from 'antd'
import imgHome from "../assets/icon.png"


function SingleBeer() {

  //1. buscar la cerveza por id
  const{beerId} = useParams ()
  

  //2. crear los estados dond estaran los detalles
  const[details, setDetails] = useState(null)
  const [isLoading, setIsLoading] = useState(true)


  //3. buscar la info del servidor con useEffect
  useEffect(()=>{
    getData()
    
  }, [])

  const getData = async () =>{
    try{
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      console.log(response)
      //4.guardos los datos del estado
      setDetails(response.data)
      setIsLoading(false)

    }catch(err){
      console.log(err);
    }
  }

  //5. cl de guardia
  if (isLoading === true){
    return <h3>Loading.Take it easy, baby</h3>
  }

  //6. renderizar detalles
  return (
    <div>
    <header id="home">
      <Link to="/">
      <img src={imgHome} alt="casa" width={"30px"}/>
      </Link>
    </header>
    

    <h4>This is your beer</h4>

      <Card style={{ width: 300 }}>
      
      <img src={details.image_url} alt="beer" width={"50px"}/>
      <h5>Name: {details.name}</h5>
      <p> Tagline: {details.tagline}</p>
      <p>First brewed:{details.first_brewed}</p>
      <p>Attenuation level:{details.attenuation_level}</p>
      <p>Description: {details.description}</p>
      <p>Contributed by:{details.contributed_by.split("<", 1)} </p>
      </Card>

        


  
</div>
  )
}

export default SingleBeer
