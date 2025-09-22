import React from 'react'
import { Helmet } from 'react-helmet-async'
import QuoteForm from '../components/QuoteForm'
import { motion } from 'framer-motion'
import { Clock, Shield, TrendingDown, Users } from 'lucide-react'

const GetQuote = () => {
  const benefits = [
    { icon: Clock, title: '24 Hour Response', description: 'Get your personalized quote within one business day' },
    { icon: Shield, title: 'No Obligation', description: 'Free consultation with no commitment required' },
    { icon: TrendingDown, title: 'Guaranteed Savings', description: 'We only recommend switches that save you money' },
    { icon: Users, title: 'Expert Support', description: 'Dedicated account manager throughout the process' }
  ]

  return (
    <>
      <Helmet>
        <title>Get Quote | Free Business Energy Comparison</title>
        <meta name="description" content="Get your free business energy quote in 60 seconds. Compare prices from 30+ suppliers. No obligation, guaranteed savings." />
        <link rel="canonical" href="https://watt-energy-solutions.co.uk/get-quote" />
      </Helmet>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-display font-bold mb-6">
              Get Your <span className="gradient-text">Free Energy Quote</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Takes just 60 seconds. No obligation. Guaranteed savings or we won't recommend a switch.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg p-3 mx-auto mb-3">
                  <benefit.icon className="w-full h-full text-white" />
                </div>
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <QuoteForm />
        </div>
      </section>
    </>
  )
}

export default GetQuote
