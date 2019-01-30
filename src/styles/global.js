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
  overflow-x: hidden;

}
html {
}
body{
  text-rendering:optimizeLegibility!important;
  -webkit-font-smoothing: antialiased!important;
  background: #ffffff;
  font-family: 'Architects Daughter', cursive;
  font-size: 16px;
}
.lt-image {
  position: relative;
  overflow: hidden;
  img {
    min-height: 104%;
    display:block;
    &.preload {
      display: block;
      position: absolute;
      height: 104%;
      left: 50%;
      transform: translate(-50%,0);
      z-index: 2;
      filter: blur(10px);
      transition: opacity .3s;
    }
  }
  &._loaded {
    img {
      &.preload {
        opacity: 0;
      }
    }
  }
}

`;
