import * as React from "react"

import Seo from "../components/seo"
import Layout from "../components/layout"
import ConnectSection from "../components/home/ConnectSection"
import CTASection from "../components/home/CTASection"
import GuideSection from "../components/home/GuideSection"
import InteractSection from "../components/home/InteractSection"
import JoinSection from "../components/home/JoinSection"
import TradingSection from "../components/home/TradingSection"

import { hero_data, join_data } from "../utils/staticData"
import AssureSection from "../components/home/AssureSection"

const HomePage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="container">
      <JoinSection data={hero_data} type="hero" />
      <InteractSection />
      <CTASection />
      <TradingSection />
      <AssureSection />
      <GuideSection />
    </div>
    <ConnectSection />
    <div className="container">
      <JoinSection data={join_data} />
    </div>
  </Layout>
)

export default HomePage
