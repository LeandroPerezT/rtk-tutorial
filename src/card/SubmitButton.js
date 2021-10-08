import './styles/submitButton.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectValue, setTotal } from './counterSlice'


const SubmitButton = () =>{

  const dispatch = useDispatch()
  const total = useSelector(selectValue)
  
  return(
    <div onClick={()=> dispatch(setTotal(total))} className="submit-button">
      <img className="pokeball" src="/pokeball.png" alt="pokeball-icon" />
    </div>
  )
}

export default SubmitButton