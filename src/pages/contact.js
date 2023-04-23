import React from "react"
import Banner from "../components/banners/banner"
import FormContact from "../components/forms/formContact"
import Layout from "../components/layout"
import PortfolioBanner from "../components/portfolioBanner"
import SEO from "../components/seo"

import BannerImg from "../images/banner-image-1.png"

export default function Contact() {
  return (
    <Layout>
      <SEO
        title="Contact Us - Call Your Professional Landscapers in Calgary"
        description="Project Landscape is happy to offer you year-round landscaping services, from lawn care to snow removal. Contact us today to schedule your services."
      />
      <Banner
        img={BannerImg}
        title="you've made contact!"
        subheader="what's your project? We are Currently booking for the 2023 Season. We can’t wait to hear your ideas and share some of ours!"
        description="At Project Landscape Ltd., our premier outdoor landscaping services will increase the value and overall aesthetic of your home. We use quality brands, and unique products to help keep your lawn healthy, and your home looking incredible. This means an overall better living experience for you and your family."
      />
      <FormContact title="complete your outdoor wish list" />
      <PortfolioBanner />
    </Layout>
  )
}
