import './App.css';
import Card from './cards/Card';
import Counter from './cards/Counter';
import FooterCounter from './cards/FooterCounter';
import SubmitButton from './cards/SubmitButton';

function App() {
  return (
    <div className="App">
      <span className="title">Cuantos Pokemons quieres ver?</span>
      <Counter />
      <SubmitButton />
      <div className="cards">
        <Card url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" name="Charizard" type="fire" />
        <Card url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" name="Blastoise" type="water" />
        <Card url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png" name="Abra" type="psychic" />
        <Card url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png" name="Rattata" type="normal" />
        <Card url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png" name="Golduck" type="psychic" />
        <Card url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png" name="Zubat" type="normal" />
        <Card url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png" name="Machamp" type="fight" />
        <Card url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" name="Pikachu" type="electric" />

      </div>
      <FooterCounter />
    </div>
  );
}

export default App;
