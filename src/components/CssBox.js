import React, { Component } from 'react';
import MenuBar from './MenuBar';
import InformationBox from './InformationBox';
import Name from './Name';
import Footer from './Footer';

class CssBox extends Component {
    render() {
        return (
            <div className='cssBox'>
                <Name></Name>
                <MenuBar></MenuBar>
                <InformationBox></InformationBox>
                <Footer></Footer>
            </div>
        );
    }
}

export default CssBox;