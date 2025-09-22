import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import QuoteForm from '../components/QuoteForm'

const TelecomsServices = () => (
  <>
    <Helmet>
      <title>Business Telecoms | Phone & Broadband Solutions</title>
      <meta name="description" content="Complete business telecoms solutions. Compare broadband, phone systems, and mobile packages from leading UK providers." />
    </Helmet>
    <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="section-padding">
        <h1 className="text-5xl font-display font-bold text-center mb-6">Business Telecoms Solutions</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8">
          Streamline your communications with integrated telecoms and connectivity packages.
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

export default TelecomsServices