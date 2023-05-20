import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { HeroBannerPadding } from "../components/layoutComponents"

const NotFoundPage = () => (
  <Layout>
    <HeroBannerPadding />
    <HeroBannerPadding />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness...</p>
  </Layout>
)

export const Head = () => (
  <Seo title="404: Not Found | Project Landscape Ltd." />
)

export default NotFoundPage
