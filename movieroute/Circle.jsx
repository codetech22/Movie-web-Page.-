import React from 'react'
import Add from './Add'
import Box from './Box'
import Alarm from './Alarm'
import Sear from './Sear'

import { Link } from 'react-router-dom'



const Circle = () => {
  return (



    <div style={{position:"absolute",left:"250px"}}>
    <h1>People</h1>
    <b><Link to='/movie' style={{color:"red",fontSize:"20px" ,padding:"20px"}}>Movie</Link></b>
    <b><Link to='/Tvshows' style={{color:"red",fontSize:"20px" ,padding:"20px"}}>Tvshows</Link></b>
    <b><Link to='/people' style={{color:"red",fontSize:"20px" ,padding:"20px"}}>people</Link></b>
    <b><Link to='/more' style={{color:"red",fontSize:"20px" ,padding:"20px"}}>more</Link></b>



    
    <div style={{position:"absolute",left:"700px",top:"5px"}}>
      <h1>Circle</h1>
      <b><Link to='/add' style={{color:"purple",padding:"20px"}}>Add</Link></b>
      <b><Link to='/box'  style={{color:"purple",padding:"20px"}}>Box</Link></b>
      <b><Link to='/alarm'  style={{color:"purple",padding:"20px"}}>Alarm</Link></b>
      <b><Link to='/circle'  style={{color:"purple",padding:"20px"}}>Circle</Link></b>
      <b><Link to='/sear'  style={{color:"purple",padding:"20px"}}>Search</Link></b>



      <div>
      <Link to='/mystry'>Mystry</Link>
  <Link to='./fantacy'>Fantacy</Link>
  <Link to='./drama'>Drama</Link>
  <Link to='./comedy'>Comedy</Link>
  <Link to='./horror'>Horror</Link>
  <Link to='./thriller'>Thriller</Link>
      </div>
    </div>
    </div>
  )
}

export default Circle
