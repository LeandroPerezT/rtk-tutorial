import './styles/submitButton.css'
import { AiOutlineSearch } from 'react-icons/ai'

const SubmitButton = () =>{
  return(
    <div className="submit-button">
      <AiOutlineSearch onClick={()=> alert('search')} className="button"/>
    </div>
  )
}

export default SubmitButton