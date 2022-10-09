import React, { useState } from 'react';

const SevenSubject = () => {
  const maxBal = 100;
  const maxKredit = 10;
  const [result, setResult] = useState('');
  const [msgError, setMsgError] = useState('');
  const [input, setInput] = useState({
    bal1: 0,
    kredit1: 0,
    bal2: 0,
    kredit2: 0,
    bal3: 0,
    kredit3: 0,
    bal4: 0,
    kredit4: 0,
    bal5: 0,
    kredit5: 0,
    bal6: 0,
    kredit6: 0,
    bal7: 0,
    kredit7: 0,
  });

  const bals =
    parseInt(input.bal1) * parseInt(input.kredit1) +
    parseInt(input.bal2) * parseInt(input.kredit2) +
    parseInt(input.bal3) * parseInt(input.kredit3) +
    parseInt(input.bal4) * parseInt(input.kredit4) +
    parseInt(input.bal5) * parseInt(input.kredit5) +
    parseInt(input.bal6) * parseInt(input.kredit6) +
    parseInt(input.bal7) * parseInt(input.kredit7);
  const kredits =
    parseInt(input.kredit1) +
    parseInt(input.kredit2) +
    parseInt(input.kredit3) +
    parseInt(input.kredit4) +
    parseInt(input.kredit5) +
    parseInt(input.kredit6) +
    parseInt(input.kredit7);
  const calculate = () => {
    if (bals === 0 && kredits === 0) {
      return setResult('Balınızı ve kreditinizi girniz');
    }
    return setResult(Math.round((bals / kredits) * 100) / 100);
  };
  const remove = () => {
    if (parseInt(result) > 1) {
      setResult('');
      setInput({
        ...input,
        bal1: 0,
        kredit1: 0,
        bal2: 0,
        kredit2: 0,
        bal3: 0,
        kredit3: 0,
        bal4: 0,
        kredit4: 0,
        bal5: 0,
        kredit5: 0,
        bal6: 0,
        kredit6: 0,
        bal7: 0,
        kredit7: 0,
      });
    }
  };

  return (
    <div className="App">
      {isNaN(result) && bals !== 0 && kredits !== 0 ? <h3>Reqemden istifade edin</h3> : ''}
      {result === 'Balınızı ve kreditinizi girniz' ? <h3>{result}</h3> : ''}
      {msgError ? <h3>{msgError}</h3> : ''}
      {result > 0 ? <h3>Sizin baliniz : {result}</h3> : ''}
      <div>
        <input
          type="text"
          onChange={(event) => {
            if (+event.target.value && event.target.value <= maxBal) {
              setInput({ ...input, bal1: event.target.value });
              setMsgError('');
            } else {
              setMsgError('51 ve 100 arasi reqem giriniz.');
            }
          }}
          placeholder="Bal"
          value={input.bal1}
        />
        <input
          type="text"
          onChange={(event) => {
            if (+event.target.value && event.target.value <= maxKredit) {
              setInput({ ...input, kredit1: event.target.value });
              setMsgError('');
            } else if (+event.target.value === 0) {
              setInput({ ...input, kredit1: 0 });
            } else {
              setMsgError('1 - 10 arasi reqem girniniz.');
            }
          }}
          placeholder="Kredit"
          value={input.kredit1}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(event) => {
            if (+event.target.value && event.target.value <= maxBal) {
              setInput({ ...input, bal2: event.target.value });
              setMsgError('');
            } else {
              setMsgError('51 ve 100 arasi reqem giriniz.');
            }
          }}
          placeholder="Bal"
          value={input.bal2}
        />
        <input
          type="text"
          onChange={(event) => {
            if (+event.target.value && event.target.value <= maxKredit) {
              setInput({ ...input, kredit2: event.target.value });
              setMsgError('');
            } else if (+event.target.value === 0) {
              setInput({ ...input, kredit2: 0 });
            } else {
              setMsgError('1 - 10 arasi reqem girniniz.');
            }
          }}
          placeholder="Kredit"
          value={input.kredit2}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(event) => {
            if (+event.target.value && event.target.value <= maxBal) {
              setInput({ ...input, bal3: event.target.value });
              setMsgError('');
            } else {
              setMsgError('51 ve 100 arasi reqem giriniz.');
            }
          }}
          placeholder="Bal"
          value={input.bal3}
        />
        <input
          type="text"
          onChange={(event) => {
            if (+event.target.value && event.target.value <= maxKredit) {
              setInput({ ...input, kredit3: event.target.value });
              setMsgError('');
            } else if (+event.target.value === 0) {
              setInput({ ...input, kredit3: 0 });
            } else {
              setMsgError('1 - 10 arasi reqem girniniz.');
            }
          }}
          placeholder="Kredit"
          value={input.kredit3}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(event) => {
            if (+event.target.value && event.target.value <= maxBal) {
              setInput({ ...input, bal4: event.target.value });
              setMsgError('');
            } else {
              setMsgError('51 ve 100 arasi reqem giriniz.');
            }
          }}
          placeholder="Bal"
          value={input.bal4}
        />
        <input
          type="text"
          onChange={(event) => {
            if (+event.target.value && event.target.value <= maxKredit) {
              setInput({ ...input, kredit4: event.target.value });
              setMsgError('');
            } else if (+event.target.value === 0) {
              setInput({ ...input, kredit4: 0 });
            } else {
              setMsgError('1 - 10 arasi reqem girniniz.');
            }
          }}
          placeholder="Kredit"
          value={input.kredit4}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(event) => {
            if (+event.target.value && event.target.value <= maxBal) {
              setInput({ ...input, bal5: event.target.value });
              setMsgError('');
            } else {
              setMsgError('51 ve 100 arasi reqem giriniz.');
            }
          }}
          placeholder="Bal"
          value={input.bal5}
        />
        <input
          type="text"
          onChange={(event) => {
            if (+event.target.value && event.target.value <= maxKredit) {
              setInput({ ...input, kredit5: event.target.value });
              setMsgError('');
            } else if (+event.target.value === 0) {
              setInput({ ...input, kredit5: 0 });
            } else {
              setMsgError('1 - 10 arasi reqem girniniz.');
            }
          }}
          placeholder="Kredit"
          value={input.kredit5}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(event) => {
            if (+event.target.value && event.target.value <= maxBal) {
              setInput({ ...input, bal6: event.target.value });
              setMsgError('');
            } else {
              setMsgError('51 ve 100 arasi reqem giriniz.');
            }
          }}
          placeholder="Bal"
          value={input.bal6}
        />
        <input
          type="text"
          onChange={(event) => {
            if (+event.target.value && event.target.value <= maxKredit) {
              setInput({ ...input, kredit6: event.target.value });
              setMsgError('');
            } else if (+event.target.value === 0) {
              setInput({ ...input, kredit6: 0 });
            } else {
              setMsgError('1 - 10 arasi reqem girniniz.');
            }
          }}
          placeholder="Kredit"
          value={input.kredit6}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(event) => {
            if (+event.target.value && event.target.value <= maxBal) {
              setInput({ ...input, bal7: event.target.value });
              setMsgError('');
            } else {
              setMsgError('51 ve 100 arasi reqem giriniz.');
            }
          }}
          placeholder="Bal"
          value={input.bal7}
        />
        <input
          type="text"
          onChange={(event) => {
            if (+event.target.value && event.target.value <= maxKredit) {
              setInput({ ...input, kredit7: event.target.value });
              setMsgError('');
            } else if (+event.target.value === 0) {
              setInput({ ...input, kredit7: 0 });
            } else {
              setMsgError('1 - 10 arasi reqem girniniz.');
            }
          }}
          placeholder="Kredit"
          value={input.kredit7}
        />
      </div>
      <button onClick={() => calculate()}>Hesabla</button>
      <button onClick={() => remove()}>Yeniləmək</button>
    </div>
  );
};

export default SevenSubject;
