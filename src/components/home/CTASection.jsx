import React from "react"

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="left-part">
        <h5>Sign up and get no-fee trading for life</h5>
        <p className="body1">
          We’re giving our first 5,000 users lifetime access to totally free
          trading.
        </p>
      </div>
      <div className="right-part">
        <p className="body1">Spots left</p>
        <p className="spots-left">2,631</p>
        <button className="btn-primary">Claim your spot</button>
      </div>
    </section>
  )
}

export default CTASection
