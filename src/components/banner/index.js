import React, { Component } from "react";
import ParallaxMousemove from "react-parallax-mousemove";

import { Container, Link, ImageFull } from "./style";

class Banner extends Component {
  render() {
    return (
      <Container>
        <Link
          href="https://www.artstation.com/paulovieira"
          target="_blank"
          rel="noopener noreferrer"
          alt="Banner"
          title="Artista: Paulo Vieira"
        >
          <ParallaxMousemove>
            <ParallaxMousemove.Layer
              config={{
                xFactor: 0,
                yFactor: 0
              }}
              layerStyle={{
                width: "100%",
                position: "absolute",
                transform: "translate(-10%,0)"
              }}
            >
              <ImageFull src="https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/geral/banner/7.png" />
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer
              config={{
                xFactor: 0.01,
                yFactor: 0.01
              }}
              layerStyle={{
                width: "100%",
                position: "absolute",
                transform: "translate(-10%,0)"
              }}
            >
              <ImageFull src="https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/geral/banner/5.png" />
            </ParallaxMousemove.Layer>

            <ParallaxMousemove.Layer
              config={{
                xFactor: 0.02,
                yFactor: 0.02
              }}
              layerStyle={{
                width: "100%",
                position: "absolute",
                transform: "translate(0,15%)"
              }}
            >
              <ImageFull src="https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/geral/banner/6.png" />
            </ParallaxMousemove.Layer>

            <ParallaxMousemove.Layer
              config={{
                xFactor: 0.03,
                yFactor: 0.03
              }}
              layerStyle={{
                width: "100%",
                position: "absolute",
                transform: "translate(-10%,0)"
              }}
            >
              <ImageFull src="https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/geral/banner/4.png" />
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer
              config={{
                xFactor: 0.04,
                yFactor: 0.04
              }}
              layerStyle={{
                width: "100%",
                position: "absolute",
                transform: "translate(-10%,0)"
              }}
            >
              <ImageFull src="https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/geral/banner/3.png" />
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer
              config={{
                xFactor: 0.05,
                yFactor: 0.05
              }}
              layerStyle={{
                width: "100%",
                position: "absolute",
                transform: "translate(-10%,8%)"
              }}
            >
              <ImageFull src="https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/geral/banner/2.png" />
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer
              config={{
                xFactor: 0.07,
                yFactor: 0.07
              }}
              layerStyle={{
                width: "100%",
                position: "absolute",
                transform: "translate(-5%,5%)"
              }}
            >
              <ImageFull src="https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/geral/banner/1.png" />
            </ParallaxMousemove.Layer>

            <ParallaxMousemove.Layer
              config={{
                xFactor: 0.08,
                yFactor: 0.08
              }}
              layerStyle={{
                width: "100%",
                position: "absolute",
                transform: "translate(-5%,15%)"
              }}
            >
              <ImageFull src="https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/geral/banner/alex.png" />
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer
              config={{
                xFactor: 0,
                yFactor: 0
              }}
              layerStyle={{
                width: "100%",
                position: "absolute",
                transform: "translate(-5%,0)"
              }}
            >
              <ImageFull src="https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/geral/banner/logo.png" />
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer
              config={{
                xFactor: 0,
                yFactor: 0
              }}
              layerStyle={{
                width: "100%",
                position: "absolute",
                transform: "translate(-5%,0)"
              }}
            >
              <ImageFull src="https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/geral/banner/assinatura_full.png" />
            </ParallaxMousemove.Layer>
          </ParallaxMousemove>
        </Link>
      </Container>
    );
  }
}
export default Banner;

/* <ParallaxProvider>
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
            },
            {
              image:
                "https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/geral/banner/assinatura_full.png",
              amount: 0,
              expanded: false,
              slowerScrollRate: true
            }
          ]}
          style={{
            height: "90vh"
          }}
        />
      </ParallaxProvider> */
