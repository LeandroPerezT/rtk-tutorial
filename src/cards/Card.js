import './card.css'

const Card = ( {type }) =>{

  return(
    <div className="card">
      <div className="card-title">
        <span className="title">Charizard</span>
      </div>
      <div className="card-image">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" alt="Imagen de un Pokemon"/>
      </div>
      <div className="card-type">
        <span className={`type ${type}`}>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
      </div>
    </div>
  )
}

export default Card