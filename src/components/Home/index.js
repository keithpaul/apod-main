import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {

    render(){
        return (
            <div className="home">
                <h3>Space</h3>
                <p>This site is dedicated to showing the best and most amazing pictures of space and the stars. </p>
                <p><Link to="/apod">APOD</Link> stands for Astronomy Picture of the Day and connects to the NASA APOD API showcasing their photos of the day</p>
            </div>
        );
    }
   
}

