import React, { Component } from 'react'

export default class AppPreview extends Component {
    render() {
        return (
            <div id='appPreviewLayout'>
                <h6 id='standupTitle'>standup</h6>
                <ul id='gallery'>
                    <Card image={<img className='fullscreenImg' src={require('./images/standup/landing.jpeg')}/>} title={'Landing Page'} date={'Feb 18, 2013'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Card image={<img className='fullscreenImg' src={require('./images/standup/dash.jpeg')}/>} title={'Dashboard'} date={'Sept 26, 2016'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />
                </ul>
                
            </div>
        )
    }
}

export class Card extends Component {
    state = {
        active: true,
    };
    render() {
        return (
            <div id='appPreviewLayout'>
                    <li id="p1" className="flipper">
                        <div className={this.state.active ? 'display' : null}>{this.props.image}</div>
                        <div className={this.state.active ? 'text' : null}>
                            <h2 className="cardTitle">{this.props.title}</h2>
                            <p className="cardDescription">{this.props.description}</p>
                            <p className="cardDate">{this.props.date}</p>
                        </div>
                    </li>
            </div>
        )
    }
}