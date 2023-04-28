import React from "react"
import ReactDOM from 'react-dom/client'

import App1 from "./App1"

import Globalstate from "./redux/Globalstate"




// document.getElementById('root')
// ReactDOM.createRoot(document.getElementById('root'))

const root=document.getElementById('root')
const virtualRoot=ReactDOM.createRoot(root)


virtualRoot.render(
    // <h1>Hello React</h1>
   
    <App1/>
)
//comel notation


root.render(
<Globalstate>
<App1 color={"yellow"}/>
</Globalstate>



//component call  only 1 component

    )

//no arrays
//in div id className style  in style-{}   style attribute in react expect object      inside tags like h,p/html cannot put an object error occurs      only in module.css we can create variable    <div id={style.box} className={style['box-1]'}  map will return new array  forEach return nothing
//es7-extension for ()  prettier for formate

//for styling data web create main.js in src

//jsonplace holder




// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
// //    <h1>Hello</h1>
// <App/>
// )