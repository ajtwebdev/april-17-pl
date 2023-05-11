import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import MainServicesLinks from "../../components/services/mainServicesLinks"
import AllServicesBanner from "../../components/services/allServicesBanner"
import FaqFeatured from "../../components/faq/faqFeatured"
import MainTestimonials from "../../components/testimonials/mainTestimonials"
import HeroSlider from "../../components/heros/heroSlider"
import Cta3 from "../../components/cta/cta3"
import { Section, Container } from "../../components/layoutComponents"

export default function residentialServicesPage() {
  return (
    <Layout>
      <SEO title="Landscape Construction | Project Landscape" description="Project Landscape is not just landscaping; it is a long-lasting, trusted name. Putting your project at the forefront of our concern, our goal is to provide you with unique landscape construction services to meet your needs. Whether you are looking for our design team to create your perfect outdoor living space, or you want an outdoor fire pit, our approach to landscape construction combines both skill and passion to deliver you with results that far surpass anything you have ever seen before." />
      <HeroSlider />
      <MainServicesLinks title="landscape construction" description="Project Landscape is not your typical Calgary landscape company. We take great pride in our work, creating and implementing award–winning exterior design and construction services that outclass the competition every step of the way.

Providing superior service and landscaping construction to residents and business owners throughout Calgary with more than 20 years combined experience, we take pride in our expertise and level of quality and care.

Your home is one of your biggest investments, and your landscape is one of the first things people notice about it. Adding value and curb appeal, clients throughout Calgary have relied on our landscaping construction to enhance the image of their home for many years." />
      <Section>
        <Container>
            <h3 className="subheader">WE TAKE CARE OF YOUR LANDSCAPE THE RIGHT WAY
</h3>
<p>Project Landscape is not just landscaping; it is a long-lasting, trusted name. Putting your project at the forefront of our concern, our goal is to provide you with unique landscape construction services to meet your needs. Whether you are looking for our design team to create your perfect outdoor living space, or you want an outdoor fire pit, our approach to landscape construction combines both skill and passion to deliver you with results that far surpass anything you have ever seen before.

From your initial consultation until the final clean up, you are our main priority, and we are devoted to providing perfection in all we do. Communicating with you every step of the way, our goal is to accomplish your project on-time and within your budget, demonstrating our unparalleled customer service and quality execution with every project, every time.

Whether you already know what you are looking for, or you would like to work with one of our expert designers, we look forward to working with you. Get started today!</p>
<h3 className="subheader">HARDSCAPING</h3>
<p>Hardscaping is beginning to play a vital part in outdoor living spaces in the Calgary area. Whether you select a simple patio design or a full landscaped yard with optional features, you are creating an inviting outdoor living space that feels right for you and your family.

Project Landscape takes great pride in installation on all its landscape projects. We understand that hardscaping will be one of largest investments in your outdoor project, and we have the experience in order to out-perform our competitors.

Almost all hardscapes begin with a solid sub base. How your sub base is installed is critical to a lasting patio or retaining wall. This is why Project Landscape takes extra precaution. In doing so, we make sure that we compact all our footers to a 95% compaction rating to create the strongest support for your project.</p>
        <h3 className="subheader">SOFTSCAPING</h3>
        <p>When the hardscaping is complete, it’s time to add the living part of the landscape, which is the softscape. From planting trees and shrubs, installing mulch or decorative stone or simply installing sod to design a full season backyard, allow Calgary's premium landscape contracting company help you make your dreams a reality.  Softscaping can be both permanent such as trees and shrubs as well as temporary, such as seasonal plants which can be incorporated to lend their color to walkways and patios.

Project Landscape is a professional company that offers full landscape design, installation and maintenance solutions at extremely cost effective prices.</p>
<h3 className="subheader">GARDENS & PLANTER</h3>
<p>Gardens and planters are becoming more common throughout Calgary communities in the landscape industry. The staff at Project Landscape are experts at the installation process, installing everything from a cedar garden, raised brick garden to a full assortment garden.</p>
        <h3 className="subheader">unique landscaped</h3>
        <p>Welcome to a whole new approach in Calgary landscaping.  Project Landscape takes your indoor style out the back door and into your landscape, adding living and entertainment for Calgary homeowners. These house-matching outdoor services add a whole new variety and prospective of the outdoors to your lifestyle.</p>
        </Container>
      </Section>
      <Cta3 />
      <AllServicesBanner />
      <Cta3 />
      <MainTestimonials />
      <FaqFeatured />
    </Layout>
  )
}
