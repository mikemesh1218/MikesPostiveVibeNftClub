import React from 'react'
import styled from 'styled-components'





const Section = styled.section`
width: 100vw;
min-height: 100vh;
background-color: ${props => props.theme.body};
position: relative;

`
const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 4px solid black;
width: fit-content;
`
const Container = styled.div`
width: 80%;
height: 150vh;
background-color: ${props => props.theme.body};
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const Items = styled.ul`
list-style: none;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: ${props => props.theme.body};

&>*:nth-of-type(2n +1){
justify-content: start;
div{
  border-radius: 50px 0 50px 0;
  text-align: left;
}
}
&>*:nth-of-type(2n){
justify-content: end;
div{
  border-radius: 50px 0 50px 0;
  text-align: right;
}
}


`
const Item = styled.li`
display: flex;
width: 100%;
height: 100%;
`
const ItemContainer = styled.div`
width: 55%;
height: fit-content;
padding: 0.5rem;
border: 3px solid ${props => props.theme.text};

`
const Box = styled.p`
height: fit-content;
background-color: ${props => props.theme.carouselColor} ;
color: ${props => props.theme.text};
display: flex;
flex-direction: column;
padding: 1rem;
position: relative;
border: 1px solid ${props => props.theme.text};
border-radius: 50px 0 50px 0;
`
const SubTitle = styled.span`
display: block;
font-size: ${props => props.theme.fontxl};
text-transform: capitalize;
color: ${props => props.theme.text};
`
const Text = styled.span`
display: block;
font-size: ${props => props.theme.fontsm};
text-transform: capitalize;
color: ${props => props.theme.text};

font-weight: 400;
margin: 0.5rem 0;
`







const RoadMapItem = ({title, subtext}) => {
  return(
    <Item>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  )
}



function Roadmap() {
  return (
    <Section id="roadmap">
      <Title>
        Roadmap
      </Title>
      <Container>
        <Items>
          <RoadMapItem title='Grand Opening' subtext='This is sub text'/>
          <RoadMapItem title='Great Benefits' subtext='This is sub text'/>
          <RoadMapItem title='Early Access' subtext='This is sub text'/>
          <RoadMapItem title='New Merch' subtext='This is sub text'/>
          <RoadMapItem title='Holders Ranking' subtext='This is sub text'/>
        </Items>
      </Container>
    </Section>
  )
}

export default Roadmap