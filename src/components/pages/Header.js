import React, { Component } from "react";
import '../styles/header.css'
import Fallguyslogo from '../images/fav-nav-logo.webp'
import ShildLogo from '../images/shildlogo.svg'
import Language from '../images/language-icon.svg'
import Account from '../images/account-svg.svg'
import Burguer from '../images/burguer.svg'
import x from '../images/x.svg'
import { HashLink as Link } from 'react-router-hash-link'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hover1: false,
            hover2: false,
            MenuCont: 1

        }
        this.hoverFunction = this.hoverFunction.bind(this)
        this.hoverFunctionLa = this.hoverFunctionLa.bind(this)
        this.hoverFunctionLaN = this.hoverFunctionLaN.bind(this)
        this.hoverFunctionN = this.hoverFunctionN.bind(this)
        this.abrirMenu = this.abrirMenu.bind(this)
    }
    hoverFunction() {
        const menulangugage = document.querySelector('.languages')
        menulangugage.classList.remove('displayLN')
        menulangugage.classList.add('displayL')
        this.setState({ hover1: true })
        console.log(this.state.hover1 + this.state.hover2)
    }
    hoverFunctionLa() {
        const menulangugage = document.querySelector('.languages')
        menulangugage.classList.remove('displayLN')
        menulangugage.classList.add('displayL')
        this.setState({ hover2: true })

    }
    hoverFunctionN() {
        setTimeout(() => {
            if (this.state.hover1 && this.state.hover2) {
                return
            } else {
                const menulangugage = document.querySelector('.languages')
                menulangugage.classList.remove('displayL')
                menulangugage.classList.add('displayLN')
                this.setState({ hover1: false })
            }
        }, 200)

    }
    hoverFunctionLaN() {
        const menulangugage = document.querySelector('.languages')
        menulangugage.classList.remove('displayL')
        menulangugage.classList.add('displayLN')
        this.setState({ hover2: false })

    }
    abrirMenu() {
        // eslint-disable-next-line react/no-direct-mutation-state
        this.setState({ MenuCont: ++this.state.MenuCont })
        const MenuMobile = document.querySelector('.menu-mobile')
        const darkscreen = document.querySelector('.darkscreen')
        const burguerimg = document.querySelector('.burguerimg')
        const Burguerdiv = document.querySelector('.burguer-div')
        if (this.state.MenuCont % 2 === 0) {
            MenuMobile.classList.remove('displayLN')
            darkscreen.classList.remove('displayLN')
            MenuMobile.classList.add('displayLB')
            darkscreen.classList.add('displayLB')
            document.body.style.overflow = 'Hidden'
            burguerimg.src = x
            burguerimg.style.width = '25px'
            burguerimg.classList.add('white')
            Burguerdiv.classList.add('transparent')
        } else {
            MenuMobile.classList.remove('displayLB')
            darkscreen.classList.remove('displayLB')
            MenuMobile.classList.add('displayLN')
            darkscreen.classList.add('displayLN')
            document.body.style.overflow = 'Visible'
            burguerimg.src = Burguer
            burguerimg.style.width = '35px'
            Burguerdiv.classList.remove('transparent')
            burguerimg.classList.remove('white')

        }

    }
    render() {
        return (
            <header id="Header">
                <div className="header-container">
                    <div className="first">
                        <div className="imgs">
                            <div className="shield-div">
                                <img src={ShildLogo} alt="" />
                            </div>
                            <div className="logo-divh">
                                <img src={Fallguyslogo} className='fall-guys-logo' alt="" />
                            </div>
                            <div className="burguer-div-l">
                                <div className="burguer-div">
                                    <img src={Burguer} alt="" onClick={this.abrirMenu} className='burguerimg' />
                                </div>
                            </div>
                        </div>
                        <div className="inline-links-list">
                            <ul className="header-list">
                                <Link to={'*'}>
                                    <li>CURRENT SEASON</li>
                                    <li>PREVIOUS SEASONS</li>
                                    <li>NEWS</li>
                                    <li>SEASON PASS</li>
                                    <li className="nomargin">MERCH</li>
                                </Link>

                            </ul>
                        </div>
                    </div>
                    <div className="second">
                        <div className="second-img-c">
                            <div className="languagerelative">
                                <img src={Language} id='teste' alt="" onMouseMove={this.hoverFunction} onMouseLeave={this.hoverFunctionN} />
                                <div className="languages" onMouseMove={this.hoverFunctionLa} onMouseLeave={this.hoverFunctionLaN}>
                                    <ul>
                                        <li>عربي</li>
                                        <li>DEUTSCH</li>
                                        <li>ESPAÑOL (SPAIN)</li>
                                        <li>ESPAÑOL (LA)</li>
                                        <li>FRANÇAIS</li>
                                        <li>ITALIANO</li>
                                        <li>日本</li>
                                        <li>한국어</li>
                                        <li>POLSKI</li>
                                        <li>PORTUGUÊS (BRASIL)</li>
                                        <li>РУССКИЙ</li>
                                        <li>TÜRKO</li>
                                        <li>中国人</li>
                                    </ul>
                                </div>
                            </div>
                            <img src={Account} id='conta' alt="" />
                            <Link to={'*'}>
                                <span className="span-account">ACCOUNT</span>
                                <button className="button-download">DOWNLOAD</button>
                            </Link>
                        </div>

                    </div>
                </div>
                <div className="menu-mobile">
                    <div className="mbr">
                        <div className="menu-m-c-m">
                            <div className="menum"><div className="menu-m-c"><span>CURRENT SEASON</span></div></div>
                            <div className="menum"><div className="menu-m-c"><span>PREVIOUS SEASON</span></div> </div>
                            <div className="menum"><div className="menu-m-c"><span>NEWS</span></div> </div>
                            <div className="menum"><div className="menu-m-c"><span>SEASON PASS</span></div> </div>
                            <div className="menum lmm"><div className="menu-m-c"><span>MERCH</span></div> </div>

                        </div>
                        <div className="bottom-menu">
                            <div className="dv1">
                                <div className="dv1f">
                                    <div className="onc">
                                        <img src={Account} id='conta' alt="" />
                                        <span className="span-account" style={{ margin: '0px' }}>ACCOUNT</span>
                                    </div>

                                </div>
                                <div className="dv2f">
                                    <div className="onc">
                                        <img src={Language} id='teste' alt="" onMouseMove={this.hoverFunction} onMouseLeave={this.hoverFunctionN} style={{ margin: '0px' }} />
                                    </div>

                                </div>
                            </div>
                            <div className="dv2">
                                <h2>DOWNLOAD</h2>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="darkscreen">

                </div>
            </header>

        )
    }
}
export default Header