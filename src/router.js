import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/pages/index'
import Header from './components/pages/Header'
import NotFound from './components/pages/notfound'
const Rotas = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header />
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )

}
export default Rotas