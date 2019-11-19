import React from 'react';

export default
function Map(props) {
    return (
    <div className="map">
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <g>
                <rect x="0" y="0" width="200" height="200" fill="blue" strokeWidth="4"/>
                <circle cx="15" cy="15" r="10" fill="white" data-placeid = "1" onClick={props.onPlace} />
                <circle cx="40" cy="15" r="10" fill="white" data-placeid = "2" onClick={props.onPlace}/>
                <circle cx="65" cy="15" r="10" fill="white" data-placeid = "3" onClick={props.onPlace}/>
                <circle cx="90" cy="15" r="10" fill="white" data-placeid = "4" onClick={props.onPlace}/>
                <circle cx="115" cy="15" r="10" fill="white" data-placeid = "5" onClick={props.onPlace}/>
            </g>
        </svg>
    </div>
    )
}


