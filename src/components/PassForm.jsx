import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function PassForm() {
    const navigate = useNavigate()
  return (
    <>
    <Style>
    <nav className='navbar'>
        <i className='backicon' onClick={()=>{navigate('/')}}><IoMdArrowBack/></i>
        <h3>Student Profile</h3>
    </nav>

    <div className="form">
        <form action="#">
            <div className="name">
                <label htmlFor="name">Student Name *</label>
                <input type="text" name="name" placeholder='Enter Name' required />
            </div>
            <div className="regno">
                <label htmlFor="regno">Student Register Number *</label>
                <input type="number"  placeholder='Enter Register Number' required />
            </div>
            <div className="dept">
                <label htmlFor="dept">Student Department</label>
                <select name="dept" id="dept" placeholder="Choose Department" required>
                    <option value="">Choose Department</option>
                    <option value="CSE">CSE</option>
                    <option value="IT">IT</option>
                    <option value="AIDS">AIDS</option>
                    <option value="MECH">MECH</option>
                    <option value="MTS">MTS</option>
                    <option value="EEE">EEE</option>
                    <option value="ECE">ECE</option>
                </select>
            </div>
            <div className="year">
                <label htmlFor="year">Student Year</label>
                <select name='year' id='year' required>
                    <option value="">Choose year</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <div className="sem">
                <label htmlFor="sem">Student Semester *</label>
                <select name='sem' id='sem' required>
                    <option value="">Choose sem</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>
            </div>
            <div className="reason">
                <label htmlFor="reason">Outing Reason *</label>
                <select name='reason' id='reason' required>
                    <option value="">Choose Reason of Outing</option>
                    <option value="home">Home</option>
                    <option value="hospital">Hospital</option>
                    <option value="grocerry">Byuing Grocerries</option>
                    <option value="temple">Temple</option>
                    <option value="others"></option>
                </select>
            </div>
            <div className="description">
                <label htmlFor="description">Gatepass Description</label>
                <textarea name="description" id="description" placeholder='Enter brief description of outing' required></textarea>
            </div>
            
            <button onClick={()=>{navigate('/maintanance')}}>Request Pass</button>
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

  .form{
    width: 100%;
    height: 100%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  form{
    width: 40%;
    padding: 10px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color:#FEF9F3;
    margin: 10px;
    border-radius: 10px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }
  form div{
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 5px;
  }
  form input, select, textarea{
    font-size: 10px;
    padding: 5px;
    margin: 5px;
  }
   button{
      width: 50%;
      height: auto;
      padding: 10px;
      font-size: 20px;
      color: #FDFDFD;
      background-color: #FF7846;
      border-radius: 20px;
      border: none;
  }
  @media screen and (max-width:430px) {
    form{
        width: 90%;
    }
  }
`
export default PassForm
