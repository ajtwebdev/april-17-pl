import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ButtonInline, ButtonPrimary, ButtonPrimaryDark } from "../buttons"
import { Actions, Container, FlexMobileOpp, Section } from "../layoutComponents"

const TextTop = styled.div`
  text-align: center;

  width: 85%;
  margin: 0 auto;
  max-width: 95rem;
`

const Text = styled.div``

const Grid = styled.div`
  display: grid;
  grid-template-rows: 4em auto 4em;
  grid-template-columns: 2em auto 2em;
`

const Bg = styled.div`
  background: var(--clr-accent);
  grid-column: 2 / -1;
  grid-row: 1 / -1;
  z-index: 1;
`

const Video = styled.div`
  grid-column: 1 / span 2;
  grid-row: 2 / span 1;
  z-index: 2;
`

export default function MainVideo() {
  return (
    <Section>
      <div className="spacing-lg">
        <TextTop>
          <h2 className="subheader accent">
            the most trusted landscape companies in Calgary, AB
          </h2>
          <h3 className="title">
            Welcome to a different kind of customer experience in outdoor living
          </h3>
        </TextTop>
        <FlexMobileOpp className="spacing">
          <Text>
            <Container className="spacing">
              <div>
                <h3 className="subheader">redefining landscaping in calgary</h3>
                <p>
                  Project Landscape redefines the fundamentals of{" "}
                  <ButtonInline to="/residential-services/irrigation-landscape-lighting">
                    landscape installation
                  </ButtonInline>
                  , landscape maintenance and landscape services throughout
                  Calgary and{" "}
                  <ButtonInline to="/areas-we-service">
                    surrounding areas
                  </ButtonInline>
                  . We design, build and maintain landscapes for both{" "}
                  <ButtonInline to="/residential-services">
                    Residential
                  </ButtonInline>{" "}
                  and the{" "}
                  <ButtonInline to="/commercial-services">
                    business
                  </ButtonInline>{" "}
                  community.{" "}
                  <ButtonInline to="/contact">Contact us</ButtonInline> to hire
                  our landscaping Calgary team today!
                </p>
              </div>
              <div>
                <h3 className="subheader">
                  giving you a personal calgary landscaping paradise
                </h3>
                <p>
                  Our professional experience and knowledge helps us tackle any
                  <ButtonInline to="/portfolio">
                    landscaping project
                  </ButtonInline>{" "}
                  thrown our way - weather its installing a complete landscape
                  or giving a Calgary business a more attractive{" "}
                  <ButtonInline to="/concrete-curbing">
                    curb - appeal
                  </ButtonInline>
                  . We give our customers a personal paradise, with minimal
                  maintenance so they can just sit back and enjoy.
                </p>
              </div>
              <div>
                <h3 className="subheader">
                  increasing the beauty of your Calgary landscape
                </h3>
                <p>
                  <ButtonInline to="/about">Project Landscape</ButtonInline> has
                  all of the expertise, the highest insurance that the industry
                  has to offer, we are in good standing with the workers
                  compensation board and have the staff to increase the beauty
                  of your property through{" "}
                  <ButtonInline to="/decks-calgary">deck building</ButtonInline>
                  ,{" "}
                  <ButtonInline to="/residential-services/landscape-construction/patio-surfaces">
                    deck installs
                  </ButtonInline>
                  ,{" "}
                  <ButtonInline to="/residential-services/landscape-construction/patio-surfaces">
                    deck patios
                  </ButtonInline>
                  , landscaping and more.
                </p>
              </div>

              <Actions>
                <ButtonPrimaryDark to="/contact">get started</ButtonPrimaryDark>
                <ButtonPrimary to="/about">about us</ButtonPrimary>
              </Actions>
            </Container>
          </Text>
          <Grid>
            <Bg />
            <Video>
              <StaticImage
                src="../../images/calgary-landscaping-experience.png"
                alt="best landscaping company in calgary, AB"
              />
            </Video>
          </Grid>
        </FlexMobileOpp>
      </div>
    </Section>
  )
}
