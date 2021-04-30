import { Link } from 'react-router-dom';

const PlantCard = ({ name, id }) => {

    return (
    <div>
        <h4>Name: <Link to={'/plants/$(id)'}>{ name }</Link> </h4>
     </div>
    )
}

export default PlantCard;