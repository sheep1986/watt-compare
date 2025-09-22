import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, 
  ArrowRight, Send, CheckCircle, Building2,
  Globe, Linkedin, Twitter, Facebook, Instagram,
  Headphones, Calendar, Users, Zap
} from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [submitStatus, setSubmitStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 2000)
  }

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      primary: '0161 833 8661',
      secondary: 'Mon-Fri: 9:00 AM - 6:00 PM',
      action: 'tel:01618338661',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'compare@wattcompare.co.uk',
      secondary: 'Response within 24 hours',
      action: 'mailto:compare@wattcompare.co.uk',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      primary: 'Chat with an Expert',
      secondary: 'Available 9 AM - 6 PM',
      action: '#chat',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Calendar,
      title: 'Book Meeting',
      primary: 'Schedule Consultation',
      secondary: 'Free 30-min session',
      action: '/book-meeting',
      color: 'from-orange-500 to-red-600'
    }
  ]

  const offices = [
    {
      city: 'Manchester (HQ)',
      address: 'St Ann\'s House, 3rd Floor',
      address2: 'St Ann\'s Square, Manchester, M2 7LP',
      phone: '0161 833 8661',
      email: 'manchester@wattcompare.co.uk'
    },
    {
      city: 'Manchester South',
      address: '45 Business Park',
      address2: 'Manchester, M15 6AY',
      phone: '0161 123 4567',
      email: 'manchester-south@wattcompare.co.uk'
    },
    {
      city: 'Birmingham',
      address: '78 Commerce House',
      address2: 'Birmingham, B2 5AL',
      phone: '0121 234 5678',
      email: 'birmingham@wattcompare.co.uk'
    }
  ]

  const departments = [
    { name: 'New Business', email: 'sales@wattcompare.co.uk', phone: 'Ext. 101' },
    { name: 'Customer Support', email: 'support@wattcompare.co.uk', phone: 'Ext. 102' },
    { name: 'Billing Queries', email: 'billing@wattcompare.co.uk', phone: 'Ext. 103' },
    { name: 'Partnerships', email: 'partners@wattcompare.co.uk', phone: 'Ext. 104' }
  ]

  // Schema.org structured data for LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://wattcompare.co.uk",
    "name": "Watt Compare",
    "description": "UK's leading business energy comparison service",
    "url": "https://wattcompare.co.uk",
    "telephone": "+44-161-833-8661",
    "email": "compare@wattcompare.co.uk",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "St Ann's House, 3rd Floor, St Ann's Square",
      "addressLocality": "Manchester",
      "postalCode": "M2 7LP",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "53.4808",
      "longitude": "-2.2426"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "Free Service",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2847"
    },
    "areaServed": "GB",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Business Energy Comparison Services",
      "itemListElement": [
        { "@type": "Offer", "name": "Business Electricity Comparison" },
        { "@type": "Offer", "name": "Business Gas Comparison" },
        { "@type": "Offer", "name": "Renewable Energy Solutions" }
      ]
    },
    "sameAs": [
      "https://facebook.com/wattcompare",
      "https://twitter.com/wattcompare",
      "https://linkedin.com/company/wattcompare"
    ]
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | Get Expert Energy Advice | Watt Compare</title>
        <meta name="description" content="Contact Watt Compare for business energy comparison help. Call 0161 833 8661, email or live chat. Free consultation with energy experts. UK offices in Manchester, Birmingham & regional locations." />
        <meta name="keywords" content="contact watt compare, business energy help, energy comparison support, UK energy brokers contact, commercial electricity help" />
        <link rel="canonical" href="https://wattcompare.co.uk/contact" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Contact Watt Compare | Business Energy Experts" />
        <meta property="og:description" content="Get in touch for free business energy comparison and expert advice. Multiple contact options available." />
        <meta property="og:type" content="website" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
        {/* Animated Background */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        
        <div className="section-padding relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Let's Start{' '}
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                Saving Together
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get expert advice on business energy comparison. Our team is ready to help you 
              save up to 45% on your energy bills. Free consultation, no obligations.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">< 2h</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">15,000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">4.9/5</div>
                <div className="text-sm text-gray-600">Trust Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-16">
        <div className="section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.action}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="block"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                  <div className={`w-14 h-14 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mb-4`}>
                    <method.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                  <p className="text-green-600 font-medium">{method.primary}</p>
                  <p className="text-sm text-gray-500">{method.secondary}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form - 2 columns */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-2"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
                  <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                          placeholder="John Smith"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                          placeholder="Your Company Ltd"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                          placeholder="07123 456789"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                      >
                        <option value="">Select a topic</option>
                        <option value="quote">Request a Quote</option>
                        <option value="switching">Help with Switching</option>
                        <option value="billing">Billing Query</option>
                        <option value="complaint">Make a Complaint</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </button>

                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-700"
                      >
                        <CheckCircle className="h-5 w-5" />
                        Thank you! We'll be in touch within 24 hours.
                      </motion.div>
                    )}
                  </form>
                </div>
              </motion.div>

              {/* Contact Information - 1 column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                {/* Main Office */}
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-green-600" />
                    Head Office
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-gray-700">St Ann's House, 3rd Floor</p>
                        <p className="text-gray-700">St Ann's Square, Manchester, M2 7LP</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-gray-400" />
                      <a href="tel:01618338661" className="text-green-600 hover:text-green-700">
                        0161 833 8661
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-gray-400" />
                      <p className="text-gray-700">Mon-Fri: 9AM-6PM</p>
                    </div>
                  </div>
                </div>

                {/* Departments */}
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Headphones className="h-5 w-5 text-green-600" />
                    Department Contacts
                  </h3>
                  <div className="space-y-3">
                    {departments.map((dept, index) => (
                      <div key={index} className="pb-3 border-b border-gray-100 last:border-0">
                        <p className="font-medium text-gray-900">{dept.name}</p>
                        <p className="text-sm text-gray-600">{dept.email}</p>
                        <p className="text-sm text-gray-500">{dept.phone}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-green-600" />
                    Connect With Us
                  </h3>
                  <div className="flex gap-3">
                    <a href="https://linkedin.com/company/wattcompare" className="p-3 bg-gray-100 rounded-lg hover:bg-green-100 transition-colors">
                      <Linkedin className="h-5 w-5 text-gray-700" />
                    </a>
                    <a href="https://twitter.com/wattcompare" className="p-3 bg-gray-100 rounded-lg hover:bg-green-100 transition-colors">
                      <Twitter className="h-5 w-5 text-gray-700" />
                    </a>
                    <a href="https://facebook.com/wattcompare" className="p-3 bg-gray-100 rounded-lg hover:bg-green-100 transition-colors">
                      <Facebook className="h-5 w-5 text-gray-700" />
                    </a>
                    <a href="https://instagram.com/wattcompare" className="p-3 bg-gray-100 rounded-lg hover:bg-green-100 transition-colors">
                      <Instagram className="h-5 w-5 text-gray-700" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Our UK{' '}
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                Office Locations
              </span>
            </h2>
            <p className="text-xl text-gray-600">Visit us at any of our offices across the UK</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold mb-4 text-green-600">{office.city}</h3>
                <div className="space-y-2 text-gray-600">
                  <p>{office.address}</p>
                  <p>{office.address2}</p>
                  <p className="pt-2 font-medium">{office.phone}</p>
                  <p className="text-sm">{office.email}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <Zap className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              Ready to Start Saving?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get your free comparison in under 60 seconds
            </p>
            <a href="https://app.watt.co.uk/company">
              <button className="px-8 py-4 bg-white text-green-600 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300">
                Get Instant Quote
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default ContactPage