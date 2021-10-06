import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import './styles/counter.css'

const Counter = () => {
  return (
    <div className="counter">
      <AiOutlineMinusCircle onClick={() => alert('implement minus counter')} className="minus"/>
      <span className="number">12</span>
      <AiOutlinePlusCircle onClick={() => alert('implement plus counter')} className="plus"/>
    </div>
  )
}

export default Counter