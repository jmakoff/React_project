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
var SeoService = require('./jsx/services/seoService.jsx');
var OnlineMarketing = require('./jsx/services/onlineMarketing.jsx')


class Services extends React.Component {
    render() {
        return (
            <div>
                <div className="btn-group btn-group-justified" id="buttons_serv">
                    <div className="btn-group">
                        <Link to="webDesign">
                            <button className=" btn btn-default"> Web Design</button>
                        </Link>
                    </div>
                    <div className="btn-group">
                        <Link to="grDesign">
                            <button className=" btn btn-default"> Graphic Design</button>
                        </Link>
                    </div>
                    <div className="btn-group">
                        <Link to="onlineSupport">
                            <button className=" btn btn-default">Online Support</button>
                        </Link>
                    </div>
                    <div className="btn-group">
                        <Link to="appDesign">
                            <button className=" btn btn-default"> App Design</button>
                        </Link>
                    </div>
                    <div className="btn-group">
                        <Link to="onlineMarketing">
                            <button className=" btn btn-default"> Online Marketing</button>
                        </Link>
                    </div>
                    <div className="btn-group">
                        <Link to="seoService">
                            <button className=" btn btn-default"> Seo Service</button>
                        </Link>
                    </div>
                </div>
                <div id="serv_text">{this.props.children}</div>
            </div>
        )
    }
}
ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" component={Services}>
        <IndexRoute component={WebDesign}/>
        <Route path="webDesign" component={WebDesign}/>
        <Route path="grDesign" component={GrDesign}/>
        <Route path="onlineSupport" component={OnlineSupport}/>
        <Route path="appDesign" component={AppDesign}/>
        <Route path="onlineMarketing" component={OnlineMarketing}/>
        <Route path="seoService" component={SeoService}/>
    </Route>
</Router>, document.getElementById('block_serv'));
//end of routing block
/*filter*/
var PHOTODATA = [{
    id: 1,
    category: 'Graphic Design',
    imageUrl: 'https://dummyimage.com/400x300/000/fff&text=Graphic+Design'
}, {
    id: 2,
    category: 'Web Design',
    imageUrl: 'https://dummyimage.com/400x300/f01111/080808&text=Web+Design'
},
    {
        id: 3,
        category: 'Landing Pages',
        imageUrl: 'https://dummyimage.com/400x300/522a2a/4cf518&text=Landing+Pages'
    }, {
        id: 4,
        category: 'Wordpress',
        imageUrl: 'https://dummyimage.com/400x300/665454/03ff20&text=Wordpress'
    }, {
        id: 5,
        category: 'Graphic Design',
        imageUrl: 'https://dummyimage.com/400x300/000/fff&text=Graphic+Design'
    }, {
        id: 6,
        category: 'Landing Pages',
        imageUrl: 'https://dummyimage.com/400x300/522a2a/4cf518&text=Landing+Pages'
    },
    {
        id: 7,
        category: 'Wordpress',
        imageUrl: 'https://dummyimage.com/400x300/665454/03ff20&text=Wordpress'
    }];

/*Create a component of the filter panel*/

var FilterPanel = React.createClass({

    render: function () {
        return (
            <a onClick={this.props.onClick}>{this.props.category}</a>

        )
    }

});


/*
 Create a layout component for one photo
 */

var Photo = React.createClass({

    render: function () {
        return (
            <div className="photo-container" data-category={this.props.category}><img src={this.props.imageUrl}/></div>
        );
    }


});


/*
 Create a final collection of photos in photoGallery
 */

var PhotoGallery = React.createClass({

    getInitialState: function () {
        return {
            displayedCategories: PHOTODATA,
            active: false
        };
    },
    toggleActive: function () {
        this.setState({
            active: !this.state.active
        });
    },

    selectCategory: function (element) {
        console.log('element is: ' + element);
        var categoryName = element.toLowerCase();
        var displayedCategories = PHOTODATA.filter(function (el) {

            var searchValue = el.category.toLowerCase();
            return searchValue.indexOf(categoryName) !== -1;
        });

        this.setState({
            displayedCategories: displayedCategories

        });

    },
    resetFilter: function (element) {
        this.setState({
            displayedCategories: PHOTODATA

        });
    },


    render: function () {
        var buttonClass = this.state.active ? 'active' : '';
        var categoryToSelect = this.selectCategory;
        var getUniqueCategories = [];
        PHOTODATA.forEach(function (el) {
            if (getUniqueCategories.indexOf(el.category) === -1) getUniqueCategories.push(el.category);
        })

        return (
            <div className="overlay-photogallery">

                <div className="filter-panel">
                    <a className="resetBtn" onClick={this.resetFilter}> ALL </a>
                    {
                        getUniqueCategories.map(function (el, i) {
                            var boundClick = categoryToSelect.bind(null, el);
                            return <FilterPanel onClick={boundClick} category={el} key={i}/>
                        })

                    }

                </div>
                <div className="PhotoGallery center-block">
                    {
                        this.state.displayedCategories.map(function (el) {
                            return <Photo key={el.id} imageUrl={el.imageUrl} category={el.category}/>
                        })

                    }
                </div>
            </div>
        );


    }


});

ReactDOM.render(<PhotoGallery />, document.getElementsByClassName('filter-images')[0]);


/*react-scroll block*/

var Scroll = require('react-scroll');


var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;


