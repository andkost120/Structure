import * as React from "react"

import Layout from "../components/layout"
import JoinSection from "../components/home/JoinSection"
import InteractionSection from "../components/home/InteractionSection"
import Seo from "../components/seo"
import { hero_data, join_data } from "../utils/staticData"
import TradingSection from "../components/home/TradingSection"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <JoinSection data={hero_data} type="hero" />
    <InteractionSection />
    <TradingSection />
    <JoinSection data={join_data} />
  </Layout>
)

export default IndexPage
