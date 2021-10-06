import './App.css';
import Card from './cards/Card';
import Counter from './cards/Counter';
import FooterCounter from './cards/FooterCounter';
import SubmitButton from './cards/SubmitButton';

function App() {
  return (
    <div className="App">
      <span className="title">Cuantos Pokemons quieres ver?</span>
      <Counter/>
      <SubmitButton/>
      <div className="cards">
        <Card type="fire"/>
        <Card type="fire"/>
        <Card type="fire"/>
        <Card type="fire"/>
        <Card type="fire"/>
        <Card type="fire"/>
        <Card type="fire"/>
      </div>
      <FooterCounter/>
    </div>
  );
}

export default App;
