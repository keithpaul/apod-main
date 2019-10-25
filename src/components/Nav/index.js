import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {

    render(){
        return (
            <nav className="mainNav">
                <h3>Space</h3>
                <ul className="navLinks">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/images">Images</Link>
                    </li>
                    <li>
                        <Link to="/apod">APOD</Link>
                    </li>
                </ul>
            </nav>
        );
    }
   
}

