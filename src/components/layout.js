import React, { useState } from "react"
import { useStaticQuery, graphql } from 'gatsby';
import { SEOContext } from 'gatsby-plugin-wpgraphql-seo';
import SEO from "./seo"
import HeaderBasic from "./headers/headerBasic"
import Footer from "./footers/footer"

import FinanceBanner from "./financeBanner"
import ContactBanner from "./contactBanner"
import RecentPosts from "./recentPosts"
import GoogleBadge from "./googleBadge"
import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
`

export default function Layout({ children }) {
  return (
    <Wrapper>
      <HeaderBasic />
      <main>{children}</main>
      <RecentPosts />
      <FinanceBanner />
      <ContactBanner />
      <Footer />
      <GoogleBadge />
    </Wrapper>
  )
}
