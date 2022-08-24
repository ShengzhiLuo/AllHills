import React from 'react';
import { Link } from 'react-router-dom';

const TrailHeader = ({trail}) => (
    <header className='trail-head'>
        <div className='header-wrapper'>
            <ul className='head-loc'>
                <span>{trail.country}</span>
                <span>{'>'}</span>
                <span>{trail.city}</span>
                <span>{'>'}</span>
                <span>{trail.park_id}</span>
                <span>{'>'}</span>
                <span>{trail.name}</span>
            </ul>
            <input
                type="text"
                placeholder='search'
                className='mini-search'/>
        </div>
    </header>
)

export default TrailHeader