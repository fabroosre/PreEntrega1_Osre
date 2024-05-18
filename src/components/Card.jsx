import "./Card.css"

function Card({name, description, price, image}) { 
  return (
    <div className='Card'>
    <h3>{name}</h3>
    <p>{description}</p>
    <p>u$$ {price}</p>
    <img src={image}/>
    </div>
  )
}

export default Card;

