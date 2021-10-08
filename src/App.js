import './App.css';
import Card from './card/Card';
import Counter from './card/Counter';
import FooterCounter from './card/FooterCounter';
import SubmitButton from './card/SubmitButton';

import { useGetPokemonsQuery } from './services/pokeApi';
import { useSelector } from 'react-redux'
import { selectTotal } from './card/counterSlice';


function App() {

  const total = useSelector(selectTotal)

  const { data, error, isLoading } = useGetPokemonsQuery(total)

  if (error) return <div>No se pudo cargar</div>

  if (isLoading) return <div className="App"><span className="title">CARGANDO POKEMONES</span></div>

  return (
    <div className="App">
      <span className="title">¿Cuántos Pokemons querés atrapar?</span>
      <Counter/>
      <SubmitButton />
      <div className="cards">
        {data?.results.map((result)=>{
          return <Card key={data?.results.indexOf(result)} name={result.name}/>
        })}
      </div>
      <FooterCounter />
    </div>
  );
}

export default App;
