import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import QuoteForm from '../components/QuoteForm'

const WaterServices = () => (
  <>
    <Helmet>
      <title>Business Water Services | Water Supply Management</title>
      <meta name="description" content="Optimize your business water and wastewater costs. Compare water suppliers and reduce bills with expert management services." />
    </Helmet>
    <section className="pt-32 pb-20 bg-gradient-to-br from-cyan-50 to-white">
      <div className="section-padding">
        <h1 className="text-5xl font-display font-bold text-center mb-6">Water & Wastewater Services</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8">
          Comprehensive water supply management and cost optimization for UK businesses.
        </p>
        <div className="text-center">
          <a href="https://app.watt.co.uk/company" className="btn-primary">Get Quote</a>
        </div>
      </div>
    </section>
    <section id="quote-form" className="py-20">
      <div className="section-padding">
        <QuoteForm />
      </div>
    </section>
  </>
)

export default WaterServices
EOF < /dev/null