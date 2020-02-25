import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './pages/home'
import Ensaios from './pages/ensaios'
import Eventos from './pages/eventos'
import Wallpapers from './pages/wallpapers'
import Admin from './pages/admin'
export default function Routes (){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/> 
                <Route exact path="/ensaios" component={Ensaios}/> 
                <Route exact path="/eventos" component={Eventos}/>
                <Route exact path="/wallpapers" component={Wallpapers}/> 
                <Route exact path="/admin" component={Admin}/>
            </Switch>
        </BrowserRouter>
    )
}