import { Link } from 'react-router-dom';

const PlantCard = ({ title, id }) => {

    return (
    <div className='plant-list-single' >
        <br/><br/>
        <h4>Name: <Link to={`/plants/${id}`}>{ title }</Link> </h4>
        <br/>
     </div>
    )
}

export default PlantCard;