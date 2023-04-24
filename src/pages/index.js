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
import ImageLeft from "../components/sections/imageLeft"
import ImageRight from "../components/sections/imageRight"
import LandscapingImg from "../images/banner-image-2.jpg"
import LandscapingImg2 from "../images/banner-image-4.jpg"
import Cta3 from "../components/cta/cta3"

export default function index() {
  return (
    <Layout>
      <SEO title="home" description="" />
      <HeroSlider />
      <MainServicesLinks />
      <Cta3 />
      <AllServicesBanner />
      <ProductsImg
        subheader=""
        title="get the highest quality calgary landscape materials"
        body="Your home is your pride and joy, and we are the professionals who can help you maintain its outdoor beauty. Increasing your property's value and making your yard the envy of the block, Project Landscape ensures that your landscaping needs are met. From irrigation seasonal clean-up, construction and more services, we are the Calgary Landscaping experts you can trust for all your residential landscaping needs."
        to="/calgary-landscaping-materials"
        button="discover products"
      />
      <ShowroomSection />
      <MainVideo />
      <ImageLeft
        img={LandscapingImg}
        alt="landscaping services in calgary, AB"
        subheader=""
        title="Landscaping services in Calgary"
        body="Since 2016, Project landscape has helped hundreds of homeowners create beautiful and functional outdoor living spaces that are filled with relaxation and enjoyment. Whether it's a complete landscape design and construction transformation or helping homeowners create a jaw-dropping curb appeal to be the envy of your neighbours, experienced and certified landscaping professionals are here to help.

We understand how frustrating it can be to deal with unreliable landscapers and ones that promise more than they can truly offer. Improving your landscape shouldn't be an impossible task, filled with exhausting research of unreliable landscape companies. 
If you're going to invest your time and money into hiring a landscape company for your Calgary home, you deserve the attention,expertise, great customer service and detailed focus that you invested into."
        to="/about"
        button="more about us"
      />
      <Cta3 />
      <ImageRight
        img={LandscapingImg2}
        alt="best landscaper in calgary, AB"
        title="Bring your outdoor oasis to life  "
        body="Imagine stepping out into a perfect backyard oasis. A perfect place for relaxing, entertaining and everything in between. Get the ease of a single landscape provider, who understands and can help with all your outdoor needs. Use a proven Calgary landscape company that has mastered how to bring your outdoor dreams to life.
From creative softscapes to the most lucrative hardscapes, through an integrated approach, your landscape project can benefit from our seamless landscaping process. A company of professional landscape designers will take your project from concept to completion, by carefully listening to your ideas, goals and how you dream of using your outdoor space."
        to="/contact"
        button="let's get in touch"
      />
      <MainTrends />
      <Why />
      <Ebook title="download our landscaping ebook" href="" />
      <MainTestimonials />
      <FaqFeatured />
    </Layout>
  )
}
