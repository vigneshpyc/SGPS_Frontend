import React, { useState } from 'react'
import styled from 'styled-components'
import logoV from '../assets/logoV.jpg'
import student from '../assets/student.png'
import { useNavigate } from 'react-router-dom'
import { IoMdArrowBack } from "react-icons/io";



function StudentLogin() {
    const [regno, setRegNo] = useState()
    const [stname, setStName] = useState('')
    const navigate = useNavigate()

    const dataVerification = ()=>{
    }
    const tempNavigation = ()=>{
        navigate('/maintanance')
    }
  return (
   <>
   <Style>
    
    {/* login form */}
    <nav className='navbar'>
        <i className='backicon' onClick={()=>{navigate('/')}}><IoMdArrowBack/></i>
        <h3>Student Profile</h3>
    </nav>
    <div className="form">
        
        <div className="vlogo">
            <img src={logoV} className='logov' alt="" />
            <ul>
                <li>Students allowd only after they scanned their gate pass</li>
                <li>Students should enter college campus within in 6.00 pm</li>
                <li>Students should not bring any unncessary things in college campus</li>
                <li>Students request a gatepass to respective wardern who allocatoed to them</li>
            </ul>
        </div>

        <form action="#" >
            <img src={student} alt="" />
            <input type="number" placeholder='University Register number' />
            <input type="text" placeholder='Name(as per in attendance)' />
            <button onClick={()=>{navigate('/studentprofile')}} >Gain Access</button>
        </form>
    </div>
    
   </Style>
   </>
  )
}
const Style = styled.div`

.navbar{
    display: flex;
    width: 100%;
    height: auto;
    padding: 10px;
    background-color: #FF7846;
    color: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  .backicon{
    padding-right: 10px;
  }

    /* form design desktop view */
    @media screen and (min-width: 431px) {
        .form{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 100%;
            height: 100%;
            border: 1px solid #FF7846;
            padding: 10%;
            background-color: #f2e7d6;
        }
        .vlogo{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .vlogo img{
            border-radius: 50%;
            padding: 10px;
            border: 2px solid #FF7846;
        }  
        .vlogo ul{
            color: red;
            text-align: justify;
        }
        form{
            width: 50%;
            height: 100%px;
            display: flex;
            padding: 1rem;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            background-color: #FDFDFD;
            border-radius: 20px;
        }
        form input{
            font-size: 20px;
            padding: 10px;
            outline-color: #FF7846;
            margin: 1rem;
            border-radius: .5rem;
            width: 70%;
        }
        form button{
            width: 50%;
            height: auto;
            padding: 10px;
            font-size: 20px;
            color: #FDFDFD;
            background-color: #FF7846;
            border-radius: 20px;
            border: none;
        }
        
    }
/* form design mobile view */
@media screen and (max-width:430px) {
    .form{
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        padding: 10px;
        width: 100%;
    
    }
    .logov{
        padding: 5px;
        border: 2px solid #FF7846;
        border-radius: 50%;
    }
    .form .vlogo{
        text-align: justify;
        padding: 5%;
        color: red;
        width: 80%;
        height: 100%;
    }
    
form{
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    font-size: 20px;
    border-radius: 20px ;
    background-color: #f2e7d6;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px; // new value
}
form input{
    font-size: 20px;
    padding: 10px;
    border-radius: 5px;
    outline-color: #FF7846;
}
form img{
    display: block;
    border: 5px solid #FF7846;
    border-radius: 50%;
    padding: 10px;
    width: auto;
    height: auto;
}
form button{
    width: 80%;
    height: auto;
    padding: 10px;
    font-size: 20px;
    color: #FDFDFD;
    background-color: #FF7846;
    border-radius: 20px;
    border: none;
}
    
}




`
export default StudentLogin
