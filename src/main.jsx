'use strict'
var React = require('react');
var ReactDom = require('react-dom');

var Slider = require('react-slick');

var ReactSlick = React.createClass({ //slider
    render: function () {
        var settings = {
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,

        }
        return (
            <div className="slider">
                <Slider {...settings}>
                    <img src="http://www.planwallpaper.com/static/images/i-should-buy-a-boat.jpg"/>
                    <img src="http://www.planwallpaper.com/static/images/wallpapers-20.jpg"/>
                    <img src="http://www.planwallpaper.com/static/images/ZhGEqAP.jpg"/>
                    {/*<div className="text-center" id="text_1"><h3>THE HAM IS A PSD TEMPLATE</h3></div>
                     <div className="text-center" id="text_2">WE ARE CREATIVE</div>
                     <div className="text-center" id="text_3"><h4>quis nostrud exercitation ullamco laboris nisi </h4></div>
                     <div className="my_icon my_icon_next"></div>
                     <div className="my_icon my_icon_prev"></div>

                     <div id="buttons">
                     <button className="btn my-btn" >EXPLORE NOW</button>
                     <button className="btn my-btn" id="sec-btn">PURCHASE NOW</button>
                     </div>*/}
                </Slider>{/*here carousel*/}

            </div>
        )
    }
})
ReactDom.render(<ReactSlick/>, document.getElementById('first-block'));
/*carousel*/

// импорт необходимых для настройки маршрутизации объектов из модуля react-router
var router = require('react-router');

var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
var IndexRoute = router.IndexRoute;
var hashHistory = router.hashHistory;
//imoprt views
var WebDesign = require('./jsx/services/webdesign.jsx');


ReactDOM.render(<Router history={hashHistory}>

        <Route path="#/webDesign" component={WebDesign}/>
</Router>, document.getElementById('serv_text'));




