import React from "react";
import styled from 'styled-components'

const StyledBody = styled.p`
color:#4d004d;
`

function Body({img, text}){

    return(
        <>
            <img src = {img}></img>
            <StyledBody>
                {text}
            </StyledBody>
        </>
    )
    
}

export default Body