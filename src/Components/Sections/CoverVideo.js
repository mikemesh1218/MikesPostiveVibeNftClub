import React from 'react'
import {styled} from 'styled-components';
import Img from '/Users/RODRI/Desktop/MyNFT/mynft/src/Assets/giphy.gif';



const VideoContainer = styled.div`
width: 100%;
height: auto;
 img{
  width: 100%;
  height: auto;
  border-radius: 10rem;
}
`



const CoverVideo = () => {
  return (
    <VideoContainer>
      <img src={Img} alt="banner_image"/>
    </VideoContainer>
  )
}

export default CoverVideo