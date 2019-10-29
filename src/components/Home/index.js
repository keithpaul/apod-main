import React, {useEffect} from 'react';
import './Home.scss';
import { particles } from './particles';

function Home() {
    useEffect(()=>{        
        particles();
    },[])

    return (
        <div className="homeMain">
            <div id="particles-js"></div>
            <div className='container'>
                <div className='planet-shadow'></div>
                <div className='planet'></div>
                <div className='orbit'></div>
                <div className='moon-shadow'></div>
                <div className='moon'></div>
                <div className='star-1'></div>
                <div className='star-2'></div>
            </div>
            <div className='small-stars'>
                <div className='small-star' id='small-star-1'></div>
                <div className='small-star' id='small-star-2'></div>
                <div className='small-star' id='small-star-3'></div>
                <div className='small-star' id='small-star-4'></div>
                <div className='small-star' id='small-star-5'></div>
                <div className='small-star' id='small-star-6'></div>
            </div>

            <div className="home">
                <div className="homeContainer">
                    <h3 className="spaceTitle">Space<br /><span>/speɪs/</span></h3>
                    <p className="noun">noun</p>
                    <p className="description">1. a continuous area or expanse which is <span className="free">free</span>, available, or unoccupied.</p>
                    <p className="description">2. the dimensions of height, depth, and width within which all things exist and move.</p>
                </div>    
            </div>
        </div>
    );
   
}

export default Home;