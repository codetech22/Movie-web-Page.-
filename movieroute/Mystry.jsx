import React from 'react'

import './mystry.css'


import { Link } from 'react-router-dom'

const Mystry = () => {
  return (
    <div style={{position:"absolute",top:"50px",padding:"20px"}}>myst
      <Link to='/mystry/' style={{fontSize:"30px",padding:"20px",color:"red"}}>Mystry</Link>
  <Link to='/fantacy/' style={{fontSize:"30px",padding:"20px",color:"red"}}>Fantacy</Link>
  <Link to='/drama/' style={{fontSize:"30px",padding:"20px",color:"red"}}>Drama</Link>
  <Link to='/comedy/' style={{fontSize:"30px",padding:"20px",color:"red"}}>Comedy</Link>
  <Link to='/horror/' style={{fontSize:"30px",padding:"20px",color:"red"}}>Horror</Link>
  <Link to='/thriller/' style={{fontSize:"30px",padding:"20px",color:"red"}}>Thriller</Link>
  <Link to='/action/' style={{fontSize:"30px",padding:"20px",color:"red"}}>Action</Link>
  <Link to='/western/' style={{fontSize:"30px",padding:"20px",color:"red"}}>Western</Link>
<Link to='/adventure/' style={{fontSize:"30px",padding:"20px",color:"red"}}>Adventure</Link>


<div style={{height:"500px",width:"700px",border:"5px solid black",borderColor:"green"}}>
    <p style={{padding:"20px"}}><b>Mystry collections</b></p>

    <p style={{padding:"10px"}} className='mystry'><img src="data:image/jpeg;base64,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" alt="sober" height="100px" width="100px" /></p>

    <p style={{position:"absolute",top:"350px",padding:"10px"}} className='mystry'><img src="data:image/jpeg;base64,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" alt="horror" height="100px" width="100px" /></p>

    <p style={{position:"absolute",left:"170px",top:"145px"}} className='mystry'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJpvH6b2hlCLpZNe5HE3W_2VndTHSP1wkxGg&usqp=CAU" alt="horror" height="10px" width="150px" /></p>


    <p style={{position:"absolute",left:"190px",top:"360px",border:"8px solid green"}} className='mystry'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoR4M3HvAzsLCpQ6jmTpbaEigbAQrEdszsEQ&usqp=CAU" alt="horror" height="100px" width="100px" /></p>

    <p style={{position:"absolute",left:"350px",top:"140px"}} className='mystry'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbXz14n1LeMgoki7OS-dJpigrOVO5ySYLRQ&usqp=CAU" alt="horror" height="100px" width="110px" /></p>

    <p style={{position:"absolute",left:"480px",top:"170px"}} className='mystry'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvdjXDwml4ARUyOhaxf1kw5xSAn3QTMwOEoA&usqp=CAU" alt="horror" height="100px" width="200px" /></p>

    <p style={{position:"absolute",left:"350px",top:"365px",border:"8px solid green"}} className='mystry'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPlxYyYOtw2R4I5BwFHO4OankuIwNyW4kMFA&usqp=CAU" alt="horror" height="100px" width="100px" /></p>

<p style={{position:"absolute",left:"490px",top:"390px",border:"8px solid green"}} className='mystry'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAL_H28WtpUSaq9EHG5R5yaH4r3blO9rtCAQ&usqp=CAU" alt="horror" height="150px" width="195px" /></p>





<div>
<button><Link to='/mystryo' style={{padding:"25px" ,color:"black",fontFamily:"fantasy"}}><b>Play</b></Link></button>
      <Link to='/actiono' style={{padding:"0px",position:"absolute",top:"520px",left:"60px",fontFamily:"fantasy"}}><b>Play</b></Link>
      <Link to='/westerno' style={{padding:"0px",position:"absolute",top:"525px",left:"225px",fontFamily:"fantasy"}}>Play</Link>
      <Link to='/fantacyo' style={{padding:"0px",position:"absolute",top:"525px",left:"385px",fontFamily:"fantasy"}}>Play</Link>
      <Link to='/dramao' style={{padding:"0px",position:"absolute",top:"510px",left:"565px",fontFamily:"fantasy"}}>Play</Link>
      <Link to='/comedyo' style={{padding:"0px",position:"absolute",left:"565px",fontFamily:"fantasy"}}>Play</Link>
      <Link to='/adventureo' style={{padding:"0px",position:"absolute",left:"390px",fontFamily:"fantasy"}}>Play</Link>
      <Link to='/thrillero' style={{padding:"0px",position:"absolute",left:"220px",fontFamily:"fantasy"}}>play</Link>
      <Link to='/horroro' style={{color:"transparent"}}>Horroro</Link>
</div>

</div>
    </div>


  )
}

export default Mystry
