import React, { useEffect, useRef } from 'react'

const TrustpilotWidget = ({ templateId = "5419b6a8b0d04a076446a9ad", businessUnitId = "66f24f946a13ba51fc1c1f2f" }) => {
  const ref = useRef(null)

  useEffect(() => {
    if (window.Trustpilot) {
      window.Trustpilot.loadFromElement(ref.current, true)
    }
  }, [])

  return (
    <div 
      ref={ref}
      className="trustpilot-widget" 
      data-locale="en-GB" 
      data-template-id={templateId}
      data-businessunit-id={businessUnitId}
      data-style-height="24px" 
      data-style-width="100%" 
      data-theme="light"
      data-min-review-count="10"
      data-style-alignment="center"
    >
      <a href="https://www.trustpilot.com/review/wattcompare.co.uk" target="_blank" rel="noopener">
        Trustpilot
      </a>
    </div>
  )
}

export default TrustpilotWidget