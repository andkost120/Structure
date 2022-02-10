import React from "react"

import ContentBox from "../ContentBox"
import { world_asset } from "../../utils/staticData"

const ConnectSection = () => {
  return (
    <section className="connect-section">
      <img className="world-asset" src={world_asset.img} alt="phone" />
      <ContentBox data={world_asset} type="world-assets" />
    </section>
  )
}

export default ConnectSection
