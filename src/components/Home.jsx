import React from 'react'
import velammal from '../assets/Velammal.png'
import logo from '../assets/logo.jpg'
import student from '../assets/student.png'
import faculty from '../assets/faculty.png'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate()

  const studentLogin = ()=>{
    navigate('/studentlogin')
  }
  const facultyLogin = () =>{
    navigate('/maintanance')
  }
  return (
    <Style>
      <div className="backimg">

        <div className="glass"></div>

        <div className="logo">
          <img src={logo} alt="" />
        </div>
        
        {/* desktop view */}
        <div className="logincont">
           <div className="student">
              <div className='sticon'>
                <img src={student} alt="" />
              </div>
              <button onClick={studentLogin}>Student</button>
              <h3>If you are studnet kindly enter here</h3>

           </div>

           <div className="staff">
              <div className='ftyicon'>
                <img src={faculty} alt="" />
              </div>
              <button onClick={facultyLogin}>Faculty</button>
              <h3>If you are faculty kindly enter here</h3>
           </div>
        </div>

        {/* mobile view */}
        <div className="mblelogincnt">
          <button className="studentmble" onClick={studentLogin}>Student</button>
          <button className="staffmble" onClick={facultyLogin}>Faculty</button>
        </div>
       

      </div>
    </Style>
  )
}

const Style = styled.div`

.backimg{
  min-height: 100vh;
  width: 100%;
  background-image: url(${velammal});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* display:flex;
  justify-content:center;
  align-items:center; */

  position: relative;
}

/* glass layer */

.glass{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;

  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(5px);

  background: rgba(255,255,255,0.10);
}

/* logo layer */

.logo{
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center;

}

.logo img{
  height:100px;
  width:auto;
}

.student, .staff{
  width: 300px;
  height: 300px;
  margin: 5px;
  background-color: #f2e7d6;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.sticon, .ftyicon{
  padding: 5%;
  border-radius:50%;
  border: 2px solid #FF7846;
}
h3{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  padding:10px;
  color: orange;
  text-align: justify;

}
.student button, .staff button{
  width: 60%;
    padding: 10px;
    border-radius: 10px;
    background-color: #FF7846;
    color: white;
    font-size: 20px;
    font-weight: bold;
    outline: none;
    border: none;
    
}

.logincont{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  backdrop-filter: blur(0px);
  margin-top: 10%;
}

.mblelogincnt{
  display: none;
}

@media screen and (max-width:430px) {
  .mblelogincnt{
    display: block;
    backdrop-filter: blur(0px);
    width: 100%;
    height:200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;
    margin-top: 10%;
  }
  .logo img{
    width: 90%;
    height: 90%;
  }
  .logincont{
    display: none;
  }
  .mblelogincnt{
   
  }
  .mblelogincnt button{
    width: 60%;
    padding: 10px;
    border-radius: 10px;
    background-color: orange;
    color: white;
    font-size: 20px;
    font-weight: bold;
    outline: none;
    border: none;
    
  }  
}

`

export default Home