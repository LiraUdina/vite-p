import { Routes, Route } from 'react-router-dom';
import { About } from './papka/About';
import { Home } from './papka/Home';
import { Str} from './Str';
import './App.css';

function App() {
  return (
    <>
    <Str/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path='*' element={<Str/>}></Route>
      </Routes>
    </>
  );
}

export default App;
