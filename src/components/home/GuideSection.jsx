import React from "react"
import { guide } from "../../utils/staticData"

const GuideSection = () => {
  console.log(guide)
  return (
    <section className="guide-section">
      <h2 style={{ textAlign: "center" }}>Ready, set, trade</h2>
      <p className="body1" style={{ textAlign: "center", marginTop: "20px" }}>
        Setup an account and start trading in less than 5 minutes.
      </p>
      <div className="guide-items">
        {guide.map((item, idx) => (
          <div key={idx} className="guide-item">
            <img src={item.img} alt="guide" className="guide-item__img" />
            <div className="guide-item__content">
              <h6>{item.title}</h6>
              <p className="body2">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GuideSection
