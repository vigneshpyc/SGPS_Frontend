import React, { useEffect, useState } from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import data from './Data.json'
import vicky from '../assets/vicky.jpg'

function StudentProfile() {
  const navigate = useNavigate()
  // const [data, setData] = useState([])
  const student = data.data

  const navToPass = ()=>{
    navigate('/passform')
  }
  return (
    <div>
      <Style>
      {/* design for navigation bar to move back */}
      <nav className='navbar'>
        <i className='backicon' onClick={()=>{navigate('/bckfrmsprf')}}><IoMdArrowBack/></i>
        <h3>Student Profile</h3>
      </nav>

      {/* profile view design */}
      <div className="profile">
        
        <div className="holder">
          <img src={vicky} style={{width:'100px', height:'100px'}} alt="Image not found" />
          <h4>Name : {student.name} </h4>
          <h4>Register no : {student.regNo}</h4>
          <button onClick={navToPass}>Get Pass</button>
          <button onClick={()=>{navigate('/maintanance')}}>Track Pass</button>
        </div>
        <div className="info">
          <div className="general">
            <h3>General informations</h3>
            <table>
              <tr>
                <td>Name</td>
                <td>{student.name}</td>
              </tr>
              <tr>
                <td>Register No</td>
                <td>{student.regNo}</td>
              </tr><tr>
                <td>Department</td>
                <td>{student.dept}</td>
              </tr><tr>
                <td>Academic Year</td>
                <td>{student.year}</td>
              </tr><tr>
                <td>Batch</td>
                <td>{student.batch}</td>
              </tr>
              <tr>
                <td>Sudent Type</td>
                <td>{student.studenType}</td>
              </tr><tr>
                <td>Room number</td>
                <td>{student.roomNo}</td>
              </tr>
            </table>
          </div>
          <div className="academic">
            <h3>Academic information</h3>
            <table>
              <tr>
                <td>Name</td>
                <td>{student.name}</td>
              </tr>
              <tr>
                <td>Register No</td>
                <td>{student.regNo}</td>
              </tr><tr>
                <td>Department</td>
                <td>{student.dept}</td>
              </tr><tr>
                <td>Academic Year</td>
                <td>{student.year}</td>
              </tr><tr>
                <td>Batch</td>
                <td>{student.batch}</td>
              </tr>
              <tr>
                <td>Sudent Type</td>
                <td>{student.studenType}</td>
              </tr><tr>
                <td>Room number</td>
                <td>{student.roomNo}</td>
              </tr>
            </table>
          </div>
          <div className="passhistory">
            <h3>Pass History</h3>
            <table>
              <tr>
                <td>Name</td>
                <td>{student.name}</td>
              </tr>
              <tr>
                <td>Register No</td>
                <td>{student.regNo}</td>
              </tr><tr>
                <td>Department</td>
                <td>{student.dept}</td>
              </tr><tr>
                <td>Academic Year</td>
                <td>{student.year}</td>
              </tr><tr>
                <td>Batch</td>
                <td>{student.batch}</td>
              </tr>
              <tr>
                <td>Sudent Type</td>
                <td>{student.studenType}</td>
              </tr><tr>
                <td>Room number</td>
                <td>{student.roomNo}</td>
              </tr>
            </table>
          </div>
        </div>

      </div>
      </Style>
    </div>
  )
}


// design for this page
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

  /* mobile view design */
  @media screen and (max-width:430px) {
    .profile{
      width: 100%;
      height:auto;
      display: flex;
      flex-direction: column;
      justify-content:space-between;
      align-items: center;
      padding: 10px;
    }
    .holder{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      width: 100%;
      height: 300px;
      background-color: #FDFDFD;
      /* border: 1px solid black; */
      border-radius: 10px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }
      
    .holder img{
      width: 30%;
      height: 10%;
      border: 2px solid #FF7846;
      border-radius: 50%;
    }
    .info{
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      /* align-items: center; */
      margin:10px;
      padding: 10px;
      border-radius: 10px;
      
    }
    .general, .academic, .passhistory{
      overflow-x: scroll;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }
    /* .info .general table{
      width: 100%;
      border-collapse: collapse;
      color: #FDFDFD;

    }
    .general table td{
      border: 1px solid black;
      padding: 5px;
    }
    .general table tr:nth-child(even){
      background-color:#FF7846;
    }
    .general table tr:nth-child(odd){
      background-color: #ebab6c;
    } */
  }
  @media screen and (min-width:430px) {
    .profile{
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
    .holder{
      width: 40%;
      text-align: center;
    }
    .info{
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      /* align-items: center; */
      margin:10px;
      padding: 10px;
      border-radius: 10px;
    }
    
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
  /* table design */
  table{
      width: 100%;
      border-collapse: collapse;
      color: #FDFDFD;
      margin: 10px;
    }
    table td{
      padding: 5px;
    }
    table tr:nth-child(even){
      background-color:#FF7846;
    }
    table tr:nth-child(odd){
      background-color: #ebab6c;
    }
`
export default StudentProfile
