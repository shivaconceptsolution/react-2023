import scs from './scs.jpg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Master from './Master';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master />}>
        <Route index element={<Home />} />  
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
