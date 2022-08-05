import React, { Component } from "react";
import '../styles/header.css'
import Fallguyslogo from '../images/fav-nav-logo.webp'
import ShildLogo from '../images/shildlogo.svg'
import Language from '../images/language-icon.svg'
import Account from '../images/account-svg.svg'
import Burguer from '../images/burguer.svg'
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hover1: false,
            hover2: false

        }
        this.hoverFunction = this.hoverFunction.bind(this)
        this.hoverFunctionLa = this.hoverFunctionLa.bind(this)
        this.hoverFunctionLaN = this.hoverFunctionLaN.bind(this)
        this.hoverFunctionN = this.hoverFunctionN.bind(this)

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
                this.setState({hover1:false})
            }
        }, 200)

    }
    hoverFunctionLaN() {
        const menulangugage = document.querySelector('.languages')
        menulangugage.classList.remove('displayL')
        menulangugage.classList.add('displayLN')
        this.setState({hover2:false})

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
                                    <img src={Burguer} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="inline-links-list">
                            <ul className="header-list">
                                <li>CURRENT SEASON</li>
                                <li>PREVIOUS SEASONS</li>
                                <li>NEWS</li>
                                <li>SEASON PASS</li>
                                <li className="nomargin">MERCH</li>
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
                            <span className="span-account">ACCOUNT</span>
                            <button className="button-download">DOWNLOAD</button>
                        </div>

                    </div>
                </div>
            </header>
        )
    }
}
export default Header