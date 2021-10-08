import './styles/counter.css'
import { useSelector } from 'react-redux'
import { selectValue } from './counterSlice'

const FooterCounter = ()=>{

  const value = useSelector(selectValue)
  return(
    <div className="footer-counter">
      <span className="footer-text">
        Pokemons en el contador: 
        <span className="big-number">
          {value}
        </span>
      </span>
    </div>
  )
}

export default FooterCounter