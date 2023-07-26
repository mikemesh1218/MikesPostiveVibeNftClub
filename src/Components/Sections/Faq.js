import React from 'react'
import styled from 'styled-components'
import Accordion from './Accordion'
import { useRef,useLayoutEffect } from 'react'
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";




const Section = styled.section`
width: 100vw;
height: 100vh;
background-color: ${props => props.theme.text};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;

`
const Title = styled.h1`
width: fit-content;
color: ${props => props.theme.body};
font-size: ${props => props.theme.fontxxl};
border-bottom: 3px solid ${props => props.theme.body};
margin: 0.1rem auto;
font-family: 'verdana';
font-weight: 200;

`
const Container = styled.div`
width: 75%;
height: 60%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;
`
const Box = styled.div`
width: 45%;
height: fit-content;


`

function Faq() {

  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let element = ref.current;
    ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      end: 'bottom top',
      pin:true,
      pinSpacing:false,
      scrub:true,
    })
  
    return () => {
      ScrollTrigger.killAll()
    };
  }, [])




  return (
    <Section ref={ref} id="faq">
      <Title>FAQ</Title>
      <Container>
        <Box> 
          <Accordion title = "Where can i view my nfts?">
            Once minted simply connect to your Opensea account to view your Nfts.
          </Accordion>
          <Accordion title = "What is the Metaverse?">
            A Metaverse is a network of 3D virtual worlds focused on social connection.
          </Accordion>
          <Accordion title = "Why do we need Royalties?">
            The amount of royalties was fixed at 5% to finance this project.
          </Accordion>
        </Box>
        <Box> 
          <Accordion title = "How can i use my nft?">
            You will be able to use your Nft as an avatar in the Metaverse.
          </Accordion>
          <Accordion title = "Why does nft art have value?">
          The reason is the “market-driven value”, which depends on the speculated resale value and popularity of the artist. 
          </Accordion>
          <Accordion title = "Are nfts a good investment?">
          nfts can be categorized under the High Risk, High Reward investment type.
          </Accordion>
        </Box>
      </Container>
    </Section>
  )
}

export default Faq