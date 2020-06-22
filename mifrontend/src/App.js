import React,{useState} from 'react';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState("");
  const [pokemonImagenUrl, setPokemonImagenUrl] = useState("");
  const [yaLeDioClick, setYaLeDioClick] = useState(false);
  const [yaAtrapados, setYaAttrapados] = useState([]);

  const darClick = async() =>{
    setYaLeDioClick(true);
  }

  const cambioInput = (e) =>{
    console.log(e.target);
    setPokemon(e.target.value)
    
  }

  return (
    <div className="App">
      <div>
        <h1>Pokemon Catcher</h1>
        <input
        value={pokemon}
        onChange={(e) => (cambioInput(e))}
        /><br/>
        <button onClick={darClick}>Catch Pokemon</button>
      </div>

    </div>
  );
}

export default App;
