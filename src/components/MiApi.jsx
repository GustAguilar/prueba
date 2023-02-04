import { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card';


const Personajes = () => {

    const [busqueda, setBusqueda] = useState("")
    const [personajes, setPersonajes] = useState([]) 
    const [reverse, setReverse] = useState([])

     const consultaApi = async () => {
        let url = `https://rickandmortyapi.com/api/character/?name=${busqueda}`
        let api = await fetch(url)
        let respuesta = await api.json()
        setPersonajes(respuesta.results)
        setReverse(personajes.reverse(personajes))
    }

    useEffect (() => {
        consultaApi()
    },)

    return(
        <div className="contenedor">
            <div className="formulario">
                <h3>Personajes de Rick and Morty</h3>
                <span>Esta es una galeria de los personajes de la serie</span>
                <span>Al escribir un nombre filtra alguna de sus variantes</span>
                <input  className="form-control" placeholder="Busca un personaje" value={busqueda} onChange={ (evento) => setBusqueda(evento.target.value) } />
            </div>
            <div className="grid-container">
                {reverse.map((personaje, indice) => (
                    <div key={indice} >
                        <Card style={{ width: '18rem', backgroundColor: "smokewhite", borderColor: "rgb(166, 255, 0)"}} >
                            <Card.Img variant="top" src={personaje.image} alt={`${personaje.name}`} />
                            <Card.Body>
                                 <Card.Title style={{textAlign: "center"}}>{personaje.name}</Card.Title>
                            </Card.Body>
                        </Card> 
                    </div>
                ))}
           </div>         
              
        </div>
    )
}
export default Personajes  
