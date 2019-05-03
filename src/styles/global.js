import { injectGlobal, keyframes } from 'styled-components';

const fade = keyframes`
0% { opacity: 0; }
100% { opacity: 1; }
`;

injectGlobal`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  outline:0;
}

html,body,#root{
  height:100vh;
}
#root{
    transition:opacity .5s;
}

.loadded{
  #root{
    opacity:1!important;
  }
}

body{
  text-rendering:optimizeLegibility!important;
  -webkit-font-smoothing: antialiased!important;
  background: #fff;
  font-family: 'Architects Daughter', cursive;
  font-size: 16px;
}

.lt-image {
  position: relative;
  overflow: hidden;
  img {
    min-height: 100%;
    position: relative;
    display:block;
    transform: translate(-50%,0);
    &.preload {
      display: block;
      position: absolute;
      top: -2%;
      left: 50%;
      height: 104%!important;
      z-index: 2;
      animation: ${fade} 50ms;
      filter: blur(10px);
    }
    &.content{
      left: 50%;
    }
  }
  &._loaded {
    img {
      &.preload {
        opacity: 0;
        position:absolute
      }
    }
  }
}
#nprogress .bar {
  height: 5px!important;
  background: #ed942f!important;
  background: -moz-linear-gradient(left, #ed942f 0%, #ffd702 100%)!important;
  background: -webkit-gradient(
  left top,
  right top,
  color-stop(0%, #ed942f),
  color-stop(100%, #ffd702)
  )!important;
  background: -webkit-linear-gradient(left, #ed942f 0%, #ffd702 100%)!important;
  background: -o-linear-gradient(left, #ed942f 0%, #ffd702 100%)!important;
  background: -ms-linear-gradient(left, #ed942f 0%, #ffd702 100%)!important;
  background: linear-gradient(to right, #ed942f 0%, #ffd702 100%)!important;
}

#nprogress .peg {
  box-shadow: 0 0 10px  #ed942f, 0 0 5px  #ffd702!important;
}

#nprogress .spinner-icon {
  border-top-color:  #ed942f!important;
  border-left-color:  #ffd702!important;
}
`;
