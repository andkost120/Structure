import * as React from "react"

import Layout from "../components/layout"
import JoinSection from "../components/home/JoinSection"
import Seo from "../components/seo"
import { hero_data } from "../utils/staticData"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <JoinSection data={hero_data} type="hero" />
  </Layout>
)

export default IndexPage
