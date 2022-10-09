import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import EightSubject from './pages/EightSubject';
import FiveSubject from './pages/FiveSubject';
import FourSubject from './pages/FourSubject';
import SevenSubject from './pages/SevenSubject';
import SixSubject from './pages/SixSubject';
import Threesubject from './pages/Threesubject';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Orta Bal Hesablayıcı</h1>
        <Routes>
          <Route path="/" element={<Threesubject />} />
          <Route path="/four" element={<FourSubject />} />
          <Route path="/five" element={<FiveSubject />} />
          <Route path="/six" element={<SixSubject />} />
          <Route path="/seven" element={<SevenSubject />} />
          <Route path="/eight" element={<EightSubject />} />
        </Routes>
        <NavBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
