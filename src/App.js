import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Products from './Components/Pages/Products';
import Services from './Components/Pages/Services';
import Signup from './Components/Pages/Signup';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
      <Route path ='/' exact component= {Home}
       />
       <Route path ='/Services' exact component= {Services}
       />
       <Route path ='/Products' exact component= {Products}
       />
       <Route path ='/Signup' exact component= {Signup}
       />
      </Switch>
        </Router>
    </>
  );
}

export default App;
