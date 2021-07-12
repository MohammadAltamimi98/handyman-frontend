import React from 'react'
import './App.css';
import Customer from './components/customer';
import Header from './components/header';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Customer />
      </div>
    );
  }

}

export default App;
