import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container, Section } from "../layoutComponents"
import { Link } from "gatsby"
import { ButtonPrimary } from "../buttons"

const Text = styled.div`
  max-width: 110ch;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  text-align: center;

  margin-bottom: var(--spacer);
`

const WrapperDark = styled.div`
  background: var(--clr-accent);
  margin-bottom: var(--spacer);
  padding-top: 2em;
  padding-bottom: 2em;
`

const GridAuto = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
  grid-gap: 2em;

  & > * {
    justify-self: center;
    align-self: center;
  }
`

const ItemLink = styled(props => <Link {...props} />)`
  position: relative;
  border-top: 6px solid var(--clr-accent);
  .service-img {
    z-index: 1;
    height: 300px;
  }
  h3 {
    font-family: var(--ff-alfa);
    font-size: var(--fs-2);
    color: var(--txt-light);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: var(--clr-dark);
  }

  &:hover {
    .overlay {
      opacity: 0.8;
      z-index: 2;
    }
    h3 {
      z-index: 3;
    }
  }
`

export default function AllServicesBanner() {
  return (
    <Section className="spacing-lg">
      <Container>
        <Text>
          {/* <p className="subheader accent">find the service you need</p> */}
          <h2 className="title">
            take a closer look at our calgary landscaping services
          </h2>
        </Text>
      </Container>
      <Container className="spacing">
        <h3 className="subheader accent center">
          popular hardscaping services
        </h3>
        <GridAuto>
        <ItemLink to="/residential-services/landscape-construction/patio-surfaces">
            <StaticImage
              className="service-img"
              src="../../images/calgary-pavers.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">pavers</h3>
            <div className="overlay"></div>
          </ItemLink>
        <ItemLink to="/residential-services/landscape-construction/retaining-walls">
            <StaticImage
              className="service-img"
              src="../../images/retaining-walls-landscaper-calgary.png"
              alt="calgary landscaping services"
            />
            <h3 className="upper">retaining walls</h3>
            <div className="overlay"></div>
          </ItemLink>
        <ItemLink to="/residential-services/outdoor-living/garden-walls">
            <StaticImage
              className="service-img"
              src="../../images/calgary-pavers.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">garden walls</h3>
            <div className="overlay"></div>
          </ItemLink>
        <ItemLink to="/residential-services/hardscaping/garden-bed-edging">
            <StaticImage
              className="service-img"
              src="../../images/edging-landscaper-calgary.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">edging</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink to="/concrete-curbing">
            <StaticImage
              className="service-img"
              src="../../images/calgary-curbing.png"
              alt="calgary landscaping services"
            />
            <h3 className="upper">curbing</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink to="/staircases-stepping-stones">
            <StaticImage
              className="service-img"
              src="../../images/calgary-stairs.png"
              alt="calgary landscaping services"
            />
            <h3 className="upper">stairs & stepping stones</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink to="/residential-services/landscape-construction/seating">
            <StaticImage
              className="service-img"
              src="../../images/seat-walls-landscaper-calgary.png"
              alt="calgary landscaping services"
            />
            <h3 className="upper">seat walls</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink to="/residential-services/concrete-installations">
            <StaticImage
              className="service-img"
              src="../../images/calgary-concrete.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">concrete</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink to="/residential-services/hardscaping/water-management">
            <StaticImage
              className="service-img"
              src="../../images/calgary-concrete.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">water mgmt</h3>
            <div className="overlay"></div>
          </ItemLink> 
        </GridAuto>
      </Container>
      <WrapperDark>
        <Container>
          <h3 className="subheader light center">
            popular softscaping services
          </h3>
          <GridAuto>
            <ItemLink to="/residential-services/landscape-construction/artificial-turf">
              <StaticImage
                className="service-img"
                src="../../images/calgary-decks.jpg"
                alt="calgary landscaping services"
              />
              <h3 className="upper">artificial turf</h3>
              <div className="overlay"></div>
            </ItemLink>
            <ItemLink to="/residential-services/irrigation-landscape-lighting">
              <StaticImage
                className="service-img"
                src="../../images/calgary-fences.jpg"
                alt="calgary landscaping services"
              />
              <h3 className="upper">irrigation</h3>
              <div className="overlay"></div>
            </ItemLink>
            <ItemLink to="/residential-services/landscape-construction/sod-installation">
              <StaticImage
                className="service-img"
                src="../../images/sod-landscaper.jpg"
                alt="calgary landscaping services"
              />
              <h3 className="upper">sod</h3>
              <div className="overlay"></div>
            </ItemLink>
            <ItemLink to="/residential-services/landscape-construction/tree-shrub-planting">
              <StaticImage
                className="service-img"
                src="../../images/tree-landscaping-calgary.jpg"
                alt="calgary landscaping services"
              />
              <h3 className="upper">shrubs & trees</h3>
              <div className="overlay"></div>
            </ItemLink>
            <ItemLink to="/residential-services/landscape-construction/mulches-decorative-rock">
              <StaticImage
                className="service-img"
                src="../../images/mulch-landscaper-calgary.jpg"
                alt="calgary landscaping services"
              />
              <h3 className="upper">mulch & rock</h3>
              <div className="overlay"></div>
            </ItemLink>
          </GridAuto>
        </Container>
      </WrapperDark>
      <Container>
        <h3 className="subheader center accent">
          popular outdoor living services
        </h3>
        <GridAuto>
          <ItemLink to="/decks-calgary">
            <StaticImage
              className="service-img"
              src="../../images/calgary-decks.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">decks</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink to="/gazebos-pergolas">
            <StaticImage
              className="service-img"
              src="../../images/pergola-2.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">pergolas</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink to="/landscape-lighting-services-calgary">
            <StaticImage
              className="service-img"
              src="../../images/lighting-calgary-landscaper.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">lighting</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink to="/landscape-design">
            <StaticImage
              className="service-img"
              src="../../images/calgary-lighting.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">design</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink to="/residential-services/water-features">
            <StaticImage
              className="service-img"
              src="../../images/water-features-2.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">water features</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink to="/residential-services/landscape-construction/fire-pits-fire-places">
            <StaticImage
              className="service-img"
              src="../../images/fire-pits-2.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">fire pits</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink to="/fence-contractor-in-calgary">
            <StaticImage
              className="service-img"
              src="../../images/fence-landscaping-calgary.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">fences</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink to="/privacy-screens">
            <StaticImage
              className="service-img"
              src="../../images/screens-landscaper.png"
              alt="calgary landscaping services"
            />
            <h3 className="upper">privacy screens</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink to="/railings">
            <StaticImage
              className="service-img"
              src="../../images/calgary-landscaping-railings.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">deck railings</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink to="/residential-services/landscape-construction/outdoor-kitchens">
            <StaticImage
              className="service-img"
              src="../../images/calgary-outdoor-kitchens.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">outdoor kitchens</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink to="/residential-services/outdoor-living/outdoor-furniture">
            <StaticImage
              className="service-img"
              src="../../images/outdoor-furniture-landscaping-calgary.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">outdoor furniture</h3>
            <div className="overlay"></div>
          </ItemLink>
        </GridAuto>
      </Container>
    </Section>
  )
}
