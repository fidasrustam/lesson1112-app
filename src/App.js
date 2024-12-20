import logo from './logo.svg';
import './App.css';

import Stopwatch from './Components/Stopwatch';
import Timer from './Components/Timer';
import Watch from './Components/Watch';
import {Routes,Route,Link,NavLink} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <div className='menu-container'>
      <NavLink className='menu' to='/watch'>Saat</NavLink>
      <NavLink className='menu' to='/stopwatch'>Saniyəölçən</NavLink>
      <NavLink className='menu' to='/timer'>Taymer</NavLink>
      </div>

     <Routes>
        <Route path='/watch' element={<Watch />} />
        <Route path='/stopwatch' element={<Stopwatch />} />
        <Route path='/timer' element={<Timer />} />
     </Routes>
    </div>
  );
}

export default App;
