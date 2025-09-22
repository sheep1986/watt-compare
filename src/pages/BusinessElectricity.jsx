import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Zap, 
  TrendingDown, 
  Shield, 
  Clock, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Building2,
  Lightbulb,
  Calculator,
  Award,
  Users,
  FileText,
  Star,
  Target,
  PoundSterling,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'
import QuoteForm from '../components/QuoteForm'

const BusinessElectricity = () => {
  // Schema.org structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Business Electricity Comparison Service",
    "description": "Compare commercial electricity rates from 30+ UK suppliers. Save up to 45% on business electricity costs with expert negotiation and competitive rates.",
    "provider": {
      "@type": "Organization",
      "name": "Watt Energy Solutions",
      "url": "https://watt-energy-solutions.co.uk",
      "telephone": "+44-800-123-4567",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "UK"
      }
    },
    "areaServed": "United Kingdom",
    "serviceType": "Business Energy Brokerage",
    "offers": {
      "@type": "Offer",
      "description": "Business electricity comparison and switching service",
      "price": "0",
      "priceCurrency": "GBP"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1247"
    }
  }

  const benefits = [
    {
      icon: <PoundSterling className="h-8 w-8" />,
      title: "Save Up to 45% on Bills",
      description: "Our expert negotiators secure exclusive rates that can reduce your electricity costs by 20-45% compared to standard business tariffs."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Price Protection",
      description: "Fixed-rate contracts protect your business from volatile energy market fluctuations and unexpected price increases."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Quick & Easy Process",
      description: "Switch suppliers in under 21 days with no interruption to your electricity supply. We handle all the paperwork."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Dedicated Account Manager",
      description: "Access to a personal energy consultant who understands your business needs and monitors your contract performance."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Green Energy Options",
      description: "Choose from 100% renewable electricity tariffs to reduce your carbon footprint and meet sustainability goals."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Transparent Reporting",
      description: "Detailed usage analytics and billing transparency help you understand and optimize your energy consumption."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "No Hidden Fees",
      description: "Our service is completely free with no hidden charges. We're paid directly by energy suppliers when you switch."
    }
  ]

  const contractTypes = [
    {
      type: "Fixed Rate Contracts",
      duration: "12-60 months",
      ideal: "Budget certainty",
      description: "Lock in competitive electricity rates for 1-5 years, providing complete price protection and budget predictability for your business operations.",
      pros: ["Predictable monthly costs", "Protection from price volatility", "Easy budgeting and forecasting", "No surprise bills"],
      color: "primary"
    },
    {
      type: "Variable Rate Contracts",
      duration: "Flexible terms",
      ideal: "Market followers",
      description: "Flexible pricing that moves with wholesale energy markets, ideal for businesses that want to benefit from falling energy prices.",
      pros: ["Benefit from falling prices", "No exit fees", "Flexible terms", "Market rate tracking"],
      color: "accent"
    },
    {
      type: "Hybrid Contracts",
      duration: "12-36 months",
      ideal: "Risk management",
      description: "Combine fixed and variable elements to balance price protection with market opportunity, perfect for sophisticated energy buyers.",
      pros: ["Balanced risk profile", "Partial price protection", "Market upside potential", "Customizable terms"],
      color: "green"
    }
  ]

  const howItWorks = [
    {
      step: 1,
      title: "Share Your Details",
      description: "Provide your current electricity bill and business information. This takes just 2 minutes and helps us understand your energy needs.",
      icon: <FileText className="h-12 w-12" />
    },
    {
      step: 2,
      title: "Market Analysis",
      description: "Our experts analyze rates from 30+ suppliers, comparing unit rates, standing charges, and contract terms to find the best deals.",
      icon: <BarChart3 className="h-12 w-12" />
    },
    {
      step: 3,
      title: "Tailored Proposals",
      description: "Receive personalized quotes with detailed comparisons, showing potential savings and contract benefits for your specific business.",
      icon: <Calculator className="h-12 w-12" />
    },
    {
      step: 4,
      title: "Expert Negotiation",
      description: "We negotiate directly with suppliers to secure even better rates and terms, often achieving additional discounts not publicly available.",
      icon: <Target className="h-12 w-12" />
    },
    {
      step: 5,
      title: "Seamless Switch",
      description: "Once you approve a deal, we handle all paperwork and coordination. Your new contract begins automatically with no supply interruption.",
      icon: <CheckCircle className="h-12 w-12" />
    }
  ]

  const faqs = [
    {
      question: "How much can I save on my business electricity bills?",
      answer: "Savings typically range from 20-45% depending on your current contract, usage patterns, and business type. Small businesses often see the highest percentage savings, while larger enterprises benefit from volume discounts. Our average client saves £2,400 annually on electricity costs."
    },
    {
      question: "Will my electricity supply be interrupted during the switch?",
      answer: "No, your electricity supply will never be interrupted. The switching process is entirely administrative - your local distribution network operator continues to deliver electricity while only the billing supplier changes. This is regulated by Ofgem to ensure continuity of supply."
    },
    {
      question: "How long does it take to switch business electricity suppliers?",
      answer: "The standard switching process takes 17-21 working days from contract signature. However, if you're currently in a contract, we can arrange the switch to coincide with your contract end date to avoid any termination fees."
    },
    {
      question: "What information do I need to provide for a quote?",
      answer: "You'll need a recent electricity bill showing your MPAN (Meter Point Administration Number), annual consumption (kWh), current unit rates, and standing charges. We also need basic business information like company size and industry type to ensure accurate quotes."
    },
    {
      question: "Are there any fees for using your comparison service?",
      answer: "Our service is completely free for businesses. We receive commission payments directly from energy suppliers when you switch, but this doesn't affect the rates you pay. There are no hidden fees, setup costs, or ongoing charges for our service."
    },
    {
      question: "Can I switch if I'm already in a fixed-term contract?",
      answer: "If you're in a fixed-term contract, you'll typically need to wait until it expires to avoid termination fees. However, we can review your current contract terms and in some cases, the savings from switching early may outweigh the exit fees. We'll calculate this for you."
    },
    {
      question: "What happens if my chosen supplier goes out of business?",
      answer: "If your supplier fails, Ofgem automatically transfers you to a 'Supplier of Last Resort' to ensure continuous supply. Your credit balance is protected, and you can then choose a new supplier. This process is regulated and your electricity supply will never be cut off."
    },
    {
      question: "Do you offer green electricity options for businesses?",
      answer: "Yes, we offer various renewable electricity options including REGO-backed green tariffs, renewable energy certificates, and Power Purchase Agreements (PPAs). These options help businesses meet sustainability goals while often providing competitive pricing."
    }
  ]

  const suppliers = [
    "British Gas Business", "E.ON Business", "EDF Energy", "Scottish Power Business",
    "Opus Energy", "Total Energies", "Corona Energy", "Yu Energy", "Gazprom Energy",
    "Shell Energy", "Drax Energy", "Haven Power", "Squeaky Clean Energy", "Good Energy",
    "Ecotricity", "Green Supplier Limited", "Pure Planet Business", "Octopus Energy Business",
    "Bulb Business", "People's Energy Business", "Avro Energy", "Together Energy",
    "First Utility Business", "Spark Energy", "Axis Telecom", "Extra Energy Business"
  ]

  const trustSignals = [
    { metric: "30+", label: "Energy Suppliers" },
    { metric: "£2.4M", label: "Savings Last Year" },
    { metric: "5,000+", label: "Businesses Helped" },
    { metric: "4.8/5", label: "Customer Rating" }
  ]

  return (
    <>
      <Helmet>
        <title>Business Electricity Comparison UK | Compare Commercial Rates | Save up to 45%</title>
        <meta 
          name="description" 
          content="Compare business electricity prices from 30+ UK suppliers. Save up to 45% on commercial electricity costs. Fixed & flexible contracts. Free expert service. Get quote today." 
        />
        <meta name="keywords" content="business electricity comparison, commercial electricity rates, compare business electricity prices UK, business energy suppliers, commercial electricity quotes, business electricity switching" />
        <link rel="canonical" href="https://watt-energy-solutions.co.uk/business-electricity" />
        <meta property="og:title" content="Business Electricity Comparison UK | Compare Commercial Rates" />
        <meta property="og:description" content="Save up to 45% on business electricity. Compare rates from 30+ suppliers. Expert negotiation. Free service." />
        <meta property="og:url" content="https://watt-energy-solutions.co.uk/business-electricity" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business Electricity Comparison UK | Save up to 45%" />
        <meta name="twitter:description" content="Compare commercial electricity rates from 30+ UK suppliers. Expert negotiation. Free service." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Breadcrumbs */}
      <nav className="pt-24 pb-4 bg-gray-50">
        <div className="section-padding">
          <div className="flex text-sm text-gray-600">
            <Link to="/" className="hover:text-primary-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-primary-600">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Business Electricity</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="section-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6">
              Business <span className="gradient-text">Electricity Comparison</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Compare commercial electricity rates from 30+ UK suppliers and save up to 45% on your business energy costs. 
              Expert negotiation, transparent pricing, and dedicated account management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="https://app.watt.co.uk/company" className="btn-primary inline-flex items-center text-lg px-8 py-4">
                Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link to="/switching-guide" className="btn-secondary inline-flex items-center text-lg px-8 py-4">
                <Lightbulb className="mr-2 h-5 w-5" />
                How It Works
              </Link>
            </div>
            
            {/* Trust Signals */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {trustSignals.map((signal, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold gradient-text">{signal.metric}</div>
                  <div className="text-sm text-gray-600 mt-1">{signal.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Business Electricity Section */}
      <section className="py-20">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-8 text-center">
              What is Business Electricity Comparison?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Business electricity comparison is the process of evaluating commercial electricity tariffs from multiple suppliers 
                to find the most competitive rates and contract terms for your business. Unlike domestic energy switching, 
                commercial electricity procurement involves complex negotiations, bespoke contract terms, and sophisticated pricing structures.
              </p>
              
              <p className="mb-6">
                In the UK's deregulated energy market, businesses have been free to choose their electricity supplier since 1999. 
                This competition has created opportunities for significant savings, but also complexity in choosing the right supplier and contract. 
                With over 70 licensed electricity suppliers operating in the UK market, the choice can be overwhelming.
              </p>
              
              <p className="mb-6">
                Commercial electricity rates are determined by several factors including wholesale energy costs, network charges, 
                government levies, and supplier margins. Unlike domestic tariffs, business electricity contracts can be heavily negotiated, 
                with rates varying significantly based on consumption levels, contract duration, credit rating, and timing of procurement.
              </p>
              
              <p>
                Professional energy brokers like Watt Energy Solutions leverage market knowledge, supplier relationships, and negotiation 
                expertise to secure rates that businesses typically cannot access directly. We analyze your specific energy profile, 
                market conditions, and business requirements to recommend the optimal electricity contract for your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Why Switch Your Business Electricity Supplier?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlock significant cost savings and better service with expert electricity procurement. 
              Our clients typically save 20-45% on their electricity bills while gaining access to superior contract terms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl card-hover"
              >
                <div className="text-primary-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Types Section */}
      <section className="py-20">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Business Electricity Contract Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from flexible contract structures designed to match your business risk profile and budget requirements. 
              Each option offers unique advantages depending on your energy strategy.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {contractTypes.map((contract, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card p-8 rounded-2xl card-hover border-l-4 border-${contract.color}-500`}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{contract.type}</h3>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-${contract.color}-100 text-${contract.color}-700`}>
                    {contract.duration}
                  </div>
                  <div className={`inline-block ml-2 px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-700`}>
                    {contract.ideal}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{contract.description}</p>
                
                <div className="space-y-3">
                  {contract.pros.map((pro, proIndex) => (
                    <div key={proIndex} className="flex items-center gap-3">
                      <CheckCircle className={`h-5 w-5 text-${contract.color}-500 flex-shrink-0`} />
                      <span className="text-gray-700">{pro}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              How Our Business Electricity Comparison Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined 5-step process makes switching business electricity suppliers simple and stress-free. 
              From initial analysis to contract activation, we handle everything.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 mb-16 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="glass-card p-8 rounded-2xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                  </div>
                </div>
                
                <div className="lg:w-1/2 flex justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supplier Network Section */}
      <section className="py-20">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Our Business Electricity Supplier Network
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with over 30 licensed electricity suppliers across the UK, from major utilities to specialist business providers. 
              This extensive network ensures we can find the perfect match for your business needs.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-2xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
              {suppliers.map((supplier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-200"
                >
                  <span className="text-sm font-medium text-gray-700">{supplier}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Plus many more specialist and independent suppliers</p>
              <a href="https://app.watt.co.uk/company" className="btn-primary inline-flex items-center">
                Compare All Suppliers <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">
                UK Business Electricity Market Insights
              </h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  The UK business electricity market has seen significant volatility in recent years, with wholesale prices 
                  influenced by global energy markets, renewable energy growth, and regulatory changes. Understanding market 
                  dynamics is crucial for optimal procurement timing.
                </p>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <TrendingDown className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Market Opportunity:</strong> Current market conditions favor buyers, with increased 
                      supplier competition driving down commercial electricity rates by an average of 15% since early 2024.
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <BarChart3 className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Renewable Growth:</strong> 42% of UK electricity now comes from renewable sources, 
                      creating new opportunities for green electricity contracts at competitive prices.
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Shield className="h-6 w-6 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Regulatory Protection:</strong> Ofgem's latest reforms enhance supplier financial 
                      resilience, reducing the risk of supplier failures affecting business customers.
                    </div>
                  </div>
                </div>
                
                <Link to="/energy-market-insights" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold">
                  Read Full Market Analysis <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Key Market Statistics</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-primary-50 rounded-lg">
                  <span className="font-semibold text-primary-700">Average Business Savings</span>
                  <span className="text-2xl font-bold text-primary-600">32%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="font-semibold text-green-700">Renewable Electricity Share</span>
                  <span className="text-2xl font-bold text-green-600">42%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="font-semibold text-blue-700">Licensed Suppliers</span>
                  <span className="text-2xl font-bold text-blue-600">70+</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-accent-50 rounded-lg">
                  <span className="font-semibold text-accent-700">Switch Time (Days)</span>
                  <span className="text-2xl font-bold text-accent-600">17-21</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about business electricity comparison and switching. 
              Our experts have compiled the most important information to help you make informed decisions.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <details className="group">
                  <summary className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 group-open:text-primary-600">
                        {faq.question}
                      </h3>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-open:rotate-90 transition-transform duration-200" />
                    </div>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link to="/faq" className="btn-secondary inline-flex items-center">
              View All FAQs <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-accent-500">
        <div className="section-padding">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to Save on Your Business Electricity?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Get your free, no-obligation quote today. Our expert team will analyze your current contract 
              and present you with the best available rates from our network of 30+ suppliers.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-gray-50">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Related Energy Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maximize your energy savings with our comprehensive range of business energy services. 
              From gas procurement to renewable energy solutions, we've got you covered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Business Gas", 
                description: "Compare commercial gas rates and secure competitive pricing for your business heating and operations.",
                link: "/business-gas",
                icon: <Building2 className="h-8 w-8" />
              },
              { 
                title: "Renewable Energy", 
                description: "Access 100% renewable electricity contracts and reduce your business carbon footprint.",
                link: "/renewable-energy",
                icon: <Lightbulb className="h-8 w-8" />
              },
              { 
                title: "Energy Auditing", 
                description: "Professional energy audits to identify efficiency opportunities and reduce consumption.",
                link: "/energy-auditing",
                icon: <BarChart3 className="h-8 w-8" />
              },
              { 
                title: "Multi-Site Energy", 
                description: "Specialized procurement solutions for businesses with multiple locations and complex needs.",
                link: "/multi-site-energy",
                icon: <Target className="h-8 w-8" />
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl card-hover group"
              >
                <div className="text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default BusinessElectricity