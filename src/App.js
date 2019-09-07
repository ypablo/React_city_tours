import React, {Component} from 'react';
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <TourList/>
      </div>
    );


  }
  
}

export default App;
