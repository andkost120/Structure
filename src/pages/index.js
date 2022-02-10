import * as React from "react"

import Seo from "../components/seo"
import Layout from "../components/layout"

import JoinSection from "../components/home/JoinSection"
import InteractSection from "../components/home/InteractSection"
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
      <InteractSection />
      <CTASection />
      <TradingSection />
      <GuideSection />
    </div>
    <ConnectSection />
    <div className="container">
      <JoinSection data={join_data} />
    </div>
  </Layout>
)

export default HomePage
