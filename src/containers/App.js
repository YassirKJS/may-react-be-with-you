import React, { Component } from 'react';
import { connect } from 'react-redux';


import './App.css';

const mapStateToProps = state => {
  return {
    //props
    searchField: state.searchCarsReducer.searchField,
    cars: state.requestCarsReducer.cars,
    isPending: state.requestCarsReducer.isPending,
    error: state.requestCarsReducer.error
  }
}

class App extends Component {
  constructor(props) {
    super(props);
  }
}

export default App;
