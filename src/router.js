import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/index'
import Header from './components/pages/Header'
import NotFound from './components/pages/404'
import Footer from './components/pages/footer'
const Rotas = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )

}
export default Rotas