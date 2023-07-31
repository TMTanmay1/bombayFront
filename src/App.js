import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Navigation from './Components/Navigation';
import Proposal from './Pages/Proposal';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'


function App() {
  
  return (
    <div className="App">
      <Router>
          <Routes>    
          <Route path='/' element={<Login/>}></Route>
          </Routes>

          <Navigation>
            <Routes>
            <Route path='/proposal' element={<Proposal/>}></Route>
            </Routes>
          </Navigation>
        </Router>
    </div>
  );
}

export default App;