var Section = React.createClass({
    componentDidMount: function () {

        Events.scrollEvent.register('begin', function (to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function (to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();

    },
    componentWillUnmount: function () {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    },
    scrollToTop: function () {
        scroll.scrollToTop();
    },
    scrollToBottom: function () {
        scroll.scrollToBottom();
    },
    scrollTo: function () {
        scroll.scrollTo(100);
    },
    scrollMore: function () {
        scroll.scrollMore(100);
    },
    handleSetActive: function (to) {
        console.log(to);
    },
    render: function () {
        return (
            <div>
                <div className="btn btn-link btn_custom" onClick={() => scroll.scrollTo(0)}>Home</div>
                <div className="btn btn-link btn_custom" onClick={() => scroll.scrollTo(1200)}>About</div>
                <div className="btn btn-link btn_custom" onClick={() => scroll.scrollTo(800)}>Service</div>
                <div className="btn btn-link btn_custom" onClick={() => scroll.scrollTo(2000)}>Testimonial</div>
                <div className="btn btn-link btn_custom" onClick={() => scroll.scrollTo(3700)}>Blog</div>
                <div className="btn btn-link btn_custom" onClick={() => scroll.scrollTo(2600)}>Team</div>
                <div className="btn btn-link btn_custom" onClick={() => scroll.scrollTo(5500)}>Contact</div>
            </div>
        );
    }
});

ReactDOM.render(
    <Section />,
    document.getElementById('header_block_buttons')
);

import {Link as ScrollLink} from 'react-scroll'
let scrollOptions = {
    duration: 1000,
    smooth: true,
    offset: -100
};
//scroll to btn
ReactDOM.render(<ScrollLink className="footer-btn" to="first-block"{...scrollOptions}><i
    className="icon icon-arrow-up"/> </ScrollLink>, document.getElementById('btn-foot'))
ReactDOM.render(<ScrollLink to="about-block"{...scrollOptions}>
    <button className="btn my-btn">EXPLORE NOW</button>
</ScrollLink>, document.getElementById('first-btn'))
ReactDOM.render(<ScrollLink to="testimonial"{...scrollOptions}>
    <button className="btn my-btn ">PURCHASE NOW</button>
</ScrollLink>, document.getElementById('sec-btn'))


//realization of feedback block down

class Message extends React.Component {
    render() {
        return (
            <div>
                {this.props.items.map((item) => {
                    return <div className="message" key={item.id}>
                        <div className="mesg-title clearfix">
                            <div className="mesg-header">{item.title}</div>
                            <div className="close">
                                <i className="fa fa-times" aria-hidden="true" data-id={item.id}
                                   onClick={this.props.removeHandler}> </i>
                            </div>
                        </div>
                        <div className="mesg-body">
                            {item.message}
                        </div>
                    </div>
                })}
            </div>

        )
    }
}
;
class Feedback extends React.Component {
    constructor() {
        super();
        this.state = {
            messages: this.getAll(),
            editHeadings: false,
            error: ''
        }
        this.removeItem = this.removeItem.bind(this);

        this.clickHandler = this.clickHandler.bind(this);
        this.messages = [
            {
                id: `${Date.now()}`,
                title: 'Message Title',
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

            },
            {
                id: `${Date.now()}` + 1,
                title: 'Title',
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliqua.'

            }
        ];
    }

    createNewItem() {
        var newItem = {
            id: `${Date.now()}`,
            title: document.getElementById('titleInput').value,
            message: document.getElementById('messageInput').value
        };
        this.messages.push({
            id: `${Date.now()}`,
            title: newItem.title,
            message: newItem.message
        })

        // очистим поля после добавления данных

        document.getElementById('titleInput').value = '';
        document.getElementById('messageInput').value = '';
    }


    clickHandler() {
        let title = document.getElementById('titleInput').value;
        let message = document.getElementById('messageInput').value;
        if (title == '' || message == '') {
            this.setState({error: 'Не все поля заполнены!'});
        } else {
            this.setState({error: ''});
            this.createNewItem();
        }
    }

    // удалить элемент
    removeItem(e) {
        let id = e.target.dataset.id
        var newData = [];
        for (var i = 0; i < this.messages.length; i++) {

            if (this.messages[i].id === id) {
                console.log('deleted item id' + this.messages[i].id);
                continue;
            }
            newData.push(this.messages[i])
        }
        this.messages = newData;
        this.updateTasks()
    }

    // получить все элементы
    getAll() {
        return this.messages
    }
    updateTasks() {
        this.setState({ tasks: this.getAll() })
    }



    render() {
        var remove = this.removeItem.bind(this)

        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="message-container">
                            <Message items={this.getAll()}
                                     removeHandler={remove}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div
                        className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
                        <form action="#" className="comment-form">
                            <input type="text" placeholder="Title" className="comment-title" id="titleInput"/>
                            <textarea className="comment-body" id="messageInput" rows="3"
                                      placeholder="Message"></textarea>
                        </form>
                    </div>
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <div className="title-wrapper">
                            <h4 className="form-title">Leave us a message</h4>
                            <button className="_btn" onClick={this.clickHandler}><i className="fa fa-plus"
                                                                                    aria-hidden="true"> </i>add comment
                            </button>
                            <p className="error">{this.state.error}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

ReactDOM.render(<Feedback/>, document.getElementById('feedbackBody'));





