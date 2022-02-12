import React from "react"
import { Check, GoodHands } from "../../utils/imgImport"
import { assures } from "../../utils/staticData"

const AssureSection = () => {
  return (
    <section className="assure-section">
      <div className="left-part">
        <h3>Rest assured, you’re in good hands</h3>
        <ul>
          {assures.map((item, idx) => (
            <li key={idx}>
              <Check />
              <p className="body1">{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="right-part">
        <img src={GoodHands} alt="assure good hands" />
      </div>
    </section>
  )
}

export default AssureSection
