import React, { Component } from 'react';
import AboutMeButton from './AboutMeButton';
import PortfolioPageButton from './PortfolioPageButton';
import CurrentProjectButton from './CurrentProjectButton';

class MenuBar extends Component {
    render() {
        return (
            <div className='menuBar'>
                <AboutMeButton/>
                <PortfolioPageButton/>
                <CurrentProjectButton/>
            </div>
        );
    }
}

export default MenuBar;