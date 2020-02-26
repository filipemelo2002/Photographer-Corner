import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './pages/home'
import Ensaios from './pages/ensaios'
import Eventos from './pages/eventos'
import Wallpapers from './pages/wallpapers'
import Admin from './pages/admin'

import Header from './pages/components/Header'
import Contact from './pages/components/Contact'
export default function Routes (){
    return (
        <BrowserRouter>

            <Header />
            <Switch>
                <Route exact path="/" component={Home}/> 
                <Route path="/ensaios" component={Ensaios}/> 
                <Route path="/eventos" component={Eventos}/>
                <Route path="/wallpapers" component={Wallpapers}/> 
                <Route path="/admin" component={Admin}/>
            </Switch>
            <Contact />
        </BrowserRouter>
    )
}