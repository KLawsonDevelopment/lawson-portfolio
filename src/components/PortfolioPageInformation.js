import React, { Component } from 'react';

class PortfolioPageInformation extends Component {
    render() {
        return (
            <div className='portfolioPageInformation' id='portfolioPageInformation'>
                <div className='testDiv'>
                    <img src={require('./pictures/test-image.jpg')} className='testImage' alt='test' />
                Test 1
                </div>
                <div className='testDiv'>
                    <img src={require('./pictures/test-image.jpg')} className='testImage' alt='test' />
                Test 2
                </div>
                <div className='testDiv'>
                    <img src={require('./pictures/test-image.jpg')} className='testImage' alt='test' />
                Test 3
                </div>
                <div className='testDiv'>
                    <img src={require('./pictures/test-image.jpg')} className='testImage' alt='test' />
                Test 4
                </div>
            </div>
        );
    }
}

export default PortfolioPageInformation;