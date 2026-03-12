import React from 'react'
import styled from 'styled-components'
import logoV from '../assets/logoV.jpg'

function Maintanance() {
  return (
    <div>
      {/* User message */}
      <Style>
    <div className="notice">
        <img src={logoV} alt="" width="200" height="200" style={{padding:'10px'}}/>
        
        <h1>{"\u26A0"} This Website under maintanence, we kindly notify you after completed maintanance, thanks for visiting - Velammal Groups</h1>
    </div>
    </Style>
    </div>
  )
}
const Style = styled.div`
    /* user message design */
        .notice{
            border: 1px solid black;
            padding: 10%;
            text-align: justify;
            width: 70%;
            margin-left: 15%;
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
        h1{
            color: red;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 20px;
        }
`
export default Maintanance
