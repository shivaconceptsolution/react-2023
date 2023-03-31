import scs from './scs.jpg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Master from './Master';
import AdminMaster from './AdminMaster';
import Dashboard from './Dashboard';
import Adminhome from './Adminhome';
import Addition from "./Addition";
import Subtsraction from "./Substraction";
import {Operationdemo} from './Operationdemo';
import AxiosExample from './AxiosExample';
import Editstudent from './Editstudent';
import Deletestudent from './Deletestudent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master />}>
        <Route index element={<Operationdemo />} />  
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="editstu"  element={<Editstudent />} />
        <Route path="deletestu"  element={<Deletestudent />} />
        <Route path="viewstu"  element={<AxiosExample />} />
       
        <Route path="add" element={<Addition />} />
        <Route path="sub" element={<Subtsraction />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/admin" element={<AdminMaster />}>
        <Route index element={<Adminhome />} />  
        <Route path="dashboard" element={<Dashboard />} />
       
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
