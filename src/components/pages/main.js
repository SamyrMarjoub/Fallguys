import React, { Component } from "react";
import '../styles/index.css'
import epic from '../images/epic-games.svg'
import psn from '../images/psn.svg'
import nintendo from '../images/nintendo-switch.svg'
import xbox from '../images/xbox.svg'
import biglog from '../images/fallguys-big-logo.webp'
import img1 from '../images/i1.jpg'
import img2 from '../images/i2.jfif'
import img3 from '../images/i3.jfif'
import left from '../images/left.svg'
import right from '../images/right.svg'
import guyimg from '../images/guy.webp'
class Main extends Component {
    slideshowRight() {

    }
    slideshowLeft() {

    }
    render() {
        return (
            <div className="MainHome">

                <main className="">
                    <div className="download-div">
                        <div className="download-div-container">
                            <div className="div-h2"><h2>DOWNLOAD NOW!</h2></div>
                            <div className="list-imgs">
                                <div className="box-img"><img src={epic} alt='' /></div>
                                <div className="box-img"><img src={psn} alt='' /> </div>
                                <div className="box-img"><img src={nintendo} alt='' /></div>
                                <div className="box-img lastboximg"><img src={xbox} alt='' /></div>
                            </div>
                        </div>
                    </div>

                    <div className="bglc">
                        <img src={biglog} className='biglogo' alt="biglogo" />
                        <button className="main-button-d">DOWNLOAD NOW</button>
                    </div>
                </main>
                <div className="conti1">
                    <div className="tst"></div>
                    <div className="imgt">
                        <div className="containerimgt">
                            <div className="containergrid">
                                <div className="grid1 grid">
                                    <h2>THE LATEST ON FALL GUYS IN A NUTSHELL</h2>
                                    <button className="main-button-d size">LEARN MORE</button>
                                </div>
                                <div className="flexdogrid">
                                    <div className="containerdogrid">
                                        <div className="grid2 grid">
                                            <div className="grid-img-div">
                                                <img src={img1} alt='' id="firstimg" />
                                            </div>
                                            <h4 className="resume">GET SUMMER DOME READY!</h4>

                                        </div>
                                        <div className="grid3 grid">
                                            <div className="grid-img-div">
                                                <img src={img2} alt='' />
                                            </div>
                                            <h4 className="resume">BLUNDERMANIA: SUMMERSLAM COMES TO FALL GUYS!</h4>

                                        </div>
                                        <div className="grid4 grid">
                                            <div className="grid-img-div">
                                                <img src={img3} alt='' />
                                            </div>
                                            <h4 className="resume">IT’S HAMMER TIME: CLAN OF YEETUS IS HERE!</h4>
                                        </div>

                                    </div>
                                    <div>
                                        <div className="s1 color">
                                            <div className="trn firsts">
                                                <span>Team Fall Guys / July 28, 2022</span>
                                            </div>
                                            <div className="trn mids">
                                                <span className="mid">Team Fall Guys / July 26, 2022</span>
                                            </div>
                                            <div className="trn fltrn">
                                                <span className="fl">Team Fall Guys / July 25, 2022</span>
                                            </div>
                                        </div>
                                        <div className="loadingdiv">
                                            <div className="loading">
                                                <div className="loading-red"></div>
                                            </div>
                                        </div>
                                        <div className="grid7">
                                            <div className="grid7divsvg">
                                                <img src={left} className='left' alt='' onClick={this.slideshowLeft} />
                                                <img src={right} alt='' onClick={this.slideshowRight} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tst2"></div>
                </div>
                <div className="bg2">
                    <div className="bg2container">
                        <div className="guyimg"> <img src={guyimg} alt='guy' id="guyimg" /> </div>
                        <div className="txtdiv">
                            <h4>FALL GUYS</h4>
                            <h3>FREE FOR ALL</h3>
                            <p>Welcome to Fall Guys: Free for All! You’re invited to dive and dodge your way to victory in the pantheon of clumsy. Rookie or pro? Solo or partied up? Fall Guys delivers ever-evolving, high-concentrated hilarity and fun!</p>
                            <div className="div-buttons">
                                <button className="main-button-d size right">LEARN MORE</button>
                                <button className="main-button-d size">LEARN MORE</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        )
    }

}
export default Main