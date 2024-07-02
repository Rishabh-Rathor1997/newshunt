import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div className="container my-3 ">
                <h1 className="text-center about-head ">About Us </h1>
                <h3 className='text-center about-text'> This Application is developed by Rishabh Rathor.</h3>
                <div className="accordion " id="accordionExample about-bg">
                    <div className="accordion-item about-bg ">
                        <h2 className="accordion-header">
                            <button className="accordion-button about-bg" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Read Top Headlines
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body about-bg" >
                               <strong> Read Top Headlines Daily with NewsHunt - Get your daily dose of news.
                                More Intersting things in this Application is select your Feviout category.</strong>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item about-bg  my-3">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed about-bg" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                               Source of News
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body about-bg"  >
                              <strong> This Application use News API. It is free.  Get your daily dose of news.
                               News Api Providing you Top Headlines. to select your category.</strong>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item about-bg">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed about-bg" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                               Browser Compatible
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body about-bg" >
                              <strong> This Application is browser compatible. Works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera.</strong> 

                            </div>
                        </div>
                    </div>
                </div>




            </div>
        )
    }
}

export default About
