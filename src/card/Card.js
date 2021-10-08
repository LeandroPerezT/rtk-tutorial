import './styles/card.css'
import { useGetPokemonByNameQuery } from '../services/pokeApi'

const Card = ( { name }) =>{

  const {data, error, isLoading} = useGetPokemonByNameQuery(name)

  if(error) return alert('Algo fallo')

  if (isLoading) return <span>Cargando...</span>

  const renderCard = ()=>{
    return(
      <div className="card">
      <div className="card-title">
        <span className="title">{name.toUpperCase()}</span>
      </div>
      <div className="card-image">
        <img src={data?.sprites.front_default} alt="Imagen de un Pokemon"/>
      </div>
      <div className="card-type">
        <span className={`type ${data?.types[0].type.name}`}>{data?.types[0].type.name.toUpperCase()}</span>
      </div>
    </div>
    )
  }

  return renderCard()
}

export default Card