import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ButtonInline, ButtonUnderline } from "../buttons"
import { Container, Section } from "../layoutComponents"
import { Link } from "gatsby"

const device = {
  md: "48em",
}

const Text = styled.div`
  max-width: 90ch;
  width: 100%;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2em auto 140px;
  grid-template-rows: 2em auto 2em;
`

const List = styled.div`
  width: 85%;
  margin: 0 auto;
  max-width: 95rem;
  grid-row: 2 / -1;
  grid-column: 2 / -1;
  z-index: 2;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;

  @media screen and (max-width: ${device.md}) {
    grid-template-columns: 1fr;
  }

  & > * {
    justify-self: center;
    align-self: center;
  }
`

const Bg = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / span 2;

  z-index: 1;
  background: var(--clr-accent);
`

const ItemLink = styled(props => <Link {...props} />)`
  background: var(--clr-dark);
  color: var(--txt-light);
  text-decoration: none;

  div {
    padding: 1em;
  }

  &:hover {
    color: var(--txt-light);
  }
`

export default function MainTrends() {
  return (
    <Section>
      <div className="spacing">
        <Container>
          <Text className="spacing ">
            <div>
              {/* <p className="subheader accent">title for trends</p> */}
              <h2 className="title">calgary landscaping trends</h2>
            </div>
            <p>
              We take pride in staying up to date with the latest trends and
              techniques in the landscaping industry. We are passionate about
              providing our customers with innovative and unique <ButtonInline to="/landscape-design">Calgary landscaping
              designs</ButtonInline> that will enhance the beauty and functionality of their
              <ButtonInline to="/outdoor-living">outdoor space</ButtonInline>. Our team regularly attends industry events,
              workshops, and training sessions to stay current with the newest
              landscaping trends and technologies. We take this knowledge and
              apply it to every project, ensuring that our customers receive the
              most innovative and cutting-edge landscaping solutions available.
              Trust us to bring your vision to life with the latest and greatest
              Calgary landscaping trends.
            </p>
          </Text>
        </Container>
        <Grid>
          <Bg />
          <List>
            <ItemLink to="/blog">
              <StaticImage
                src="../../images/calgary-landscaping-color.jpg"
                alt="calgary hardscaping services"
              />
              <div>
                <h3 className="subheader">Design & landscape styles </h3>
                <ButtonUnderline className="service-button" to="/landscape-styles">
                  learn more &#8594;
                </ButtonUnderline>
              </div>
            </ItemLink>
            <ItemLink to="/blog">
              <StaticImage
                src="../../images/calgary-landscaping-texture.jpg"
                alt="calgary softscaping services"
              />
              <div>
                <h3 className="subheader">Outdoor living inspiration</h3>
                <ButtonUnderline className="service-button" to="/outdoor-living-inspiration">
                  learn more &#8594;
                </ButtonUnderline>
              </div>
            </ItemLink>
            <ItemLink to="/blog">
              <StaticImage
                src="../../images/calgary-landscaping-scale.jpg"
                alt="outdoor landscaping services calgary"
              />
              <div>
                <h3 className="subheader">Landscape trends</h3>
                <ButtonUnderline className="service-button" to="/landscaping-trends">
                  learn more &#8594;
                </ButtonUnderline>
              </div>
            </ItemLink>
          </List>
        </Grid>
      </div>
    </Section>
  )
}
