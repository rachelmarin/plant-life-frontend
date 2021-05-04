import React, {Component} from 'react';
import  { connect } from 'react-redux';
import { fetchPlants} from './actions';
import PlantForm from './components/PlantForm';
import PlantList from './components/PlantList';
import Plant from './components/Plant';
import Home from './components/Home';
import Nav from './components/Nav';
import Error from './components/Error';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    this.props.fetchPlants();
  }

  render() {
    if ( this.props.loading ) {
      return <div>Loading....</div>
    }


  return (
    <div className='page-container'>
      <Router> 
          <Nav/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/plants/new" component={ PlantForm}/> 
              <Route exact path="/plants" render={props => <PlantList  { ...props } plants={ this.props.plants } /> }/>
              <Route exact path="/plants/:id" render={props => <Plant { ...props } plants={ this.props.plants } /> } />
              <Route component={Error}/>
            </Switch>
      </Router>
    </div>
  );
}
}


const mapStateToProps = state => {
  return {
    plants: state.plants,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
   fetchPlants: () => dispatch(fetchPlants()) 
   
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
