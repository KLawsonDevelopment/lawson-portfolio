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
                        <img src={require('./pictures/IAmManny.jpg')} alt='IAmManny' className='iAmMannyPic'/>
                    </a>
                    EXPLINATION HERE
                </div>

                <div className='FFXIV'>
                    <a href='https://final-fantasy-project.herokuapp.com/'>
                        <img src={require('./pictures/FFXIV.jpg')} alt="FFXIV" className='FFXIVPic'/>
                    </a>
                    EXPLINATION HERE
                </div>

                <div className='animalCrossing'>
                    <a href='https://shielded-lake-76706.herokuapp.com/'>
                        <img src={require('./pictures/AnimalCrossing.jpg')} alt='Animal Crossing' className='animalCrossingPic'/>
                    </a>
                    EXPLINATION HERE
                </div>

                <div className='characterData'>
                    <a href='https://character-data.herokuapp.com/'>
                        <img src={require('./pictures/CharacterData.jpg')} alt='Character Data' className='characterDataPic'/>
                    </a>
                    EXPLINATION HERE
                </div>

                <div className='blackJack'>
                    <a href='https://nekublackjack.netlify.app/'>
                        <img src={require('./pictures/BlackJack.jpg')} alt='Black Jack' className='blackJackPic'/>
                    </a>
                    EXPLINATION HERE
                </div>

            </div>
        );
    }
}

export default PortfolioPageInformation;