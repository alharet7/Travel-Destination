import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './TourDetails.css'
import Header from '../header/Header';



function TourDetails(props) {

    const params = useParams();
    const TourId = params.id;

    let ArrayFilterdById = props.toursdata.filter(tuor => TourId === tuor.id);

    const inf = `${ArrayFilterdById[0]["name"]}, ` + `${ArrayFilterdById[0]["info"]}` + ` And the Price is: ${ArrayFilterdById[0]["price"]}`;


    const [showMore, setShowMore] = useState(false);



    return (
        <>
            <Header />
            <div className='PlaceContainer'>
                {ArrayFilterdById.map((place) => {
                    return (

                        <div key={place.id}>
                            <div className='PlaceDiv'>
                                <img className='PlaceImg' src={place.image} alt={place.name}></img>
                                <h4 className='PlaceName'>{place.name}</h4>
                                <h6 className='infobox'>
                                    {showMore ? inf : `${inf.substring(0, 190)}`}
                                    <button className="btn" onClick={() => setShowMore(!showMore)}>
                                        {showMore ? "Show less" : "Show more"}
                                    </button>
                                </h6>

                            </div>
                        </div>
                    )
                })}


            </div>

        </>)
}

export default TourDetails;