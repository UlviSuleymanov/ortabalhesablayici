import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState(0);
  const [bal1, setBal1] = useState(0);
  const [bal2, setBal2] = useState(0);
  const [bal3, setBal3] = useState(0);

  const [kredit1, setKredit1] = useState(0);
  const [kredit2, setKredit2] = useState(0);
  const [kredit3, setKredit3] = useState(0);

  const calculate = () => {
    const bals = parseInt(bal1 * kredit1 + bal2 * kredit2 + bal3 * kredit3);
    const kredits = parseInt(kredit1 + kredit2 + kredit3);
    console.log(bals);
    console.log(kredits);
    return setResult(bals / kredits);
  };

  return (
    <div className="App">
      <h1>Orta Bal Hesablayıcı</h1>
      {result ? <h3>{result}</h3> : ''}
      <div>
        <input
          type="text"
          onChange={(event) => {
            setBal1(parseInt(event.target.value));
          }}
          placeholder="Bal"
        />
        <input
          type="text"
          onChange={(event) => {
            setKredit1(parseInt(event.target.value));
          }}
          placeholder="Kredit"
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(event) => {
            setBal2(parseInt(event.target.value));
          }}
          placeholder="Bal"
        />
        <input
          type="text"
          onChange={(event) => {
            setKredit2(parseInt(event.target.value));
          }}
          placeholder="Kredit"
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(event) => {
            setBal3(parseInt(event.target.value));
          }}
          placeholder="Bal"
        />
        <input
          type="text"
          onChange={(event) => {
            setKredit3(parseInt(event.target.value));
          }}
          placeholder="Kredit"
        />
      </div>
      <button onClick={() => calculate()}>Hesabla</button>
    </div>
  );
}

export default App;
