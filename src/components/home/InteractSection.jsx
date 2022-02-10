import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import ContentBox from "../ContentBox"
import { cards, interact_data } from "../../utils/staticData"
import { Curvearrow } from "../../utils/imgImport"

const tabs = ["Leaders", "Stocks", "Crypto", "Options (coming soon)"]

const CardItem = ({ data }) => {
  return (
    <div className="card">
      <img className="card-icon" src={data.icon} alt="interaction" />
      <div className="card-info">
        <div>
          <p className="name">{data.name}</p>
          <p className="price">${data.price}</p>
        </div>

        <div className="percent">
          <Curvearrow />
          <p>{data.percent}%</p>
        </div>
      </div>
    </div>
  )
}

const InteractionSection = () => {
  return (
    <section className="interact-section">
      <Tabs>
        <TabList>
          {tabs.map((item, idx) => (
            <Tab key={idx}>{item}</Tab>
          ))}
        </TabList>

        <TabPanel className="card-items">
          {cards.map((item, idx) => (
            <CardItem data={item} key={idx} />
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
      </Tabs>
      <ContentBox type="interact" data={interact_data} />
    </section>
  )
}

export default InteractionSection
