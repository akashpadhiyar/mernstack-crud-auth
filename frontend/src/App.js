import Register from './Register';
import Display from './Display';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

function App(){

  return (
    <div>
      <h1>MyApp</h1>
      <Router>
        <Link to="/Register">Register</Link> |
        <Link to="/Display">Display</Link>
        <Routes>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Display" element={<Display/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;