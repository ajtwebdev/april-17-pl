import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainServicesLinks from "../components/services/mainServicesLinks"
import AllServicesBanner from "../components/services/allServicesBanner"
import FaqFeatured from "../components/faq/faqFeatured"
import MainTestimonials from "../components/testimonials/mainTestimonials"
import HeroSlider from "../components/heros/heroSlider"
import Cta3 from "../components/cta/cta3"

export default function residentialServicesPage() {
  return (
    <Layout>
      <SEO title="Residential Landscaping Services" description="" />
      <HeroSlider />
      <MainServicesLinks />
      <Cta3 />
      <AllServicesBanner />
      <Cta3 />
      <MainTestimonials />
      <FaqFeatured />
    </Layout>
  )
}
