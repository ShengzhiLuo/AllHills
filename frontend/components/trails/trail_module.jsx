import React from 'react';
import { Link } from 'react-router-dom';


const TrailModule = ({ trail }) => (
    <Link  id = 'trail-module-link' to={`/trails/${trail.id}`}>
        <div id="trail-module">
            <div>
                <img  className ="trail-photo" src={trail.photoUrl} alt={trail.name} />
            </div>
            <div id='trail-window'>
                <h1 id = 'trail-name'>{trail.name}</h1>
                <p>park</p>
                <div id = 'flex'>
                    <div className='difficulty' id={trail.difficulty_level}>{trail.difficulty_level}</div>
                    <div id="star"> review star</div>
                </div>
                <div id='lower-info'>
                    <div>Length: {trail.length} km • {trail.estimated_time}</div>
                </div>
            </div>
        </div>
    </Link>
)


export default TrailModule;
