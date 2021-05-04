import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deletePlant} from '../actions/index';

class Plant extends Component {
    state = {
        loading: true,
        plant: null
    }
    
    componentDidMount() {
       const plant = this.props.plants.find( plant => plant.id.toString() === this.props.match.params.id)

       this.setState({
           loading: false,
           plant
       })
    }

  
    
    render() {
        if(this.state.loading) {
            return <div>loading....</div>
        }

        if(!this.state.plant) {
            return <div>Plant Not Found</div>
        }
        const {id} = this.props;

        return (
            <div>
                <h1>{ this.state.plant.title }</h1>
                <h3>Lighting:</h3><p> { this.state.plant.light}</p>
                <h3>Tempature:</h3> <p> { this.state.plant.temp}</p>
                <h3>Water: </h3><p>{ this.state.plant.water}</p>
                <h3>Soil: </h3><p>{ this.state.plant.soil}</p>
                <h3>Feeding:</h3><p> { this.state.plant.feed}</p>
                <h3>Tips and Tricks: </h3><p>{ this.state.plant.tip}</p>
                <button className="myButton"> Add to My Plants </button>
                <br/> 
                <br/> 
                <button className="myButton"> Edit </button> 
                <br/> 
                <br/> 
                <button className="myButton" onClick={() => this.props.deletePlant(id, this.props.history)}> Delete</button>
                 
                 
                 
                
            </div>
        )
    }
}

export default connect(null, {deletePlant})(Plant);