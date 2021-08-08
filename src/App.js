
import './App.css';
import {Header} from './MyComponent/Header';


import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { FormSignUp } from './MyComponent/FormSignUp';




function App() {
  return (
  <>
    <Router>
        
        <Header />
        <div>

          <Switch>
            <Route path="/" exact component={FormSignUp}></Route>
          

          </Switch>
        
        </div>
    </Router>  
  </>
  );
}

export default App;
