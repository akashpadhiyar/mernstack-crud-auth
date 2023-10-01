import Register from './Register';
import Display from './Display';
import Login from './Login';
import Home from './Home';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Edit from './Edit';

function App(){

  return (
    <div>
      <h1>MernStack CRUD and Auth</h1>
      <Router>
        <Link to="/Register">Register</Link> |
        <Link to="/Display">Display</Link> | 
        <Link to="/Login">Login</Link> | 
        <Link to="/Home">Home</Link> | 
        <Routes>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Display" element={<Display/>}/>
          <Route path="/Edit/:id" element={<Edit/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Home" element={<Home/>}/>
        </Routes>
      </Router>
      <h6>AkashSir.com</h6>
    </div>
  );
}
export default App;