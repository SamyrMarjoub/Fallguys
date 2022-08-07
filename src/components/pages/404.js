import React, { Component } from "react";
import '../styles/404.css'
import guyleft from '../images/404leftguy.png'
import guyright from '../images/404rightguy.png'
import { Link } from 'react-router-dom'

class notFound extends Component {
    componentDidMount() {
        setTimeout(() => {
            document.querySelector('.imggright').classList.add('animacaoa')
        }, 2000)
    }
    render() {
        return (

            <div className="Principal404">
                <div className="C404">
                    <div className="width404">
                        <div className="column404">
                            <h1 className="h1404">404</h1>
                            <div className="divp404">
                                <p className="p404">The content you're looking for appears to have fallen into the slime. Oh no!</p>

                            </div>
                            <div className="divb404">
                                <Link to={'/'}><button className="b404">BACK TO FALL GUYS!</button></Link>
                            </div>
                        </div>

                        <img src={guyleft} className='imggleft' alt="" />
                        <img src={guyright} className='imggright' alt="" />

                    </div>

                </div>
                <link rel="stylesheet" href="https://use.typekit.net/usp1dxm.css"></link>
            </div>
        )
    }
}

export default notFound