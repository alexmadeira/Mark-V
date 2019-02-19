import React from 'react';

import PolarChart from '../../block/charts/polar';

import { Container, ChartBox, ChartTitle } from './style';

const Habilidade = () => (
  <Container>
    <ChartBox>
      <ChartTitle>Ferramentas</ChartTitle>
      <PolarChart
        labels={['Photoshop', 'Google Analytics', 'Amazon Web services', 'Firebase']}
        data={[15, 30, 45, 25]}
        hue="#00f"
      />
    </ChartBox>
    <ChartBox>
      <ChartTitle>Linguagens Client Side</ChartTitle>
      <PolarChart labels={['JavaScript', 'HTML/HTML5', 'CSS/CSS3']} data={[80, 100, 90]} />
    </ChartBox>
    <ChartBox>
      <ChartTitle>Linguagens Server Side</ChartTitle>
      <PolarChart
        labels={['PHP', 'MongoDB', 'MySql', 'Node', 'Solr']}
        data={[90, 70, 80, 75, 60]}
      />
    </ChartBox>
    <ChartBox>
      <ChartTitle>FrameWorks</ChartTitle>
      <PolarChart
        labels={['Laravel', 'Codeigniter', 'AdonisJs', 'ExpressJs']}
        data={[60, 95, 80, 75]}
      />
    </ChartBox>
    <ChartBox>
      <ChartTitle>Bibliotecas</ChartTitle>
      <PolarChart
        labels={['JQuery', 'Reactjs', 'ReactNative', 'Redux/Redux-saga', 'Styled Components']}
        data={[90, 80, 75, 70, 95]}
      />
    </ChartBox>
    <ChartBox>
      <ChartTitle>Outros</ChartTitle>
      <PolarChart
        labels={['Facebook API', 'Google API', 'Instagram API', 'Wordpress', 'GIT']}
        data={[50, 30, 40, 70, 60]}
      />
    </ChartBox>
  </Container>
);
export default Habilidade;
