import React from 'react';
import { Link } from 'react-router-dom';


const TrailModule = ({ trail }) => (
    <Link to={`/trails/${trail.id}`}>
        <div id={`${trail.difficulty_level}-module`}>
            <div><img alt={trail.name} /></div>
            <div id='trail-window'>
                <h1>{trail.name}</h1>
                <p>park</p>
                <div id = 'flex'>
                    <div className='difficulty' id={trail.difficulty_level}>{trail.difficulty_level}</div>
                    <div id="star">star</div>
                </div>
                <div id='lower-info'>
                    <div>Length: {trail.length}km</div>•<div>{trail.estimated_time}</div>
                </div>
            </div>
        </div>
    </Link>
)


export default TrailModule;
