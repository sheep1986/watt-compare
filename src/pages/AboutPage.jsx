import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Users, Target, Award, Globe, Shield, TrendingUp, 
  CheckCircle, ArrowRight, Calendar, Building2, 
  Zap, PiggyBank, BarChart3, Star, Clock, Phone,
  Heart, Lightbulb, HandshakeIcon
} from 'lucide-react'

const AboutPage = () => {
  const stats = [
    { number: '15,000+', label: 'Businesses Served', icon: Building2 },
    { number: '£12.5M', label: 'Total Savings', icon: PiggyBank },
    { number: '35+', label: 'Energy Suppliers', icon: Zap },
    { number: '4.9/5', label: 'Customer Rating', icon: Star }
  ]

  const values = [
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'Complete transparency in all our dealings. No hidden fees, no surprise charges, just honest energy comparison.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your success is our priority. We work tirelessly to find the perfect energy solution for your business needs.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'We measure success by the savings we deliver. Average customer saves £3,200 annually on energy costs.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Using AI and smart technology to revolutionize how businesses compare and switch energy suppliers.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Helping businesses transition to green energy without compromising on cost or service quality.',
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: HandshakeIcon,
      title: 'Partnership',
      description: 'Building long-term relationships, not just one-time transactions. Your energy partner for growth.',
      color: 'from-indigo-500 to-purple-500'
    }
  ]


  const milestones = [
    { year: '2018', event: 'Founded with a mission to democratize energy comparison', icon: Zap },
    { year: '2019', event: 'Launched AI-powered comparison engine', icon: BarChart3 },
    { year: '2020', event: 'Expanded to serve 5,000+ businesses', icon: TrendingUp },
    { year: '2021', event: 'Added renewable energy specialization', icon: Globe },
    { year: '2022', event: 'Reached £5M in customer savings', icon: PiggyBank },
    { year: '2023', event: 'Launched multi-site energy management', icon: Building2 },
    { year: '2024', event: 'Serving 15,000+ businesses nationwide', icon: Award }
  ]

  const certifications = [
    { name: 'ISO 27001', desc: 'Information Security' },
    { name: 'FCA Regulated', desc: 'Financial Conduct Authority' },
    { name: 'Carbon Neutral', desc: 'Certified Since 2022' },
    { name: 'Trustpilot', desc: '4.9★ Excellent Rating' }
  ]

  // Schema.org structured data for About page
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Watt Compare",
      "description": "UK's leading business energy comparison service helping companies save up to 45% on energy bills",
      "url": "https://wattcompare.co.uk",
      "logo": "https://wattcompare.co.uk/logo.png",
      "foundingDate": "2018",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "St Ann's House, 3rd Floor, St Ann's Square",
        "addressLocality": "Manchester",
        "postalCode": "M2 7LP",
        "addressCountry": "GB"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+44-161-833-8661",
        "contactType": "customer service",
        "availableLanguage": "English"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "2847"
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>About Watt Compare | UK's Leading Business Energy Comparison Service</title>
        <meta name="description" content="Learn about Watt Compare - helping 15,000+ UK businesses save millions on energy bills. Our mission, values, team, and commitment to sustainable energy solutions." />
        <meta name="keywords" content="about watt compare, business energy comparison company, UK energy brokers, commercial energy consultants, energy switching service" />
        <link rel="canonical" href="https://wattcompare.co.uk/about" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="About Watt Compare | Trusted by 15,000+ UK Businesses" />
        <meta property="og:description" content="Discover how we're revolutionizing business energy comparison with AI technology and expert service." />
        <meta property="og:image" content="https://wattcompare.co.uk/about-og-image.jpg" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Watt Compare | Business Energy Experts" />
        <meta name="twitter:description" content="Helping UK businesses save millions on energy costs since 2018" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image - similar to website 3 style */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50" />
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          />
          <motion.div
            animate={{ 
              scale: [1.1, 1, 1.1],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          />
        </div>

        <div className="section-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Powering Business Success Through{' '}
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                Smart Energy Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Since 2018, we've been on a mission to make business energy comparison simple, transparent, and profitable. 
              Join 15,000+ UK businesses already saving with Watt Compare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.watt.co.uk/company">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold text-lg shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300">
                  Start Comparing Now
                  <ArrowRight className="inline-block ml-2 h-5 w-5" />
                </button>
              </a>
              <Link to="/case-studies">
                <button className="px-8 py-4 bg-white border-2 border-green-500 text-green-600 rounded-xl font-semibold text-lg hover:bg-green-50 transform hover:scale-105 transition-all duration-300">
                  View Success Stories
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Image Background */}
      <section className="py-20 relative">
        <div className="section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-green-500" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section with Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Journey to{' '}
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                Energy Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to the UK's most trusted business energy comparison platform
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 to-emerald-600 hidden lg:block" />
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center mb-12 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1">
                    <div className={`lg:px-8 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-4 mb-3">
                          {index % 2 !== 0 && <milestone.icon className="h-8 w-8 text-green-500" />}
                          <span className="text-2xl font-bold text-green-600">{milestone.year}</span>
                          {index % 2 === 0 && <milestone.icon className="h-8 w-8 text-green-500 ml-auto" />}
                        </div>
                        <p className="text-gray-700">{milestone.event}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="hidden lg:block">
                    <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg" />
                  </div>
                  
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Cards */}
      <section className="py-20">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every interaction and decision at Watt Compare
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Certifications Section */}
      <section className="py-20">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Certified Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry certifications and accreditations that demonstrate our commitment to quality and security
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Award className="h-12 w-12 mx-auto mb-4 text-green-500" />
                  <h3 className="font-bold text-lg mb-1">{cert.name}</h3>
                  <p className="text-sm text-gray-600">{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-600 relative overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl"
        />
        
        <div className="section-padding relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Ready to Join 15,000+ Businesses Saving with Watt Compare?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Start your journey to lower energy costs today. It takes less than 60 seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.watt.co.uk/company">
                <button className="px-8 py-4 bg-white text-green-600 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300">
                  Get Started Now
                  <ArrowRight className="inline-block ml-2 h-5 w-5" />
                </button>
              </a>
              <a href="tel:01618338661">
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                  <Phone className="inline-block mr-2 h-5 w-5" />
                  Call 0161 833 8661
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default AboutPage