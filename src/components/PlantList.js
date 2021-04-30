import React, {Component} from 'react';
import PlantCard from './PlantCard';

class PlantList extends Component {


render() {
    const plants = this.props.plants.map( (plant, index) => (
        <PlantCard
         key={ index }
         name={ plant.name }
         id={ plant.id}
        />
    ))
    return (
        <div>
            <h3>Plant List</h3>
           { plants }
        </div>
    )
}



}



export default PlantList;