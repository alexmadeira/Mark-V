import { injectGlobal } from "styled-components";
injectGlobal`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  outline:0;
}
html,body,#root{
  height:100%;
}
html {
  overflow-x: hidden;
}
body{
  text-rendering:optimizeLegibility!important;
  -webkit-font-smoothing: antialiased!important;
  background: #ffffff;
  font-family: 'Architects Daughter', cursive;
  font-size: 16px;
}
`;
