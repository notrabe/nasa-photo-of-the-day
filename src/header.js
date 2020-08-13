import React from "react";
import styled from 'styled-components'

const StyledHeader = styled.header`
  text-align:left;
  margin-left:3%;
  color:pink;
`


function Header ({date}){


    return(
        <StyledHeader>
            <h1>{date}</h1>
        </StyledHeader>
    )
} 

export default Header 