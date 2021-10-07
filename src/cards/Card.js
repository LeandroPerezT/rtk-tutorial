import './styles/card.css'

const Card = ( {type, url, name }) =>{

  return(
    <div className="card">
      <div className="card-title">
        <span className="title">{name}</span>
      </div>
      <div className="card-image">
        <img src={url} alt="Imagen de un Pokemon"/>
      </div>
      <div className="card-type">
        <span className={`type ${type}`}>{type.toUpperCase()}</span>
      </div>
    </div>
  )
}

export default Card