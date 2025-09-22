import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const SwitchingGuide = () => (
  <>
    <Helmet>
      <title>SwitchingGuide | Watt Energy Solutions</title>
      <meta name="description" content="SwitchingGuide - Watt Energy Solutions" />
    </Helmet>
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="section-padding">
        <h1 className="text-5xl font-display font-bold text-center mb-6">SwitchingGuide</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          This page is currently being developed. Please check back soon.
        </p>
        <div className="text-center mt-8">
          <Link to="/" className="btn-primary">Return Home</Link>
        </div>
      </div>
    </section>
  </>
)

export default SwitchingGuide
