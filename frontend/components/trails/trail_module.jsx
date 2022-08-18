import React from 'react';
import { Link } from 'react-router-dom';


const TrailModule = ({ trail }) => (
    <Link to={`/trails/${trail.id}`}>
        <div id="trail-module">
            <div>
                <img className={trail.id === 1 ? 'trail-photo' : 'trail-photo hidden'} src={window.trail1} alt={trail.name} />\
                <img className={trail.id === 2 ? 'trail-photo' : 'trail-photo hidden'} src={window.trail2} alt={trail.name} />
                <img className={trail.id === 3 ? 'trail-photo' : 'trail-photo hidden'} src={window.trail3} alt={trail.name} />
                <img className={trail.id === 4 ? 'trail-photo' : 'trail-photo hidden'} src={window.trail4} alt={trail.name} />
                <img className={trail.id === 5 ? 'trail-photo' : 'trail-photo hidden'} src={window.trail5} alt={trail.name} />
                <img className={trail.id === 6 ? 'trail-photo' : 'trail-photo hidden'} src={window.trail6} alt={trail.name} />
                <img className={trail.id === 7 ? 'trail-photo' : 'trail-photo hidden'} src={window.trail7} alt={trail.name} />
            </div>
            <div id='trail-window'>
                <h1>{trail.name}</h1>
                <p>park</p>
                <div id = 'flex'>
                    <div className='difficulty' id={trail.difficulty_level}>{trail.difficulty_level}</div>
                    <div id="star"> review star</div>
                </div>
                <div id='lower-info'>
                    <div>Length: {trail.length}km • {trail.estimated_time}</div>
                </div>
            </div>
        </div>
    </Link>
)


export default TrailModule;
