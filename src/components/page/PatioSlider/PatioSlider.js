import React from "react"
import styled from "styled-components"
import { ButtonPrimary, ButtonSecondaryLight } from "../../buttons"
import { Actions, Container, HeroBannerPadding } from "../../layoutComponents"
import { StaticImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"
import { Autoplay } from "swiper"

const Wrapper = styled.div`
  padding-bottom: 4em;
  p {
    margin-bottom: 0;
  }

  .carousel-indicators {
    margin-bottom: 4rem;
  }
`

const HeroGrid = styled.div`
  display: grid;
  grid-template-rows: auto 4em auto;
`

const HeroWrapper = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / -1;
  z-index: 1;
`

const HeroBottomText = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: 2;

  background: var(--clr-dark);
  color: var(--txt-light);
  padding: 2em;
  width: 80%;
`

const Content = styled.div`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`

const Content1 = styled.div`
  background: url("../../../images/patio-slider-1.png"), rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  background-position: center;
  height: 85vh;
  background-size: cover;
  background-repeat: no-repeat;
`
const Content2 = styled.div`
  background: url("../../../images/patio-slider-2.png"), rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  background-position: center;
  height: 85vh;
  background-size: cover;
  background-repeat: no-repeat;
`
const Content3 = styled.div`
  background: url("../../../images/patio-slider-3.png"), rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  background-position: center;
  height: 85vh;
  background-size: cover;
  background-repeat: no-repeat;
`

const captionStyle = {
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  height: "90%",
  left: "12%",
  color: "var(--txt-light)",
}

export default function PatioSlider({ title }) {
  return (
    <Wrapper>
      <HeroBannerPadding />
      <HeroGrid>
        <HeroWrapper>
          <Carousel>
            <Carousel.Item interval={5000}>
              <Content>
                <Content1 className="d-block w-100" />
              </Content>
              <Carousel.Caption style={captionStyle} className="spacing">
                <div className="spacing">
                  <h1 className="title">
                    Calgary's largest residential paving stone installer{" "}
                  </h1>
                  <p className="subheader tan">
                    In the middle: The confidence to stand out{" "}
                  </p>
                  <ButtonPrimary to="/contact">get started</ButtonPrimary>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <Content>
                <Content2 className="d-block w-100" />
              </Content>
              <Carousel.Caption style={captionStyle} className="spacing">
                <div className="spacing">
                  <h2 className="title">
                    Patios, Walkways, Pool Decks, Driveays
                  </h2>
                  <p className="subheader tan">A style for every home</p>
                  <ButtonPrimary to="/contact">get started</ButtonPrimary>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <Content>
                <Content3 className="d-block w-100" />
              </Content>
              <Carousel.Caption style={captionStyle} className="spacing">
                <div className="spacing">
                  <h2 className="title">take a step outdoors</h2>
                  <p className="subheader tan">
                    Expand your outdoor living space to its full potential
                  </p>
                  <ButtonPrimary to="/contact">get started</ButtonPrimary>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </HeroWrapper>
        <HeroBottomText>
          <Container>
            <p>
              Looking for Calgary hardscaping companies or patio builders? Look
              no further than Project Landscape. Our team of experts is here to
              help you create the outdoor living space of your dreams. With our
              experience and expertise in hardscaping and patio construction, we
              can transform your backyard into a beautiful and functional oasis.
              Trust Project Landscape to bring your vision to life. Contact us
              today to get started on your project.
            </p>
          </Container>
        </HeroBottomText>
      </HeroGrid>
    </Wrapper>
  )
}
