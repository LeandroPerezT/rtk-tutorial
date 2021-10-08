import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { selectValue, increment, decrement } from './counterSlice'
import './styles/counter.css'

const Counter = () => {

  const value = useSelector(selectValue)
  const dispatch = useDispatch()

  return (
    <div className="counter">
      <AiOutlineMinusCircle 
      onClick={() =>{
       if(value > 1){
        dispatch(decrement())
       }
      }}
      className="minus"/>
      <span className="number">{value}</span>
      <AiOutlinePlusCircle 
      onClick={() =>{
        dispatch(increment())
      }}
      className="plus"/>
    </div>
  )
}

export default Counter