import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Zap, Building2, Droplet, Phone, Leaf, Search } from 'lucide-react'

const ServicesPage = () => {
  const services = [
    { icon: Zap, title: 'Business Electricity', link: '/business-electricity', color: 'from-yellow-400 to-orange-500' },
    { icon: Building2, title: 'Business Gas', link: '/business-gas', color: 'from-blue-400 to-cyan-500' },
    { icon: Droplet, title: 'Water Services', link: '/water-services', color: 'from-cyan-400 to-blue-500' },
    { icon: Phone, title: 'Telecoms', link: '/telecoms-services', color: 'from-purple-400 to-pink-500' },
    { icon: Leaf, title: 'Renewable Energy', link: '/renewable-energy', color: 'from-green-400 to-emerald-500' },
    { icon: Search, title: 'Energy Auditing', link: '/energy-auditing', color: 'from-indigo-400 to-purple-500' }
  ]

  return (
    <>
      <Helmet>
        <title>Our Services | Business Energy & Utility Solutions</title>
        <meta name="description" content="Comprehensive business utility management services. Electricity, gas, water, telecoms, and renewable energy solutions." />
      </Helmet>
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="section-padding">
          <h1 className="text-5xl font-display font-bold text-center mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Complete utility management solutions designed to reduce costs and simplify operations
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Link key={i} to={service.link} className="glass-card rounded-xl p-8 hover:shadow-2xl transition-all group">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">Learn more about our {service.title.toLowerCase()} solutions</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesPage