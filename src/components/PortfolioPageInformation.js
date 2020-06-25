import React, { Component } from 'react';

class PortfolioPageInformation extends Component {
    render() {

        const websiteObject = {
            IAmManny: {
                site: 'https://upbeat-pare-9ca7a2.netlify.app/',
                img: './pictures/IAmManny.jpg',
                alt: 'IAmManny',
                text: `A react based application, using animejs, TwitchEmbed, and javascript to create a Twitch Streamer's personal site. The basic goal of this project was to learn animejs and TwitchEmded, and practice css-grid and flexbox layout. I also learned more about the @media tag while working on this website. Click on the picture to see the website live.`,
                key: 1
            },

            FFXIV: {
                site: 'https://final-fantasy-project.herokuapp.com/',
                img: './pictures/FFXIV.jpg',
                alt: 'FFXIV',
                text: `A react based application, using axios for API calls, and bootstrap as a framework. The goal of this website was to familiarize myself with axios and API calls, and later on getting a feel for Bootstrap if I ever needed to make websites with it instead of creating the CSS from scratch. Click on the picture to see the website live.`,
                key: 2
            },

            AnimalCrossing: {
                site: 'https://shielded-lake-76706.herokuapp.com/',
                img: './pictures/AnimalCrossing.jpg',
                alt: 'Animal Crossing',
                text: `A react based application, using mongoose/node for data storage and animejs for minor effects. The main goal of this website was to familiarize myself with objects and back end capabilities, including pulling data from separate parts of the backend to generate and add items to it. Click on the picture to see the website live.`,
                key: 3
            },

            BlackJack: {
                site: 'https://nekublackjack.netlify.app/',
                img: './pictures/BlackJack.jpg',
                alt: 'Black Jack',
                text: `A javascript based application, using mostly CSS and HTML. The first website I created, using nothing but base javascript and the CSS library animejs to make the cards move. Click on the picture to see the website live.`,
                key: 4
            }
        }



        return (
            <div className='portfolioPageInformation' id='portfolioPageInformation'>
                <div>
                    {
                        Object.keys(websiteObject).map((key) => {
                            return <div key={websiteObject[key].key}>
                                <a href={websiteObject[key].site}>
                                    <img src={require(`${websiteObject[key].img}`)} alt={websiteObject[key].alt} />
                                </a>
                                <p>{websiteObject[key].text}</p>
                            </div>
                        })
                    }
                </div>
            </div >
        );
    }
}

export default PortfolioPageInformation;