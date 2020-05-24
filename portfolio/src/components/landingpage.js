import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <div>
                 <Grid className="landing-grid"></Grid>
                 <Cell col={12}></Cell>
            </div>
        )
    }
}

export default Landing; 