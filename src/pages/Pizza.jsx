import react, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const Pizza = ({ agregarAlCarrito}) => {
    const {id} = useParams;
    const [pizza, setPizza] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (id) {
          fetch(`http://localhost:5000/api/pizzas/${id}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error('Error al obtener la pizza');
              }
              return response.json();
            })
            .then((data) => {
              setPizza(data);
              setLoading(false);
            })
            .catch((error) => {
              setError(error);
              setLoading(false);
            });
        }
      }, [id]);
    if (loading){
        return <p style={{color: 'black'}}>Cargando Pizza...</p>
    }
    if(error){
        return <p>{error.message}</p>
    }
    if(!pizza){
        return <p>No se encontro informacion de la pizza</p>
    }


    return(
        <div style={{color:"black"}}>
            <div className='pizza-detail' >
                <h1>{pizza.name}</h1>
                <img src={pizza.img} alt={pizza.name}/>
                <p>{pizza.desc}</p>
                <p>ingredientes: </p>
                <ul>
                    {pizza.ingredients.map((ingredients, index) => (
                        <li key={index}>{ingredients}</li>
                    ))}
                </ul>
                <p>precio: ${pizza.price}</p>
                <button onClick={() => agregarAlCarrito(pizza)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Pizza;