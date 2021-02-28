import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'
import Lessons from './components/Lessons'

function App(){
    
    // render(){
       return(
           <Fragment>
               {/*NAVIGATION*/}
               <nav className="indigo darken-3">
                   <div className="container">
                        <a className="brand-logo" href="/">LPS Learning</a>
                   </div>
               </nav>
               <div className="container">
                   <div className="row">
                       <div className="col s12">
                           <Lessons />
                       </div>
                   </div>
               </div>
           </Fragment>
        )
    // }
}

export default App;