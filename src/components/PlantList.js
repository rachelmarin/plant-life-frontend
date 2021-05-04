import React, {Component} from 'react';
import PlantCard from './PlantCard';


class PlantList extends Component {

    

render() {
    const plants = this.props.plants.map( (plant, index) => (
        <PlantCard
         key={ index }
         title={ plant.title }
         id={ plant.id}
        />
    ))
    return (
        <div className='plant-listing'>
            <h2>Plant List</h2>
            
            {plants}
           
        </div>
        )
    }

}



export default PlantList;