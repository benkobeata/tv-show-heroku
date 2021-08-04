
import 'bootstrap/dist/css/bootstrap.min.css';
import { Main } from './components/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
        <Router>
        <Switch>
          <Route path='/' exact component={Main} />
          </Switch>
        </Router>
        </>
  );
}

export default App;
