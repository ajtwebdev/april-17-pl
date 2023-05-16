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
background: url("../../images/calgary-landscaping-faq-banner.jpg"),
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
      <SEO title="Landscaping Calgary | Top Rated | Project Landscape Ltd." description="Our trusted and top-rated Calgary landscapers can help with your residential and commercial landscaping needs. Call Us ☎️" />
      <HeroSlider />
      <Badges />
      <MainServicesLinks title="calgary landscaping services" description="Your home is your pride and joy, and we are the landscape professionals who
              can help you maintain its outdoor beauty. Increasing your
              property's value and making your yard the envy of the block,
              Project Landscape ensures that your landscaping needs are met.
              From irrigation seasonal clean-up, construction and more services,
              we are the Calgary Landscaping experts you can trust for all your
              residential landscaping needs." />
      <AllServicesBanner />
      <Wrapper>
      <Section>
        <Container>
          <Flex>
            <div>
              <h2 className="title tan">Discover why Project Landscape is the largest residential landscaping company in Calgary</h2>
            </div>
            <Divider />
            <div>
              <p>Project Landscape has established itself as Calgary's largest residential landscape company due to its commitment to taking landscape <ButtonInline to="/landscape-design">design and installations</ButtonInline> to the next level in <ButtonInline to="/residential-services/outdoor-living">outdoor living</ButtonInline>. Several factors contribute to their success and industry dominance.
Firstly, Project Landscape excels in landscape design. They have a team of highly skilled and creative designers who understand the unique needs and preferences of Calgary homeowners. Their designs blend aesthetics with functionality, ensuring that every outdoor space is transformed into a stunning and practical oasis.

Secondly, the company is known for its exceptional Calgary landscaping installation services. Project Landscape has a dedicated <ButtonInline to="/about">team of experienced professionals</ButtonInline> who execute the designs with precision and attention to detail. From <ButtonInline to="/residential-services/hardscaping">hardscaping</ButtonInline> to <ButtonInline to="/residential-services/softscaping">softscaping</ButtonInline>, <ButtonInline to="/residential-services/irrigation-landscape-lighting">irrigation systems</ButtonInline> to <ButtonInline to="/landscape-lighting-services-calgary">outdoor lighting</ButtonInline>, they handle every aspect of the installation process.

Additionally, Project Landscape stands out for its commitment to customer satisfaction. They prioritize open communication while actively involving clients in the design and installation phases. The company's dedication to meeting deadlines, providing transparent pricing, and delivering high-quality workmanship has earned them a stellar reputation among homeowners in Calgary.</p>
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
      <LandscapingImg subheader=""
        title="Landscaping services in Calgary"
        body="Since 2016, Project landscape has helped hundreds of homeowners create beautiful and functional outdoor living spaces that are filled with relaxation and enjoyment. Whether it's a complete landscape design and construction transformation or helping homeowners create a jaw-dropping curb appeal to be the envy of your neighbours, experienced and certified landscaping professionals are here to help.

We understand how frustrating it can be to deal with unreliable landscapers and ones that promise more than they can offer. Improving your landscape shouldn't be an impossible task, filled with exhausting research of unreliable landscape companies. 
If you're going to invest your time and money into hiring a landscape company for your Calgary home, you deserve the attention,expertise, great customer service and detailed focus that you invested into."
        to="/about"
        button="more about us" />
      <OasisImg title="Bring your outdoor oasis to life"
        body="Imagine stepping out into a perfect backyard oasis. A perfect place for relaxing, entertaining and everything in between. Get the ease of a single landscape provider, who understands and can help with all your outdoor needs. Use a proven Calgary landscape company that has mastered how to bring your outdoor dreams to life.
From creative softscapes to the most lucrative hardscapes, through an integrated approach, your landscape project can benefit from our seamless landscaping process. A company of professional landscape designers will take your project from concept to completion, by carefully listening to your ideas, goals and how you dream of using your outdoor space."
        to="/contact"
        button="let's get in touch" />
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
