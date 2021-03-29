import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import AddPatient from './components/AddPatient';
import AnalizeData from './components/AnalizeData';
import ChartGenerator from './components/ChartGenerator';
import CollectClinicals from './components/CollectClinicals';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/addPatient" component={AddPatient}/>
        <Route exact path="/patientDetails/:patientId" component={CollectClinicals}/>
        <Route exact path="/analyzer/:patientId" component={AnalizeData}/>
        <Route exact path="/chart/:componentName/:patientId" component={ChartGenerator}/>
      </Switch>
    </div>
  );
}

export default App;
