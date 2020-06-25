import React, { Component } from 'react';

class CurrentProjectButton extends Component {

    displayInformation = () => {

        var aboutMe = document.getElementById('aboutMeInformation')
        aboutMe.classList.remove('showClass')

        var portfolioPage = document.getElementById('portfolioPageInformation')
        portfolioPage.classList.remove('showClass')

        var currentProject = document.getElementById('currentProjectInformation')
        currentProject.classList.add('showClass')
    }

    render() {
        return (
            <button className='currentProjectButton' onClick={this.displayInformation}>
                CURRENT PROJECT
            </button>
        );
    }
}

export default CurrentProjectButton;