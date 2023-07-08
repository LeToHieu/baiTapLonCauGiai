import NavBar from './component/NavBar';
import BubleSort from './component/BubleSort';
import Home from './component/Home';
import SelectionSort from './component/SelectionSort';
import InsertionSort from './component/InsertionSort';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavBar/>}>
          <Route path='bubleSort' element={<BubleSort/>} />
          <Route path='insertionSort' element={<InsertionSort/>} />
          <Route path='selectionSort' element={<SelectionSort/>} />
          <Route path='' element={<Home/>} />
          <Route path='*' element={<div>Missing something</div>}/>
        </Route>
    </Routes>
  );
}

export default App;
