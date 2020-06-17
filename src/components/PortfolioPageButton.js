import React, { Component } from 'react';

class PortfolioPageButton extends Component {

    displayInformation = () => {

        var aboutMe = document.getElementById('aboutMeInformation')
        aboutMe.classList.remove('showClass')

        var portfolioPage = document.getElementById('portfolioPageInformation')
        portfolioPage.classList.add('showClass')

        var currentProject = document.getElementById('currentProjectInformation')
        currentProject.classList.remove('showClass')
    }

    render() {
        return (
            <button className='portfolioButton' onClick={this.displayInformation}>
                PORTFOLIO BUTTON
            </button>
        );
    }
}

export default PortfolioPageButton;