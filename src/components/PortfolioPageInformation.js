import React, { Component } from 'react';

class PortfolioPageInformation extends Component {
    render() {

        const websiteObject = {
            IAmManny: {
                site: 'https://upbeat-pare-9ca7a2.netlify.app/',
                img: './pictures/IAmManny.jpg',
                alt: 'IAmManny',
                text: 'EXPLINATION HERE: IAmManny',
                key: 1
            },

            FFXIV: {
                site: 'https://final-fantasy-project.herokuapp.com/',
                img: './pictures/FFXIV.jpg',
                alt: 'FFXIV',
                text: 'EXPLINATION HERE: FFXIV',
                key: 2
            },

            AnimalCrossing: {
                site: 'https://shielded-lake-76706.herokuapp.com/',
                img: './pictures/AnimalCrossing.jpg',
                alt: 'Animal Crossing',
                text: 'EXPLINATION HERE: Animal Crossing',
                key: 3
            },

            CharacterData: {
                site: 'https://character-data.herokuapp.com/',
                img: './pictures/CharacterData.jpg',
                alt: 'Character Data',
                text: 'EXPLINATION HERE: Character Data',
                key: 4
            },

            BlackJack: {
                site: 'https://nekublackjack.netlify.app/',
                img: './pictures/BlackJack.jpg',
                alt: 'Black Jack',
                text: 'EXPLINATION HERE: Black Jack',
                key: 5
            }
        }



        return (
            <div className='portfolioPageInformation' id='portfolioPageInformation'>
                <h2 className='pleaseScroll'>
                    Please scroll up and down.
                </h2>
            <div>
                {
                    Object.keys(websiteObject).map((key) => {
                        return <div key={websiteObject[key].key}>
                            <a href={websiteObject[key].site}>
                                <img src={require(`${websiteObject[key].img}`)} alt={websiteObject[key].alt} />
                            </a>
                            {websiteObject[key].text}
                        </div>
                    })
                }
            </div>

            </div >
        );
    }
}

export default PortfolioPageInformation;