import { Routes, Route } from 'react-router-dom';
import { About } from './papka/About';
import { Home } from './papka/Home';
import { More } from './papka/More';
import { Str} from './Str';
import './App.css';

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/More" element={<More />} />
        <Route path='*' element={<Str />}></Route>
      </Routes>
    </>
  );
}

export default App;
