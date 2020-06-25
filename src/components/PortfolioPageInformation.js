import React, { Component } from 'react';

class PortfolioPageInformation extends Component {
    render() {
        return (
            <div className='portfolioPageInformation' id='portfolioPageInformation'>
                <h2 className='pleaseScroll'>
                    Please scroll up and down.
                </h2>

                <div className='iAmManny'>
                    <a href='https://upbeat-pare-9ca7a2.netlify.app/'>
                        <img src={require('./pictures/IAmManny.jpg')} alt='IAmManny' className='iAmMannyPic'></img>
                    </a>
                    EXPLINATION HERE
                </div>

                <div className='FFXIV'>
                    <a href='https://final-fantasy-project.herokuapp.com/'>
                        <img src={require('./pictures/FFXIV.jpg')} alt="FFXIV" className='FFXIVPic'></img>
                    </a>
                    EXPLINATION HERE
                </div>
            </div>
        );
    }
}

export default PortfolioPageInformation;