import React from "react";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import { Container } from "./style";

const Banner = () => (
  <Container>
    <ParallaxProvider>
      <ParallaxBanner
        className="Banner"
        layers={[
          {
            image:
              "https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/geral/banner/7.png",
            amount: 0.8,
            expanded: false,
            slowerScrollRate: false
          },
          {
            image:
              "https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/geral/banner/6.png",
            amount: 0.7,
            expanded: false,
            slowerScrollRate: false
          },
          {
            image:
              "https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/geral/banner/5.png",
            amount: 0.6,
            expanded: false,
            slowerScrollRate: true
          },
          {
            image:
              "https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/geral/banner/4.png",
            amount: 0.5,
            expanded: false,
            slowerScrollRate: true
          },
          {
            image:
              "https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/geral/banner/3.png",
            amount: 0.4,
            expanded: false,
            slowerScrollRate: true
          },
          {
            image:
              "https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/geral/banner/2.png",
            amount: 0.3,
            expanded: false,
            slowerScrollRate: true
          },
          {
            image:
              "https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/geral/banner/1.png",
            amount: 0.2,
            expanded: false,
            slowerScrollRate: true
          },
          {
            image:
              "https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/geral/banner/alex.png",
            amount: 0.1,
            expanded: false,
            slowerScrollRate: true
          },
          {
            image:
              "https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/geral/banner/logo.png",
            amount: 0,
            expanded: false,
            slowerScrollRate: true
          }
        ]}
        style={{
          height: "90vh"
        }}
      />
    </ParallaxProvider>
  </Container>
);

export default Banner;
