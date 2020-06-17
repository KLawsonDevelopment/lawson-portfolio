import React, { Component } from 'react';
import MenuBar from './MenuBar';
import InformationBox from './InformationBox';
import Header from './Header';
import Footer from './Footer';

class CssBox extends Component {
    render() {
        return (
            <div className='cssBox'>
                <Header></Header>
                <MenuBar></MenuBar>
                <InformationBox></InformationBox>
                <Footer></Footer>
            </div>
        );
    }
}

export default CssBox;