import React from "react"

import ContentBox from "../ContentBox"
import { trading_data } from "../../utils/staticData"

const TradingSection = () => {
  return (
    <section className="trading-section">
      {trading_data.map((item, idx) => (
        <div
          className="trading-item"
          key={idx}
          style={{ flexDirection: idx % 2 === 0 ? "row" : "row-reverse" }}
        >
          <img
            className="phone-img"
            src={item.img}
            alt="phone"
            style={{
              marginLeft: idx % 2 === 0 ? "0" : "40px",
              marginRight: idx % 2 === 0 ? "40px" : "0",
            }}
          />
          <ContentBox data={item} />
        </div>
      ))}
    </section>
  )
}

export default TradingSection
