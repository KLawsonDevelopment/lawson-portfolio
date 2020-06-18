import React, { Component } from 'react';

class CurrentProjectInformation extends Component {
    render() {
        return (
            <div className='currentProjectInformation' id='currentProjectInformation'>
                Currently I am working on my portfolio site, using all of the knowledge I've gained over the last few months to tackle it.
                I'm using React as my baseline, as I'm comfortable with it and more prepared to experiment with it.
                I'm using CSS Grid and flexbox for placement of items to make sure I can shift things as I need them.
                I'll be using animejs to help make the page feel more 'alive', like adding effects that help the buttons grow and shift the content off the page on use.
                The wireframe I had for this project was almost exactly to what you're seeing now, please see to the right, the only things that immediately
                changed was 1) the color pallet went from mostly black and blue to off black, darker blue, and off white. I reached out to some people to help me with the hex codes.
                I'm adding in some comments within the code to make sure if I ever need to come back and adjust this portfolio like adding other sites I've created
                or adjusting descriptions as I adjust the projects.
            </div>
        );
    }
}

export default CurrentProjectInformation;