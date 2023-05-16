import React from "react"
import Banner from "../components/banners/banner"
import Layout from "../components/layout"
import SEO from "../components/seo"

import BannerImg from "../images/banner-image-2.jpg"

export default function FreeResources() {
  return (
    <Layout>
      <SEO
        title="Free Landscaping Resources | Project Landscape Ltd."
        description="Project Landscape provides free downloadable resources for customers who want to improve their outdoor living space!"
      />
      <Banner
        img={BannerImg}
        title="free landscaping and outdoor living resources"
        description="At Project Landscape Ltd., our premier outdoor landscaping services will increase the value and overall aesthetic of your home. We use quality brands, and unique products to help keep your lawn healthy, and your home looking incredible. This means an overall better living experience for you and your family."
      />
    </Layout>
  )
}
