import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ChevronDown, Search, MessageCircle, Phone, Mail, 
  ArrowRight, HelpCircle, Zap, Shield, Clock,
  DollarSign, FileText, Users, TrendingUp
} from 'lucide-react'

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [openItems, setOpenItems] = useState({})

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle },
    { id: 'pricing', name: 'Pricing & Savings', icon: DollarSign },
    { id: 'switching', name: 'Switching Process', icon: TrendingUp },
    { id: 'contracts', name: 'Contracts', icon: FileText },
    { id: 'green', name: 'Green Energy', icon: Zap },
    { id: 'support', name: 'Support', icon: Users }
  ]

  const faqs = [
    {
      category: 'pricing',
      question: 'How much can I save on my business energy bills?',
      answer: 'Most businesses save between 20-45% on their energy costs when switching through Watt Compare. The exact savings depend on your current rates, usage patterns, and contract terms. Our average customer saves £3,200 annually. Large businesses with multiple sites often save £10,000+ per year. We provide a detailed savings projection before you commit to any switch.'
    },
    {
      category: 'pricing',
      question: 'Is the comparison service really free?',
      answer: 'Yes, our comparison service is 100% free for businesses. We receive a commission from energy suppliers when you switch, but this doesn\'t affect your rates - in fact, we often negotiate better prices than going direct. There are no hidden fees, no upfront costs, and no obligations. You only proceed if you\'re happy with the savings we find.'
    },
    {
      category: 'switching',
      question: 'How long does it take to switch energy suppliers?',
      answer: 'The entire switching process typically takes 17-21 days for electricity and gas. Here\'s the timeline: Day 1-2: You accept our quote and we notify your new supplier. Day 3-14: Cooling-off period (you can cancel without penalty). Day 15-21: Final meter readings and switch completion. Your supply continues uninterrupted throughout - there\'s zero downtime.'
    },
    {
      category: 'switching',
      question: 'Will my power be interrupted when switching?',
      answer: 'No, absolutely not. Your electricity and gas supply continues without any interruption during the switch. The physical supply remains the same - only your billing and customer service provider changes. It\'s a seamless administrative process that happens behind the scenes. You won\'t even notice the switch happening.'
    },
    {
      category: 'contracts',
      question: 'What contract lengths are available?',
      answer: 'We offer flexible contract terms from 1 to 5 years. Most businesses opt for 2-3 year fixed contracts to lock in savings and protect against price rises. Shorter 1-year contracts offer flexibility but may have higher rates. Longer 4-5 year contracts provide maximum price security. We\'ll advise on the best option based on market conditions and your needs.'
    },
    {
      category: 'contracts',
      question: 'Can I switch if I\'m still in contract?',
      answer: 'Yes, but timing is important. We can secure future contracts up to 12 months before your current one ends. This \'forward contracting\' lets you lock in good rates early. If you switch before your contract ends, early termination fees may apply. We\'ll calculate if the savings outweigh any fees - sometimes it\'s worth switching early if rates have dropped significantly.'
    },
    {
      category: 'green',
      question: 'Can I switch to 100% renewable energy?',
      answer: 'Yes! We partner with multiple green energy suppliers offering 100% renewable electricity from wind, solar, and hydro sources. Surprisingly, green energy is often competitively priced or even cheaper than standard tariffs. We can also arrange green gas (biomethane) and carbon offset schemes. Over 40% of our customers now choose green energy options.'
    },
    {
      category: 'green',
      question: 'What green energy certifications are available?',
      answer: 'We offer REGO-backed (Renewable Energy Guarantees of Origin) green electricity and RGGO-certified green gas. These are Ofgem-approved certifications proving your energy comes from renewable sources. We can also arrange additional certifications like Carbon Trust Standard or Science Based Targets for businesses with specific sustainability requirements.'
    },
    {
      category: 'support',
      question: 'What information do I need to get a quote?',
      answer: 'For an instant quote, we need: 1) Your business postcode, 2) Current energy spend or usage (from a recent bill), 3) Contract end date (if known). For the most accurate quote, having a recent bill helps as it shows your exact usage patterns, meter details, and current rates. We can work with whatever information you have available.'
    },
    {
      category: 'support',
      question: 'How do you compare energy prices?',
      answer: 'We use real-time data feeds from 35+ UK energy suppliers, updated every 60 seconds. Our AI-powered system analyzes thousands of tariff combinations considering your usage patterns, payment preferences, and contract requirements. We factor in all costs including standing charges, unit rates, and additional fees to show true comparisons. The entire process takes under 60 seconds.'
    },
    {
      category: 'pricing',
      question: 'Are there any hidden costs or fees?',
      answer: 'No hidden costs whatsoever. Our quotes include all charges: unit rates, standing charges, CCL (Climate Change Levy), and VAT. We clearly highlight any one-off connection fees or security deposits if required. Our service is free, and we\'ll explicitly show your total annual cost and monthly payments upfront. Full transparency is guaranteed.'
    },
    {
      category: 'switching',
      question: 'Do I need to contact my current supplier?',
      answer: 'No, we handle everything for you. Once you accept a new contract, we manage the entire switch including notifying your current supplier, arranging final readings, and ensuring a smooth handover. You don\'t need to call anyone or fill in complex forms. We even handle objections if your current supplier tries to retain you.'
    },
    {
      category: 'contracts',
      question: 'What happens when my new contract ends?',
      answer: 'We monitor all our customers\' contracts and contact you 6 months before expiry to review options. This prevents you rolling onto expensive out-of-contract rates. We\'ll compare the market again and negotiate renewal terms or switch you to a better deal. Our free contract management service ensures you\'re always on competitive rates.'
    },
    {
      category: 'support',
      question: 'What if I have multiple business sites?',
      answer: 'We specialize in multi-site energy management. Whether you have 2 or 200 locations, we can consolidate your energy procurement for better rates. Options include: single supplier strategies for simplicity, multi-supplier for best prices per site, or portfolio management for large estates. We provide centralized billing and dedicated account management.'
    },
    {
      category: 'support',
      question: 'What ongoing support do you provide?',
      answer: 'Our support doesn\'t end at switching. You get: dedicated account management, annual contract reviews, bill validation services, usage monitoring and alerts, market updates and opportunities, dispute resolution support, and 24/7 emergency helpline. We\'re your long-term energy partner, not just a one-time switching service.'
    }
  ]

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    return matchesSearch && matchesCategory
  })

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  // Schema.org structured data for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      <Helmet>
        <title>FAQs | Business Energy Switching Questions Answered | Watt Compare</title>
        <meta name="description" content="Get answers to common business energy questions. Learn about switching process, savings, contracts, green energy options, and our free comparison service." />
        <meta name="keywords" content="business energy FAQs, energy switching questions, commercial electricity help, business gas queries, energy comparison guide" />
        <link rel="canonical" href="https://wattcompare.co.uk/faq" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Business Energy FAQs | Your Questions Answered" />
        <meta property="og:description" content="Everything you need to know about switching business energy suppliers and saving money." />
        <meta property="og:type" content="website" />
        
        {/* Schema.org structured data for FAQ */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Everything you need to know about switching business energy suppliers
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-lg"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-16">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No results found</h3>
                <p className="text-gray-500">Try adjusting your search or browse all categories</p>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset rounded-xl"
                    >
                      <div className="flex-1">
                        <h2 className="text-lg font-semibold text-gray-900 flex items-start gap-3">
                          <Zap className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          {faq.question}
                        </h2>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-400 flex-shrink-0 transform transition-transform ${
                          openItems[index] ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    <AnimatePresence>
                      {openItems[index] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <div className="border-t border-gray-100 pt-4">
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <MessageCircle className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Our energy experts are here to help with personalized advice
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:01618338661">
                <button className="px-8 py-4 bg-white text-green-600 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call 0161 833 8661
                </button>
              </a>
              <Link to="/contact">
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Us
                </button>
              </a>
            </div>

            <div className="mt-12 pt-12 border-t border-white/20">
              <p className="text-white/80 mb-4">Or start comparing right away</p>
              <a href="https://app.watt.co.uk/company">
                <button className="px-6 py-3 bg-white/20 backdrop-blur border border-white/30 text-white rounded-lg font-semibold hover:bg-white/30 transition-all">
                  Get Instant Quote
                  <ArrowRight className="inline-block ml-2 h-4 w-4" />
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default FAQ