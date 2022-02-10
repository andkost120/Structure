import React from "react"

import ContentBox from "../ContentBox"
import { world_asset } from "../../utils/staticData"

const ConnectSection = () => {
  return (
    <section className="connect-section">
      <img className="world-asset" src={world_asset.img} alt="phone" />
      <div className="container">
        <ContentBox data={world_asset} type="world-assets" />
      </div>
    </section>
  )
}

export default ConnectSection
