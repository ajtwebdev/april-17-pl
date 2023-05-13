import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainServicesLinks from "../components/services/mainServicesLinks"
import AllServicesBanner from "../components/services/allServicesBanner"
import FaqFeatured from "../components/faq/faqFeatured"
import MainTestimonials from "../components/testimonials/mainTestimonials"
import HeroSlider from "../components/heros/heroSlider"
import Cta3 from "../components/cta/cta3"
import { Section, Container } from "../components/layoutComponents"

export default function residentialServicesPage() {
  return (
    <Layout>
      <SEO title="Residential Landscaping Services in Calgary | Project Landscape" description="As one of Calgary’s most trusted full-service landscape design and maintenance company with more than 20 years of combined experience, our knowledgeable team is dedicated to putting your needs first and providing you with a quality of service. " />
      <HeroSlider />
      <MainServicesLinks title="RESIDENTIAL SERVICES" description="As one of Calgary’s most trusted full-service landscape design and maintenance company with more than 20 years of combined experience., our knowledgeable team is dedicated to putting your needs first and providing you with a quality of service. Our performance and execution are what make us stand out, proving our code of conduct and ethics are our driving force behind the superior level of work. Whether you are looking for seasonal yard clean-up or landscaping construction, we are the team you can trust to get the job done right, making your landscaping visions come to life." />
      <Cta3 />
      <AllServicesBanner />
      <Cta3 />
      <MainTestimonials />
      <FaqFeatured />
    </Layout>
  )
}
