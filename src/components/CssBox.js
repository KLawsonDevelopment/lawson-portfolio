import React, { Component } from 'react';
import MenuBar from './MenuBar';
import InformationBox from './InformationBox';

class CssBox extends Component {
    render() {
        return (
            <div className='cssBox'>
                CSSBOX STARTS HERE
                <MenuBar></MenuBar>
                <InformationBox></InformationBox>
            </div>
        );
    }
}

export default CssBox;