import React from "react"
import { graphql } from "gatsby"
import { combineFields } from "../utils/combine-fields"
import Layout from "../components/layout"
import {
  Section,
  Container,
  HeroBannerPadding,
} from "../components/layoutComponents"
import SEO from "../components/seo"
import "@wordpress/block-library/build-style/style.css"
import "@wordpress/block-library/build-style/theme.css"
import styled from "styled-components"
import {
  ButtonPrimary,
  AnchorInline,
  ButtonInline,
} from "../components/buttons"
import ServiceForm from "../components/forms/serviceForm"
import { Link } from "gatsby"
import parse from "html-react-parser"

const BlogArticle = styled.article`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
    line-height: 1.1;
    text-transform: uppercase;
    color: var(--clr-accent);
  }
`

// Banner
const BannerGrid = styled.div`
  display: grid;
  grid-template-rows: auto 4em auto;
`

const Flex = styled.div`
  display: flex;
  justify-content: center;
`

const BannerWrapper = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / -1;
  z-index: 1;
  background: ${props => `url(${props.img})`}, rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 4em 0;

  display: grid;
  place-items: center;

  min-height: 80vh;
  height: 100%;

  @media screen and (max-width: 26em) {
    min-height: 100vh;
    height: 100%;
  }
`

const BannerText = styled.div`
  max-width: 140ch;
  width: 100%;
  color: var(--txt-light);
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const BannerBottomText = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: 2;

  background: var(--clr-dark);
  color: var(--txt-light);
  padding: 2em;
  width: 80%;
`

// Layout
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-gap: 4em;

  @media screen and (max-width: 48em) {
    display: flex;
    flex-direction: column-reverse;
  }
`

const Aside = styled.div`
  grid-column: 1 / span 1;

  .service-form {
    @media screen and (max-width: 48em) {
      display: none;
    }
  }
`

const Navigation = styled.div`
  box-shadow: var(--shadow-light);
  border-radius: var(--br);
  padding: 2em;

  ul {
    list-style-type: none;
    margin: var(--spacer) 0 0 0;
    padding: 0;
    text-transform: capitalize;

    & > * + * {
      margin-top: 0.2em;
    }
  }
`

const Content = styled.div`
  grid-column: 2 / -1;
  @media screen and (max-width: 48em) {
    grid-row: 1 / span 1;
  }
`

const Img = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`

const ServiceAreas = styled.div`
  padding: 2em;
  border: 1px solid var(--txt-dark-secondary);
  border-radius: var(--br);
`

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
color: var(--clr-accent);

`

const NewsTemplate = ({data}) => {
  
  // const data = combineFields(pageProps.data.wpPost, "post")
  return (
    <Layout>
      {/* <Banner {...data} /> */}
      {/* {data.title && data.excerpt ? (
        <SEO title={data.title} description={data.excerpt} />
      ) : null} */}

      {/* {data.title ? (
        <div>
          <HeroBannerPadding />
          <BannerGrid>
            <BannerWrapper
              img={data.bannerImage.localFile.childImageSharp.fluid.src}
            >
              <Container className="spacing">
                <BannerText className="spacing">
                  <div className="">
                    <h1 className="title">{data.title}</h1>
                  </div>
                  <ButtonPrimary to="/contact">get free estimate</ButtonPrimary>
                </BannerText>
              </Container>
            </BannerWrapper>
            <BannerBottomText>
              <Container>
                <p>{data.excerpt}</p>
              </Container>
            </BannerBottomText>
          </BannerGrid>
        </div>
      ) : null} */}
<SEO title={data.wpPost.title} description={data.wpPost.excerpt} />
      <Section>
        <Container className="spacing">
          <Wrapper>
            <Aside className="spacing">
              <Navigation className="spacing">
                <h3 className="caps accent title bold">
                  Landscaping <br /> Services
                </h3>
                <div>
                <ul>
                      <h3 className="subheader">
                        <Link to="/residential-services/hardscaping">
                          hardscaping
                        </Link>
                      </h3>
                      <li>
                        <StyledLink to="/residential-services/landscape-construction/patio-surfaces">
                          paving stones
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/landscape-construction/retaining-walls">
                          retaining walls
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/outdoor-living/garden-walls">
                          garden walls
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/hardscaping/garden-bed-edging">
                          garden bed edging
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/concrete-curbing">
                          concrete curbing
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/staircases-stepping-stones">
                          stairs and stepping stones
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/landscape-construction/seating">
                          seat walls and pillars
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/concrete-installations">
                          concrete installation
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/hardscaping/water-management">
                          water management
                        </StyledLink>
                      </li>
                    </ul>

                    <ul>
                      <h3 className="subheader">
                        <Link to="/residential-services/softscaping">
                          softscaping
                        </Link>
                      </h3>
                      <li>
                        <StyledLink to="/residential-services/landscape-construction/artificial-turf">
                          artificial turf
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/irrigation-landscape-lighting">
                          irrigation installation
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/landscape-construction/sod-installation">
                          sod installation
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/landscape-construction/tree-shrub-planting">
                          shrub and tree planting
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/landscape-construction/mulches-decorative-rock">
                          mulch and decorative rock
                        </StyledLink>
                      </li>

                      {/* {data.wpMenu.menuItems.nodes.map(mainItem => {
                        return (
                          <>
                            {mainItem.childItems.nodes.map(childItem1 => {
                              return (
                                <>
                                  {childItem1.childItems.nodes.map(
                                    childItem2 => {
                                      return (
                                        <li key={childItem2.id}>
                                          <StyledLink to={childItem2.url}>
                                            {childItem2.label}
                                          </StyledLink>
                                        </li>
                                      )
                                    }
                                  )}
                                </>
                              )
                            })}
                          </>
                        )
                      })} */}
                    </ul>

                    <ul>
                      <h3 className="subheader">
                        <Link to="/residential-services/outdoor-living">
                          outdoor living
                        </Link>
                      </h3>
                      <li>
                        <StyledLink to="/decks-calgary">
                          decks
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/gazebos-pergolas">
                          pergolas
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/landscape-lighting-services-calgary">
                          landscape lighting
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/landscape-design">
                          landscape design
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/water-features">
                          water features
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/landscape-construction/fire-pits-fire-places">
                          fire pits and fire places
                        </StyledLink>
                      </li>

                      <li>
                        <StyledLink to="/fence-contractor-in-calgary">
                          fences
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/privacy-screens">
                          privacy screens
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/railings">
                          deck railings
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/landscape-construction/outdoor-kitchens">
                          outdoor kitchens
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/outdoor-living/outdoor-furniture">
                          outdoor furniture
                        </StyledLink>
                      </li>
                    </ul>
                </div>
              </Navigation>
              <div className="service-form">
                <ServiceForm />
              </div>
            </Aside>
            <Content className="spacing">
              <div>
                <p className="caps bold">from the landscaping experts</p>
                <h1 className="title accent bold italics">{parse(data.wpPost.title)}</h1>
              </div>
              <BlogArticle className="blog-post">
              {!!post.content && (
                    <section itemProp="articleBody">
                      {parse(data.wpPost.content)}
                    </section>
                  )}
                  </BlogArticle>
            </Content>
          </Wrapper>
        </Container>
      </Section>
    </Layout>
  )
}

export default NewsTemplate

export const query = graphql`
query postBy($id: String!) {
  wpPost(id: { eq: $id })  {
    id
    excerpt
    content
    title
    date(formatString: "MMMM DD, YYYY")
  }
}
`
