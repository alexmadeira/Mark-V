import { injectGlobal } from "styled-components";

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Bangers');
@import url('https://use.fontawesome.com/releases/v5.1.0/css/all.css');
@import url('https://fonts.googleapis.com/css?family=Architects+Daughter');

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  outline:0;
  -webkit-transition: opacity .5s linear;
  -moz-transition: opacity .5s linear;
  -o-transition: opacity .5s linear;
  transition: opacity .5s linear;
}

html,body, #__next {
  height:100%;
  max-width: 100vw;  
}

html {
  overflow-x: hidden;
}
body{
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  background: #ffffff;
  font-family: 'Architects Daughter', cursive;
  font-size: 16px;
}
img{
  max-width:100%;
}
.noHidden{
  overflow:initial!important
}
.topMargin{
  margin-top:30px;
}
.noHorizontalMargin{
  margin-left:0!important;
  margin-right:0!important;
}


`;
