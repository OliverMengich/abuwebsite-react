import Navigation from './components/navigation/navigation.component';
import Footer from './components/footer/footer.component';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const NotFound = () =>(
  <div>Not Found</div>
);
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            {/* <Route element={ <Navigation/> } /> */}
            <Route exact path='/' component={ Navigation }></Route>
            <Route component={NotFound} />
          </Switch>
      </BrowserRouter>
      <Footer /> 
    </div>
  );
}

export default App;
