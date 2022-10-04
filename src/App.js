import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('');
  const [bal1, setBal1] = useState(0);
  const [bal2, setBal2] = useState(0);
  const [bal3, setBal3] = useState(0);
  const [kredit1, setKredit1] = useState(0);
  const [kredit2, setKredit2] = useState(0);
  const [kredit3, setKredit3] = useState(0);
  const bals = parseInt(bal1 * kredit1 + bal2 * kredit2 + bal3 * kredit3);
  const kredits = parseInt(kredit1 + kredit2 + kredit3);
  const calculate = () => {
    if (bals === 0 && kredits === 0) {
      return setResult('Reqem Girniz');
    }
    return setResult(bals / kredits);
  };
  const remove = () => {
    if (result > 1) {
    }
  };

  return (
    <div className="App">
      <h1>Orta Bal Hesablayıcı</h1>
      {isNaN(result) && bals !== 0 && kredits !== 0 ? <h3>Reqemden istifade edin</h3> : ''}
      {result === 'Reqem Girniz' ? <h3>{result}</h3> : ''}
      {result > 0 ? <h3>Sizin baliniz : {result}</h3> : ''}
      <div>
        <input
          type="text"
          onChange={(event) => {
            if (event.target.value !== isNaN) {
              setBal1(parseInt(event.target.value));
            } else {
              alert('Duzgun  qiymet yaz');
            }
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
      <button onClick={() => remove()}>Yeniləmək</button>
    </div>
  );
}

export default App;
