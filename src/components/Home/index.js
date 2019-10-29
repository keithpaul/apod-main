import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {

    render(){
        return (
            <div className="home">
                <h3 className="spaceTitle">Space<br /><span>/speɪs/</span></h3>
                <p className="noun">noun</p>
                <p className="description">1. a continuous area or expanse which is free, available, or unoccupied</p>
                <p className="description">2. the dimensions of height, depth, and width within which all things exist and move.</p>
                <p><Link to="/apod">APOD</Link> stands for Astronomy Picture of the Day and connects to the NASA APOD API showcasing their photos of the day</p>
            </div>
        );
    }
   
}

