// import Navigation from './components/navigation/navigation.component';
import HomePage from './pages/home/homepage';
import EventsPage from './pages/events/events';
import TrainingPage from './pages/training/trainining';
import TeamsPage from './pages/teams/teams';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ HomePage }></Route>
            <Route path='/events' component={ EventsPage } />
            <Route path='/training' component={ TrainingPage } />
            <Route path='/teams' component={ TeamsPage} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
