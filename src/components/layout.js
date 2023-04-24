import React from "react"
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
  .badge {
    position: absolute;
    bottom: 20px;
    right: 20px;
    z-index: 1000000;
  }
`

export default function Layout({ children }) {
  return (
    <Wrapper>
      <SEO />
      <HeaderBasic />
      <main>{children}</main>
      <RecentPosts />
      <FinanceBanner />
      <ContactBanner />
      <Footer />
      <GoogleBadge className="badge" />
    </Wrapper>
  )
}
