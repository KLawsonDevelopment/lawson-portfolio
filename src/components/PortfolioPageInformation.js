import React, { Component } from 'react';

class PortfolioPageInformation extends Component {
    render() {
        return (
            <div className='portfolioPageInformation' id='portfolioPageInformation'>
                <div className='pleaseScroll'>
                    Please scroll left to right.
                </div>

                <div className='testDiv1'>
                    <img src={require('./pictures/test-image.jpg')} className='testImage1' alt='test' />
                Test 1
                </div>
                <div className='testDiv2'>
                    <img src={require('./pictures/test-image.jpg')} className='testImage2' alt='test' />
                Test 2
                </div>
                <div className='testDiv3'>
                    <img src={require('./pictures/test-image.jpg')} className='testImage3' alt='test' />
                Test 3
                </div>
                <div className='testDiv4'>
                    <img src={require('./pictures/test-image.jpg')} className='testImage4' alt='test' />
                Test 4
                </div>
            </div>
        );
    }
}

export default PortfolioPageInformation;