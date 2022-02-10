import * as React from "react"

import Seo from "../components/seo"
import Layout from "../components/layout"

import JoinSection from "../components/home/JoinSection"
import InteractionSection from "../components/home/InteractionSection"
import TradingSection from "../components/home/TradingSection"
import CTASection from "../components/home/CTASection"
import GuideSection from "../components/home/GuideSection"
import ConnectSection from "../components/home/ConnectSection"

import { hero_data, join_data } from "../utils/staticData"

const HomePage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="container">
      <JoinSection data={hero_data} type="hero" />
      <InteractionSection />
      <CTASection />
      <TradingSection />
      <GuideSection />
    </div>
    <ConnectSection />
    <JoinSection data={join_data} />
  </Layout>
)

export default HomePage
