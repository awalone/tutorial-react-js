import React, { Component } from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'


// style
import '../../index.css'

//load component
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'
import App from '../../App'

export default class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <h3>Clue Mediator</h3>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/about/1">About 1</Link>
                        </li>
                        <li>
                            <Link to="/about/2">About 2</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route path="/about/:id?" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
