import {React, useState} from 'react'
import styled from 'styled-components'




const Container = styled.div`
cursor: pointer;
padding: 1rem 0.5rem;
display: flex;
flex-direction: column;
margin: 3rem 0;
border-bottom: 2px solid ${props => props.theme.carouselColor};

`
const Title = styled.div`
font-size: ${props => props.theme.fontlg};
color: ${props => props.theme.body};
text-transform: capitalize;
display: flex;
justify-content: space-between;
align-items: center;

`
const Reveal = styled.div`
display: ${props => props.clicked ? 'block' : 'none'};
margin-top: 1rem;
color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
font-size: ${props => props.theme.fontmd};
font-weight: 200;
line-height: 1.5rem;
`
const Indicator = styled.div`
display: flex;
align-items: center;
color: ${props => props.theme.body};
font-size: ${props => props.theme.fontlg};
`




const Accordion = ({title, children}) => {
    const [collapse, setcollapse] = useState(false)
  return (
    <Container>
        <Title onClick={() => setcollapse(!collapse)}>
            {title}
            {
                collapse? <Indicator>_</Indicator>:<Indicator>+</Indicator>
            }
        </Title>
        <Reveal clicked={collapse}>
            {children}
        </Reveal>
    </Container>
  )
}

export default Accordion