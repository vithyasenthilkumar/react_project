import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import PortfolioComponent from './Components/Routes/Portfolio/PortfolioComponent';
import CalculatorComponent from './Components/Routes/Calculator/CalculatorComponent';
import AxiosComponent from './Components/Routes/Axios/AxiosComponent';

function App() {
  return (
    <Router>
      <div className='App'>
        
        <ul>
          <li>
            <Link to='/Portfolio' className='link'>Portfolio</Link>
          </li>
          <li>
            <Link to='/Calculator' className='link'>Calculator</Link>
          </li>
          <li>
            <Link to='/Axios' className='link'>Axios</Link>
          </li>
         
          
        </ul>
        <Routes>
          <Route exact path='/Portfolio' element={<PortfolioComponent/>}></Route>
          <Route exact path='/Calculator' element={<CalculatorComponent/>}></Route>
          <Route exact path='/Axios' element={<AxiosComponent/>}></Route>


         
        </Routes>
      </div>
    </Router>
  );
}

export default App;