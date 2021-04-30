import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {

    render() {
        return(
            <nav className="navbar">
                <ul>
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/plants/new"> Add Plant </Link></li>
                    <li><Link to="/plants"> All Plants </Link></li>
                    <li><Link to="/"> My Plants </Link></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;