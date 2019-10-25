import React, {useState, useEffect} from 'react';
import './ItemDetail.scss';
import { Link } from 'react-router-dom';

function ItemDetail({match}) {

    useEffect(()=>{
        fetchItem();
        console.log(match)
    },[match.params.id])

    const [item, setItem] = useState({
        images: {}
    });

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://api.nasa.gov/planetary/apod?api_key=myBymClPOGzEDNVzSHRctazuS2oCdABlnGLEtdfd&date=${match.params.id}&hd=true`);
        const item = await fetchItem.json();
        setItem(item);
        console.log(item.url);
    }

    // const imgOrVid = item.url.toString().match('.jpg') ? <img src={item.hdurl} alt=""/> : 
    //     <div className="videoContainer">
    //         <iframe className="video" src="https://www.youtube.com/embed/AhWMOkrzKzs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    //     </div>;

    return (
        <div className="itemDetail">
            <h3>{item.title}</h3>
            <div className="itemImage">
                
            </div>
            <div className="itemDescription">
                <p>{item.explanation}</p>
            </div>
            
            <Link to="/apod" className="backButton">Back to images</Link>
        </div>
    );
    
}

export default ItemDetail;