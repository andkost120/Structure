import * as React from "react"

import Layout from "../components/layout"
import SendSection from "../components/home/SendSection"
import Seo from "../components/seo"
import { hero_data } from "../utils/staticData"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <SendSection data={hero_data} />
  </Layout>
)

export default IndexPage
