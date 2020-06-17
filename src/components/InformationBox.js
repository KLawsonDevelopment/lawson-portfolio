import React, { Component } from 'react';
import AboutMeInformation from './AboutMeInformation';
import PortfolioPageInformation from './PortfolioPageInformation'
import CurrentProjectInformation from './CurrentProjectInformation';

class InformationBox extends Component {
    render() {
        return (
            <div className='informationBox'>
                <AboutMeInformation></AboutMeInformation>
                <PortfolioPageInformation></PortfolioPageInformation>
                <CurrentProjectInformation></CurrentProjectInformation>
            </div>
        );
    }
}

export default InformationBox;