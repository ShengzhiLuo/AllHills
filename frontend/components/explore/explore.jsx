import React from 'react';
import { Link } from 'react-router-dom';
import TrailModule from '../trails/trail_module';

class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.connectGrid = this.connectGrid.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllTrails();
    }
    connectGrid() {
        const allTrails = Array.from(this.props.trails);
        let grid = [];
        while (allTrails.length > 4) {
            let row = [];
        while (row.length < 4) {
            let t = (Math.floor(Math.random() * allTrails.length));
            row.push(allTrails[t]);
            allTrails.splice(t, 1);
        }
            grid.push(row);
        }
        let lastrow = [];
        while (allTrails.length > 0) {
            let t = (Math.floor(Math.random() * allTrails.length));
            lastrow.push(allTrails[t]);
            allTrails.splice(t, 1);
        }
        grid.push(lastrow);
        return grid;
      }
    
      render() {
        return (
          <div id='bg'>
            <div id='trails'>
              {this.connectGrid().map((row, i) => (
                <div className='gridrow' id={`row${i}`} key={i}>
                  {row.map((trail, i) => (
                    <TrailModule key={trail ? trail.id : i} trail={trail ? trail : ""} type='trail' />
                  ))}
                </div>
              ))
              }
            </div>
            <div id='placeholder'></div>
          </div>
          
        )
    };
}

export default Explore;
