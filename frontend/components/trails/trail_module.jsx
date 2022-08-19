import React from 'react';
import { Link } from 'react-router-dom';


const TrailModule = ({ trail }) => (
    <Link  id = 'trail-module-link' to={`/trails/${trail.id}`}>
        <div id="trail-module">
            <div>
                <img className={trail.id === 8 ? 'trail-photo' : 'trail-photo hidden'} src={window.trail1} alt={trail.name} />\
                <img className={trail.id === 9 ? 'trail-photo' : 'trail-photo hidden'} src={window.trail2} alt={trail.name} />
                <img className={trail.id === 10 ? 'trail-photo' : 'trail-photo hidden'} src={window.trail3} alt={trail.name} />
                <img className={trail.id === 11 ? 'trail-photo' : 'trail-photo hidden'} src={window.trail4} alt={trail.name} />
                <img className={trail.id === 12 ? 'trail-photo' : 'trail-photo hidden'} src={window.trail5} alt={trail.name} />
                <img className={trail.id === 13 ? 'trail-photo' : 'trail-photo hidden'} src={window.trail6} alt={trail.name} />
                <img className={trail.id === 14 ? 'trail-photo' : 'trail-photo hidden'} src={window.trail7} alt={trail.name} />
                <img className={trail.id === 15 ? 'trail-photo' : 'trail-photo hidden'} src={window.trail8} alt={trail.name} />
                <img className={trail.id === 16 ? 'trail-photo' : 'trail-photo hidden'} src={window.trail9} alt={trail.name} />
                <img className={trail.id === 17 ? 'trail-photo' : 'trail-photo hidden'} src={window.trail10} alt={trail.name} />
                <img className={trail.id === 18 ? 'trail-photo' : 'trail-photo hidden'} src={window.trail11} alt={trail.name} />
                <img className={trail.id === 19 ? 'trail-photo' : 'trail-photo hidden'} src={window.trail12} alt={trail.name} />
                <img className={trail.id === 20 ? 'trail-photo' : 'trail-photo hidden'} src={window.trail13} alt={trail.name} />
                <img className={trail.id === 21 ? 'trail-photo' : 'trail-photo hidden'} src={window.trail14} alt={trail.name} />
                <img className={trail.id === 22 ? 'trail-photo' : 'trail-photo hidden'} src={window.trail15} alt={trail.name} />
                <img className={trail.id === 23 ? 'trail-photo' : 'trail-photo hidden'} src={window.trail16} alt={trail.name} />
                <img className={trail.id === 24 ? 'trail-photo' : 'trail-photo hidden'} src={window.trail17} alt={trail.name} />
                <img className={trail.id === 25 ? 'trail-photo' : 'trail-photo hidden'} src={window.trail18} alt={trail.name} />
                <img className={trail.id === 26 ? 'trail-photo' : 'trail-photo hidden'} src={window.trail19} alt={trail.name} />
                <img className={trail.id === 27 ? 'trail-photo' : 'trail-photo hidden'} src={window.trail20} alt={trail.name} />
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
