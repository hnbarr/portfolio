import React, { Component } from 'react'

export default class AppPreview extends Component {
    render() {
        return (
            <div id='appPreviewLayout'>
                <h6 id='standupTitle'>standup</h6>
                <ul id='gallery'>
                    <li id="p1" className="flipper">
                        <div className="front"><img className='fullscreenImg' src={require('./images/standup/landing.jpeg')}/></div>
                        <div className="back">
                            <h2>Glyph Profiles</h2>
                            <p className="author">by <a href="http://google.com">Google Link?</a></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <p>Diff P tag: Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <p className="date">Feb 18, 2013</p>
                        </div>
                    </li>

                    <li id="p1" className="flipper">
                        <div className="front"><img className='fullscreenImg' src={require('./images/standup/landing.jpeg')}/></div>
                        <div className="back">
                            <h2>Glyph Profiles</h2>
                            <p className="author">by <a href="http://google.com">Google Link?</a></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <p>Diff P tag: Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <p className="date">Feb 18, 2013</p>
                        </div>
                    </li>

                    {/* <li id="p1" class="flipper">
                        <div class="front"><img className='fullscreenImg' src={require('./images/standup/landing.jpeg')}/></div>
                        <div class="back">
                            <h2>Glyph Profiles</h2>
                            <p class="author">by <a href="http://google.com">Google Link?</a></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <p>Diff P tag: Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <p class="date">Feb 18, 2013</p>
                        </div>
                    </li> */}
                </ul>
                
            </div>
        )
    }
}
