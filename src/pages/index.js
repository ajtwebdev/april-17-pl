import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainServicesLinks from "../components/services/mainServicesLinks"
import AllServicesBanner from "../components/services/allServicesBanner"

import ShowroomSection from "../components/sections/showroomSection"
import MainVideo from "../components/sections/mainVideo"
import Why from "../components/why"
import MainTrends from "../components/trends/mainTrends"
import FaqFeatured from "../components/faq/faqFeatured"
import Ebook from "../components/ebook"

import MainTestimonials from "../components/testimonials/mainTestimonials"
import HeroSlider from "../components/heros/heroSlider"
import ProductsImg from "../components/sections/productsImg"
import LandscapingImg from "../images/banner-image-2.jpg"
import Cta3 from "../components/cta/cta3"
import Badges from "../components/badges"
import Videos from "../components/videos"
import { Section, Container, Flex } from "../components/layoutComponents"
import styled from "styled-components"
import { ButtonInline } from "../components/buttons"
import OasisImg from "../components/sections/oasisImg"

const Wrapper = styled.div`
  background: url("http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/hardscaping-slider.webp"),
    rgba(0, 0, 0, 0.8);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--txt-light);
`

const Divider = styled.div`
  width: 3px;
  height: 400px;
  background-color: var(--clr-accent);

  @media screen and (max-width: 48em) {
    display: none;
  
`

export default function index() {
  return (
    <Layout>
      <SEO
        title="Landscaping Calgary | Top Rated | Project Landscape Ltd."
        description="Our trusted and top-rated Calgary landscapers can help with your residential and commercial landscaping needs. Call Us ☎️"
      />
      <HeroSlider />
      <Badges />
      <MainServicesLinks title="calgary landscaping services" />
      <AllServicesBanner />
      <Wrapper>
        <Section>
          <Container>
            <Flex>
              <div>
                <h2 className="title tan">
                  Discover why Project Landscape is the largest residential
                  landscaping company in Calgary
                </h2>
              </div>
              <Divider />
              <div>
                <p>
                  <ButtonInline to="/about">Project Landscape</ButtonInline> has
                  established itself as the largest residential Calgary
                  landscaping company due to its commitment to taking landscape{" "}
                  <ButtonInline to="/landscape-design">
                    design and installations
                  </ButtonInline>{" "}
                  to the next level in{" "}
                  <ButtonInline to="/residential-services/outdoor-living">
                    outdoor living
                  </ButtonInline>
                  . Several factors contribute to their success and industry
                  dominance. Firstly, Project Landscape excels in{" "}
                  <ButtonInline to="/landscape-design">
                    landscape design
                  </ButtonInline>
                  . They have a team of highly skilled and creative designers
                  who understand the unique needs and preferences of Calgary
                  homeowners. Their designs blend aesthetics with functionality,
                  ensuring that every outdoor space is transformed into a
                  stunning and practical oasis. Secondly, the company is known
                  for its exceptional Calgary landscaping{" "}
                  <ButtonInline to="/esidential-services/concrete-installations">
                    installation services
                  </ButtonInline>
                  . Project Landscape has a dedicated{" "}
                  <ButtonInline to="/about">
                    team of experienced professionals
                  </ButtonInline>{" "}
                  who execute the designs with precision and attention to
                  detail. From{" "}
                  <ButtonInline to="/residential-services/hardscaping">
                    hardscaping
                  </ButtonInline>{" "}
                  to{" "}
                  <ButtonInline to="/residential-services/softscaping">
                    softscaping
                  </ButtonInline>
                  ,{" "}
                  <ButtonInline to="/residential-services/irrigation-landscape-lighting">
                    irrigation systems
                  </ButtonInline>{" "}
                  to{" "}
                  <ButtonInline to="/landscape-lighting-services-calgary">
                    outdoor lighting
                  </ButtonInline>
                  , they handle every aspect of the installation process.
                  Additionally, Project Landscape Calgary stands out for its
                  commitment to customer satisfaction. They prioritize open
                  communication while actively involving clients in the design
                  and installation phases. The company's dedication to meeting
                  deadlines, providing transparent pricing, and delivering
                  high-quality workmanship has earned them a{" "}
                  <ButtonInline to="/testimonials">
                    stellar reputation
                  </ButtonInline>{" "}
                  among homeowners in Calgary.
                </p>
              </div>
            </Flex>
          </Container>
        </Section>
      </Wrapper>
      <Cta3 />
      <ProductsImg
        subheader=""
        title="get the highest quality calgary landscaping materials"
        to="/calgary-landscaping-materials"
        button="discover products"
      />
      <ShowroomSection />
      <MainVideo />
      <LandscapingImg
        title="Landscaping services in Calgary"
        to="/about"
        button="more about us"
      />
      <OasisImg
        title="Bring your outdoor oasis to life"
        to="/contact"
        button="let's get in touch"
      />
      <Cta3 />
      <MainTrends />
      <Why />
      <Ebook title="download our landscaping ebook" href="" />
      <MainTestimonials />
      <FaqFeatured />
      <Videos />
    </Layout>
  )
}
