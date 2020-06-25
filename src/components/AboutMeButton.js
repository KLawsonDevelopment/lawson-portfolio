import React, { Component } from 'react';

class AboutMeButton extends Component {

    displayInformation = () => {

        var aboutMe = document.getElementById('aboutMeInformation')
        aboutMe.classList.add('showClass')

        var portfolioPage = document.getElementById('portfolioPageInformation')
        portfolioPage.classList.remove('showClass')

        var currentProject = document.getElementById('currentProjectInformation')
        currentProject.classList.remove('showClass')
    }

    render() {
        return (
            <button className='aboutMeButton' onClick={this.displayInformation}>
                ABOUT ME
            </button>
        );
    }
}

export default AboutMeButton;