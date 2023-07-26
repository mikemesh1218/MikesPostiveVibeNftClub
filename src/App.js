import GlobalStyles from "./Styles/GlobalStyles";
import React from 'react'
import { ThemeProvider } from "styled-components";
import { light,dark } from "./Styles/Themes";
import Navigation from "./Components/Navigation";
import Home from '../src/Components/Sections/Home'
import About from '../src/Components/Sections/About'
import Roadmap from '../src/Components/Sections/Roadmap'
import Showcase from '../src/Components/Sections/Showcase'
import Team from '../src/Components/Sections/Team'
import Faq from '../src/Components/Sections/Faq'
import Footer from '../src/Components/Sections/Footer'
import ScrollToTop from "./Components/Sections/ScrollToTop";

function App() {
  return (
     <>
       <GlobalStyles/>
         <ThemeProvider theme={light}>
           <Navigation/>
           <Home/>
           <About/>
           <Roadmap/>
           <Showcase/>
           <Team/>
           <Faq/>
           <Footer/>
           <ScrollToTop/>
         </ThemeProvider> 
     </>
  
   
  );
}

export default App;
