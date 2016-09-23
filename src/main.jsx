'use strict'
var React = require('react');
var ReactDOM = require('react-dom');

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
ReactDOM.render(<ReactSlick/>, document.getElementById('first-block'));
/*carousel*/

// импорт необходимых для настройки маршрутизации объектов из модуля react-router
//routing block start
var router = require('react-router');

var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
var IndexRoute = router.IndexRoute;
var hashHistory = router.hashHistory;
//imoprt views
var WebDesign = require('./jsx/services/webdesign.jsx');
var GrDesign = require('./jsx/services/grDesign.jsx');
var OnlineSupport = require('./jsx/services/onlineSuport.jsx');
var AppDesign = require('./jsx/services/appDesign.jsx');
var SeoService = require('./jsx/services/SeoService.jsx');
var OnlineMarketing = require('./jsx/services/onlineMarketing.jsx')


class Services extends React.Component {
    render() {
        return (
            <div>
                <div className="btn-group btn-group-justified" id="buttons_serv">
                    <div className="btn-group">
                        <a className=" btn btn-default"><Link to="webDesign"> Web Design</Link></a>
                    </div>
                    <div className="btn-group">
                        <a className=" btn btn-default"><Link to="grDesign"> Graphic Design</Link></a>
                    </div>
                    <div className="btn-group">
                        <a className=" btn btn-default"><Link to="onlineSupport">Online Support</Link></a>
                    </div>
                    <div className="btn-group">
                        <a className=" btn btn-default"><Link to="appDesign"> App Design</Link></a>
                    </div>
                    <div className="btn-group">
                        <a className=" btn btn-default"><Link to="onlineMarketing"> Online Marketing</Link></a>
                    </div>
                    <div className="btn-group">
                        <a className=" btn btn-default"><Link to="seoService"> Seo Service</Link></a>
                    </div>
                </div>
                <div id="serv_text">{this.props.children}</div>
            </div>
        )
    }
}
ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" component={Services}>
        <Route path="webDesign" component={WebDesign}/>
        <Route path="grDesign" component={GrDesign}/>
        <Route path="onlineSupport" component={OnlineSupport}/>
        <Route path="appDesign" component={AppDesign}/>
        <Route path="onlineMarketing" component={OnlineMarketing}/>
        <Route path="seoService" component={SeoService}/>
    </Route>
</Router>, document.getElementById('block_serv'));
//end of routing block



