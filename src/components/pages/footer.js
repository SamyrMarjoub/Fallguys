import React, { Component } from "react";
import facebook from '../images/face.svg'
import insta from '../images/instagram.svg'
import youtube from '../images/youtube.svg'
import tiktok from '../images/tiktok.svg'
import twitch from '../images/twitch.svg'
import discord from '../images/discord.svg'
import twitter from '../images/twitter.svg'
import Shieldo from '../images/shieldo.svg'
import ps4 from '../images/ps4.svg'
import ps5 from '../images/ps5.svg'
import switch2 from '../images/nintendo-switch2.svg'
import xbox2 from '../images/xbox-icon.svg'
import arrow from '../images/up.svg'
import { HashLink as Link } from 'react-router-hash-link'
class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-container">
                    <div className="top-f">
                        <div className="icons-div">
                            <ul>
                                <li> <img src={twitter} alt='' /> </li>
                                <li> <img src={insta} alt='' /> </li>
                                <li> <img src={youtube} alt='' /></li>
                                <li> <img src={tiktok} alt='' id="tiktok" /></li>
                                <li> <img src={twitch} alt='' id="twitch" /> </li>
                                <li> <img src={discord} alt='' /> </li>
                                <li> <img src={facebook} alt='' id="face" /> </li>
                            </ul>
                        </div>
                        <div className="bcktop">
                            <div className="minidiv">
                                <Link to='#Header' smooth={true}>
                                    <span>BACK TO TOP</span>
                                    <img src={arrow} className='arrow' />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="footer-lists">
                        <div className="lists">
                            <div className="lfs fil">
                                <ul>
                                    <li>Home</li>
                                    <li>Current Season</li>
                                    <li>Previous Seasons</li>
                                    <li>Season Pass</li>
                                </ul>
                            </div>
                            <div className="lfs">
                                <ul>
                                    <li>News</li>
                                    <li>Download Now</li>
                                    <li>Support</li>
                                    <li>Rules and Guidelines</li>
                                </ul>
                            </div>
                        </div>
                        <div className="livrediv">
                            <div className="columndiv">
                                <span className="name">BRAZIL</span>
                                <div className="livre"><h2>L</h2></div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="last-column-div">
                        <div className="paragraph-d">
                            <p>
                                © 2022 Mediatonic Limited. All rights reserved. The Mediatonic logo and Fall Guys logo and characters are trademarks of Mediatonic Limited. The Epic Games logo is a trademark or registered trademark of Epic Games, Inc. in the US and elsewhere.
                            </p>
                        </div>
                        <div className="last">
                            <div className="first-l">
                                <ul>
                                    <li>Terms of service</li>
                                    <li>Privacity Policy</li>
                                    <li>EULA</li>
                                </ul>
                            </div>
                            <div className="last-l">
                                <div className="consoles-svg">
                                    <div className="divflexc">
                                        <img src={Shieldo} id='epic-footer' alt="epicshild" />
                                        <img src={ps4} className='console' alt="ps4" />
                                        <img src={ps5} className='console' id="ps5" alt="ps5" />
                                        <img src={switch2} className='c2' alt="switch" />
                                    </div>
                                    <div className="xbox-div">
                                        <img src={xbox2} className='c2' id="xboxc" alt="xbox" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer