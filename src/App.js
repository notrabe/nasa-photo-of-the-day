import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import Header from './header';
import Body from './body';

import styled from 'styled-components'

const StyledApp = styled.div`
background-image:linear-gradient(purple, pink);
`

function App() {

  const [info, setInfo] = useState('')

  useEffect(() => {
    
    axios.get('https://api.nasa.gov/planetary/apod?api_key=IUZ6Fh56qQeOncqgjPOFRwYYCmenZKKHZqbeV1GO')
  
    .then(res => {
      setInfo(res.data)
    })
    .catch(err => {
      debugger
    })

  },[])
 

  return (
    <StyledApp className="App">
      <Header date = {info.date}/>
      <Body img = {info.url} text = {info.explanation}/>
    </StyledApp>
  );
}

export default App;
