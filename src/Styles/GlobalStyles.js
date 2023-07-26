import {createGlobalStyle} from "styled-components";
import '@fontsource/akaya-telivigala';
import '@fontsource/pacifico';



const GlobalStyles = createGlobalStyle`

*{
 margin:0;
 padding:0;
 box-sizing: border-box;
}

body{
    font-family:'pacifico',sans-serif;
    overflow-x: hidden;
}

h1,h2,h3,h4,h5,h6{
    margin:0;
    padding:0;
}

a{
   color: inherit;
   text-decoration:none; 
}

`
export default GlobalStyles;