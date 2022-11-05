import {useState} from "react"
import axios from "axios"
import { Link } from "react-router-dom";
import imgHome from "../assets/icon.png"

function NewBeer() {
//1. creo los estados
  const[nameInput, setNameInput] = useState("")
  const[taglineInput, setTagline] = useState("")
  const[descriptionInput, setDescriptionInput] = useState("")
  const[firstInput, setFirstInput] = useState ("")
  const [brewersInput, setBrewersInput] = useState("")
  const [attenuationInput, setAttenuationInput] = useState(0)
  const[contributedInput, setContributedInput] = useState("")

  const handleNameChange = (event) => {setNameInput(event.target.value)}
  const handleTaglineChange = (event) => {setTagline(event.target.value)}
  const handleDescriptChange = (event) => {setDescriptionInput(event.target.value)}
  const handleFirstChange = (event) => {setFirstInput(event.target.value)}
  const handleBrewersChange = (event) => {setBrewersInput(event.target.value)}
  const handleAttenuatChange = (event) => {setAttenuationInput(event.target.value)}
  const handleContributChange = (event) => {setContributedInput(event.target.value)}



  const handleSubmit = async (event)=>{

    event.preventDefault()

    const newBeer = {
      name:  nameInput,
      tagline:descriptionInput,
      description: descriptionInput,
      first_brewed: firstInput,
      brewers_tips: brewersInput,
      attenuation_level: attenuationInput,
      contributed_by: contributedInput
      }

      //contacto con el servidor para crear la cerveza y recibo la respuesta

      try{
        const response = await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
        console.log(response)

        }catch(err){
        console.log(err);}

  }



//renderizo data
  return (
    <div>
    <header id="home">
      <Link to="/">
      <img src={imgHome} alt="casa" width={"30px"}/>
      </Link>
    </header>
    <h5>Mi birra</h5>  
  
    <form action="">
    <br />
    <label htmlFor="name">Name</label>
    <input value={nameInput}type="text" name="title" onChange={handleNameChange} />
    <br />
    <label htmlFor="tagline">Tagline: </label>
    <input value={taglineInput}type="text" name="tagline" onChange={handleTaglineChange}/>
    <br />
    <label htmlFor="description">Description:</label>
    <input value={descriptionInput} type="text" name="description" onChange={handleDescriptChange} />
    <br />
    <label htmlFor="first_brewed">First Brewed: </label>
    <input value={firstInput} type="text" name="first_brewed" onChange={handleFirstChange} />
    <br />
    <label htmlFor="brewers_tips">Brewers tips:</label>
    <input value={brewersInput} type="text" name="brewers_tips" onChange={handleBrewersChange} />
    <br />
    <label htmlFor="attenuation_level">Attenuation level: </label>
    <input value={attenuationInput} type="text" name="attenuation_level" onChange={handleAttenuatChange} />
    <br />
    <label htmlFor="contributed_by">Contributed by:</label>
    <input value={contributedInput} type="text" name="contributed_by" onChange={handleContributChange} />
      <br />
    <button onClick={handleSubmit}>Add</button>


   </form>
    
    </div>
  )
}

export default NewBeer