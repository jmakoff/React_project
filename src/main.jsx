'use strict'
var React = require('react');
var ReactDom = require('react-dom');
var Slider = require('react-slick');
var ReactSlick = React.createClass({
    render: function () {
        var settings = {
            docs: true
        }
        return (
            <div className="slider">
                <Slider {...settings}>
                    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
                    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
                    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
                    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
                    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
                    {/*<div className="text-center" id="text_1"><h3>THE HAM IS A PSD TEMPLATE</h3></div>
                    <div className="text-center" id="text_2">WE ARE CREATIVE</div>
                    <div className="text-center" id="text_3"><h4>quis nostrud exercitation ullamco laboris nisi </h4></div>
                    <div className="my_icon my_icon_next"></div>
                    <div className="my_icon my_icon_prev"></div>

                    <div id="buttons">
                        <button className="btn my-btn" >EXPLORE NOW</button>
                        <button className="btn my-btn" id="sec-btn">PURCHASE NOW</button>
                    </div>*/}
                </Slider>

            </div>
        )
    }
})


ReactDom.render(<ReactSlick/>, document.getElementById('first-block'));