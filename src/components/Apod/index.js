import React, {useState, useEffect} from 'react';
import './Apod.scss';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { starAnim } from './staranim';

function AllImages() {
    var Y = new Date().getFullYear();
    var M = new Date().getMonth() + 1;
    var D = new Date().getDate();
    
    var date1 = [Y,M,D].join('-');
    var date2 = '';

    var D2 = D - 5;
    var M2 = M;
    var Y2 = Y;
    //console.log(date1)
    if( (D-6) < 0 ){
        var daysOver = Math.floor(D-5);
        M2 = M > 1 ? (M - 1) : 12;
        if(M2 === 12){
            Y2 -= 1;
            D2 = new Date(Y2, M2, 0).getDate() - daysOver;
            date2 = [Y2,M2,D2].join('-');
        }else{
            D2 = new Date(Y, M2, 0).getDate() - daysOver;
            date2 = [Y2,M2,D2].join('-');
        }
    }
    if( (D-6) > 0 ){
        date2 = [Y2,M2,D2].join('-');
    }
    console.log(date2);

    useEffect(()=>{
        fetchItems();
        starAnim();
    },[])

    const [reversedItems, setItems] = useState([]);

    const fetchItems = async () => {
        // My API KEY myBymClPOGzEDNVzSHRctazuS2oCdABlnGLEtdfd
        // https://github.com/nasa/apod-api
        const data = await fetch(`https://api.nasa.gov/planetary/apod?api_key=myBymClPOGzEDNVzSHRctazuS2oCdABlnGLEtdfd&start_date=${date2}&end_date=${date1}`);

        const allItems = await data.json();
        let reversedItems = [];
        for(var i=allItems.length-1; i>=0 ; i--){
            reversedItems.push(allItems[i]);
        }
        console.log(reversedItems);
        setItems(reversedItems);
        
    }

    const renderItems = reversedItems.map( (item,i) => (
        item.url.match('.jpg') ? 
        <div key={item.date} className="imageBox">
            <Fade left>
                <div className="left">
                    <div className="imageContainer">
                        <div className="image" style={{backgroundImage: `url(${item.url})`}}></div>
                    </div>
                </div>
            </Fade>
            <Fade left>
                <div className="right">
                    <p className="itemTitle">{item.title}</p>
                    <p className="itemDate">{item.date}</p>
                    <p className="itemExplanation">{item.explanation}</p>
                    <Link to={`/apod/${item.date}`} key={i} className="imageLink">See in HD</Link>                            
                </div>
            </Fade>
        </div>
         :
        <div key={item.date} className="imageBox">
            <Fade right>
                <div className="left">
                    <div className="imageContainer">
                        <div className="videoContainer">
                            <iframe className="video" src="https://www.youtube.com/embed/AhWMOkrzKzs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade right>
                <div className="right">
                    <p className="itemTitle">{item.title}</p>
                    <p className="itemDate">{item.date}</p>
                    <p className="itemExplanation">{item.explanation}</p>
                    <Link to={`/apod/${item.date}`} key={i} className="imageLink">See in HD</Link>                            
                </div>
            </Fade>
        </div>
    ))

    return (
        
        <div className="imagesContainer" id="outer">
            <canvas id="star-canvas"></canvas>
            {renderItems}
        </div>
        
    );

}

export default AllImages;