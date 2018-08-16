import React, { Component } from 'react';
import './App.css';
import features1 from './img/features-1.png';
import card1 from './img/card-1.png';
import card2 from './img/card-2.png';

const menu_item = [
    {
        Title: 'Home',
        Active: 'active',
        url: '#'
    },
    {
        Title: 'Features',
        Active: '',
        url: '#'
    },
    {
        Title: 'Demos',
        Active: '',
        url: '#'
    }
];

const features_item = [
    {
        url: features1,
        Text: 'Creative Pixel Perfect'
    },
    {
        url: features1,
        Text: 'Clean & Professional Codes'
    },
    {
        url: features1,
        Text: '100% Fully Responsive'
    },
    {
        url: features1,
        Text: 'Based on Bootstrap 4'
    },
    {
        url: features1,
        Text: 'Free Google Fonts & Icons'
    },
    {
        url: features1,
        Text: 'Retina Ready'
    },
    {
        url: features1,
        Text: 'Detailed Documentation'
    },
    {
        url: features1,
        Text: 'Unlimited Updates'
    },
    {
        url: features1,
        Text: 'First-Class Support'
    },
];

const items_card = [
    {
        Text: 'Carbon - WordPress Portfolio',
        url: card1
    },
    {
        Text: 'Wajba - Food HTML Template',
        url: card2
    },
    {
        Text: 'Carbon - Portfolio HTML',
        url: card1
    },
    {
        Text: 'Wajba - Food WordPress',
        url: card2
    }
];

class Header extends React.Component{
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="header-brend">Demo</div>
                    <div className="header-menu">
                        <MenuItem/>
                    </div>
                </div>
            </div>
        );
    }
}

class MenuItem extends React.Component{
    render() {
        return (
            menu_item.map(function (item) {
                return(
                    <a href={item.url}>
                        <div className="header-menu-item ">
                            {item.Title}
                        </div>
                    </a>
                );
            })
        );
    }
}

class Hero extends React.Component{
    render() {
        return (
            <div className="hero">
                <div className="hero-caption">
                    <div className="hero-text1">Do you need a new</div>
                    <div className="hero-text2">Showcase PSD Template ?</div>
                    <div className="hero-text3">Check out our options & features.</div>
                </div>
                <div className="hero-buttons">
                    <button className="explore-button">Explore Button</button>
                    <button className="buy-button">Buy Now - 10$</button>
                </div>
            </div>
        ); 
    }
}

class Features extends React.Component{
    render() {
        return (
            <div className="features">
                <div className="container">
                    <FeaturesItem/>
                </div>
            </div>
        );
    }
}

class FeaturesItem extends React.Component{
    render() {
        return (
            features_item.map(function (item) {
                return(
                <div className="features-item">
                    <div className="features-item-img"><img src={item.url} /></div>
                    <p>{item.Text}</p>
                </div>
                );
            })
        );
    }
}

class CTA extends  React.Component{
    render() {
        return (
            <div className="cta">
                <div className="container">
                    <div className="cta-caption">
                        <div className="cta-caption-1">New web experiance</div>
                        <div className="cta-caption-2">get more than 10+ templates, Support & Constant Updates.</div>
                    </div>
                    <div className="cta-button">Purschase Now</div>
                </div>
            </div>
        );
    }
}

class Items extends React.Component{
    render() {
        return(
            <div className="items">
                <h1>You may also like</h1>
                <div className="container">
                    <ItemsCard/>
                </div>
            </div>
        );
    }
}

class ItemsCard extends React.Component{
    render() {
        return(
            items_card.map(function (item) {
                return(
                    <div className="items-card">
                        <img alt="" src={item.url}/>
                        <div className="items-text">
                            {item.Text}
                        </div>
                    </div>
                );
            })
        );
    }
}

class Footer extends React.Component{
    render() {
        return(
            <div className="footer">
                <div className="container">
                    <div className="footer-breand">Demo</div>
                    <div className="footer-links">
                        <div className="footer-link">About</div>
                        <div className="footer-link">Contact</div>
                        <div className="footer-link">Support</div>
                    </div>
                    <div className="copyright">
                        Copyright © 2018 <span className="copyright-color">@coddice</span>. All Rights Reserved.
                    </div>
                    <div className="social">
                        <img alt="" src="./img/social-1.png"/>
                        <img alt="" src="./img/social-3.png"/>
                        <img alt="" src="./img/social-2.png"/>
                    </div>
                </div>
            </div>
        );
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Hero/>
          <Features/>
          <CTA/>
          <Items/>
          <Footer/>
      </div>
    );
  }
}

export default App;