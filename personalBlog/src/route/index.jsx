import React from 'react';
import {Route} from 'react-router-dom';
import Index from '../home/index';

export default class IndexRoute extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <Route exact path='/12' component={Index}/>
            </div>
        )
    }
}