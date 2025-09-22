import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Flame, 
  TrendingDown, 
  Shield, 
  Clock, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Building2,
  Thermometer,
  Calculator,
  Award,
  Users,
  FileText,
  Star,
  Target,
  PoundSterling,
  Phone,
  Mail,
  MapPin,
  Factory,
  Home,
  Wrench
} from 'lucide-react'
import QuoteForm from '../components/QuoteForm'

const BusinessGas = () => {
  // Schema.org structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Business Gas Comparison Service",
    "description": "Compare commercial gas rates from 25+ UK suppliers. Save up to 40% on business gas costs with expert negotiation and competitive rates for heating and industrial use.",
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
      "description": "Business gas comparison and switching service",
      "price": "0",
      "priceCurrency": "GBP"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "892"
    }
  }

  const benefits = [
    {
      icon: <PoundSterling className="h-8 w-8" />,
      title: "Save Up to 40% on Gas Bills",
      description: "Our expert procurement team secures exclusive commercial gas rates that can reduce your heating and operational costs by 25-40% compared to standard business tariffs."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Price Certainty",
      description: "Fixed-rate gas contracts provide complete protection from volatile wholesale gas markets and unexpected price spikes that can impact your cash flow."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Fast Switching Process",
      description: "Switch gas suppliers in 17-21 days with zero interruption to your gas supply. We manage all administration and supplier coordination."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Personal Account Manager",
      description: "Your dedicated energy consultant provides ongoing contract monitoring, renewal planning, and market updates tailored to your business."
    },
    {
      icon: <Thermometer className="h-8 w-8" />,
      title: "Industrial Gas Solutions",
      description: "Specialized contracts for high-volume industrial users, manufacturing processes, and commercial heating systems with bespoke pricing structures."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Usage Analytics",
      description: "Advanced gas consumption reporting and analytics help identify efficiency opportunities and optimize your heating and operational schedules."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "No Service Charges",
      description: "Our business gas comparison service is completely free with no hidden fees. We're remunerated directly by gas suppliers when you switch."
    }
  ]

  const gasTypes = [
    {
      type: "Commercial Gas",
      usage: "20,000+ kWh annually",
      ideal: "Offices & retail",
      description: "Standard commercial gas contracts for businesses with moderate heating and hot water requirements. Ideal for offices, shops, and small commercial properties.",
      features: ["Competitive unit rates", "Flexible contract terms", "Online account management", "24/7 emergency support"],
      color: "primary"
    },
    {
      type: "Industrial Gas",
      usage: "200,000+ kWh annually",
      ideal: "Manufacturing & processing",
      description: "High-volume industrial gas solutions for manufacturing, food processing, and energy-intensive operations requiring substantial gas consumption.",
      features: ["Volume-based pricing", "Interruption clauses", "Dedicated support", "Custom billing cycles"],
      color: "accent"
    },
    {
      type: "Multi-Site Gas",
      usage: "Multiple locations",
      ideal: "Chains & corporations",
      description: "Consolidated gas procurement for businesses operating multiple sites, with centralized billing and portfolio management capabilities.",
      features: ["Portfolio pricing", "Central billing", "Site-by-site reporting", "Flexible payment terms"],
      color: "green"
    }
  ]

  const contractOptions = [
    {
      type: "Fixed Rate Gas Contracts",
      duration: "12-60 months",
      protection: "Full price protection",
      description: "Lock in competitive gas rates for up to 5 years, providing complete protection from wholesale market volatility and enabling accurate budget forecasting.",
      benefits: ["Predictable heating costs", "Budget certainty", "Protection from price spikes", "Long-term planning capability"],
      bestFor: "Businesses prioritizing budget certainty and cost control"
    },
    {
      type: "Variable Rate Gas Contracts",
      duration: "Rolling terms",
      protection: "Market tracking",
      description: "Flexible gas pricing that follows wholesale market movements, allowing businesses to benefit from falling gas prices while maintaining supply flexibility.",
      benefits: ["Benefit from price drops", "No long-term commitment", "Flexible terms", "Market rate transparency"],
      bestFor: "Businesses comfortable with market risk and wanting flexibility"
    },
    {
      type: "Capped Rate Gas Contracts", 
      duration: "12-36 months",
      protection: "Price ceiling",
      description: "Innovative contracts that cap maximum gas rates while allowing benefits from market falls, combining price protection with upside opportunity.",
      benefits: ["Maximum price protection", "Benefit from market falls", "Balanced risk profile", "Competitive base rates"],
      bestFor: "Businesses seeking balanced risk management with upside potential"
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: "Gas Bill Analysis",
      description: "Share your current gas bill and we'll analyze your consumption patterns, contract terms, and current rates to identify savings opportunities.",
      icon: <FileText className="h-12 w-12" />,
      details: "We examine your gas usage profile, seasonal variations, and current supplier terms"
    },
    {
      step: 2,
      title: "Market Comparison",
      description: "Our experts compare rates from 25+ licensed gas suppliers, analyzing unit rates, standing charges, and contract terms for your specific usage profile.",
      icon: <BarChart3 className="h-12 w-12" />,
      details: "Comprehensive analysis of all available commercial gas tariffs and contract options"
    },
    {
      step: 3,
      title: "Bespoke Proposals",
      description: "Receive detailed gas supply proposals showing potential savings, contract terms, and supplier credentials tailored to your business requirements.",
      icon: <Calculator className="h-12 w-12" />,
      details: "Detailed comparison documents with clear savings calculations and contract summaries"
    },
    {
      step: 4,
      title: "Rate Negotiation",
      description: "We leverage our relationships with gas suppliers to negotiate enhanced rates and improved contract terms beyond standard commercial offerings.",
      icon: <Target className="h-12 w-12" />,
      details: "Direct supplier negotiations to secure exclusive rates and favorable contract conditions"
    },
    {
      step: 5,
      title: "Contract Activation",
      description: "Upon your approval, we coordinate the entire switching process with your new gas supplier, ensuring seamless transition and continuous supply.",
      icon: <CheckCircle className="h-12 w-12" />,
      details: "Complete administrative handling including meter readings and contract commencement"
    }
  ]

  const faqs = [
    {
      question: "How much can I save on my business gas bills?",
      answer: "Business gas savings typically range from 25-40% depending on your current contract, consumption levels, and business type. Manufacturing businesses with high usage often achieve the highest absolute savings, while smaller commercial premises see significant percentage reductions. Our average client saves £1,800 annually on gas costs."
    },
    {
      question: "Will switching gas suppliers affect my gas supply reliability?",
      answer: "No, switching gas suppliers has no impact on supply reliability. Your local gas distribution network continues to deliver gas through the same pipes and infrastructure. Only the billing supplier changes - the physical gas supply remains completely unaffected and is regulated by Ofgem for continuity."
    },
    {
      question: "How long does it take to switch business gas suppliers?",
      answer: "The standard business gas switching process takes 17-21 working days from contract signature. If you're currently in a fixed-term contract, we can arrange the switch to coincide with your contract expiry to avoid any early termination penalties."
    },
    {
      question: "What gas supply information do I need for a quote?",
      answer: "You'll need a recent gas bill showing your MPRN (Meter Point Reference Number), annual consumption (kWh), current unit rates, standing charges, and any contract end dates. We also need basic business information about your premises type and operational requirements."
    },
    {
      question: "Are there charges for your gas comparison service?",
      answer: "Our business gas comparison service is completely free with no charges to you. We receive commission payments directly from gas suppliers when you switch, but this doesn't affect the rates you pay. There are no hidden fees, setup costs, or ongoing service charges."
    },
    {
      question: "Can I switch if I'm in a current gas contract?",
      answer: "If you're in a fixed-term gas contract, you'll generally need to wait until it expires to avoid termination fees. However, we can review your contract terms and in some cases, the savings from switching early may exceed the exit costs. We'll provide a detailed cost-benefit analysis."
    },
    {
      question: "What happens if my gas supplier goes out of business?",
      answer: "If your gas supplier fails, Ofgem automatically appoints a 'Supplier of Last Resort' to take over your supply. Your credit balance is protected under the Energy Market Malpractice regulations, and you can then choose a new supplier. Gas supply is never interrupted during this process."
    },
    {
      question: "Do you offer green gas options for businesses?",
      answer: "Yes, we offer various green gas options including biomethane, renewable gas certificates, and carbon offset programs. These sustainable gas solutions help businesses reduce their carbon footprint while maintaining competitive pricing for their heating and operational needs."
    },
    {
      question: "Can you help with industrial gas contracts for manufacturing?",
      answer: "Absolutely. We specialize in high-volume industrial gas contracts for manufacturing, processing, and energy-intensive operations. These contracts feature volume-based pricing, flexible terms, and industrial-specific clauses like interruption rights and load profiling."
    }
  ]

  const gasSuppliers = [
    "British Gas Business", "E.ON Business", "EDF Energy", "Scottish Power Business",
    "Shell Energy", "Total Energies", "Corona Energy", "Gazprom Energy",
    "Yu Energy", "Opus Energy", "Haven Power", "Drax Energy",
    "Pure Planet Business", "Good Energy", "Green Supplier Limited",
    "Squeaky Clean Energy", "Extra Energy Business", "Together Energy Business",
    "First Utility Business", "Spark Energy Business", "Axis Telecom Energy",
    "People's Energy Business", "Octopus Energy Business"
  ]

  const industryStats = [
    { metric: "25+", label: "Gas Suppliers" },
    { metric: "£1.8M", label: "Gas Savings 2024" },
    { metric: "3,200+", label: "Gas Contracts" },
    { metric: "4.9/5", label: "Service Rating" }
  ]

  return (
    <>
      <Helmet>
        <title>Business Gas Comparison UK | Commercial Gas Rates | Save up to 40%</title>
        <meta 
          name="description" 
          content="Compare business gas prices from 25+ UK suppliers. Save up to 40% on commercial gas costs. Fixed & flexible contracts. Industrial gas solutions. Free expert service." 
        />
        <meta name="keywords" content="business gas comparison, commercial gas rates, compare business gas prices UK, business gas suppliers, commercial gas quotes, business gas switching, industrial gas contracts" />
        <link rel="canonical" href="https://watt-energy-solutions.co.uk/business-gas" />
        <meta property="og:title" content="Business Gas Comparison UK | Commercial Gas Rates" />
        <meta property="og:description" content="Save up to 40% on business gas costs. Compare rates from 25+ suppliers. Expert negotiation. Free service." />
        <meta property="og:url" content="https://watt-energy-solutions.co.uk/business-gas" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business Gas Comparison UK | Save up to 40%" />
        <meta name="twitter:description" content="Compare commercial gas rates from 25+ UK suppliers. Expert negotiation. Free service." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Breadcrumbs */}
      <nav className="pt-24 pb-4 bg-gray-50">
        <div className="section-padding">
          <div className="flex text-sm text-gray-600">
            <Link to="/" className="hover:text-primary-600">Home</a>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-primary-600">Services</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Business Gas</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="section-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6">
              Business <span className="gradient-text">Gas Comparison</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Compare commercial gas rates from 25+ UK suppliers and save up to 40% on your business gas costs. 
              Expert procurement for heating, industrial processes, and commercial operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="https://app.watt.co.uk/company" className="btn-primary inline-flex items-center text-lg px-8 py-4">
                Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link to="/switching-guide" className="btn-secondary inline-flex items-center text-lg px-8 py-4">
                <Flame className="mr-2 h-5 w-5" />
                How It Works
              </a>
            </div>
            
            {/* Trust Signals */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {industryStats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold gradient-text">{stat.metric}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Business Gas Section */}
      <section className="py-20">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-8 text-center">
              What is Business Gas Procurement?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Business gas procurement involves sourcing natural gas supplies for commercial, industrial, and institutional 
                operations at competitive rates through the UK's deregulated gas market. Unlike domestic gas switching, 
                commercial gas contracts require sophisticated analysis of usage patterns, seasonal demands, and operational requirements.
              </p>
              
              <p className="mb-6">
                The UK business gas market was fully deregulated in 1998, creating competition among suppliers and enabling 
                businesses to negotiate bespoke contracts. Today, over 25 licensed gas suppliers compete for commercial customers, 
                offering various contract structures from simple fixed-rate agreements to complex industrial supply arrangements 
                with load profiling and interruption clauses.
              </p>
              
              <p className="mb-6">
                Commercial gas pricing comprises several elements including wholesale gas costs (typically 40-50% of the bill), 
                network transportation charges, government levies, and supplier margins. The complexity of these pricing components 
                means that apparent unit rate comparisons can be misleading without detailed contract analysis.
              </p>
              
              <p>
                Professional gas brokers like Watt Energy Solutions understand the nuances of commercial gas procurement, 
                including optimal contract timing, supplier credit assessment, and risk management. We leverage market intelligence 
                and supplier relationships to secure rates and terms that businesses typically cannot access independently, 
                while providing ongoing contract management and market monitoring services.
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
              Why Choose Professional Gas Procurement?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional gas procurement delivers substantial cost savings, risk mitigation, and operational benefits. 
              Our clients achieve 25-40% reductions in gas costs while gaining access to superior contract terms and ongoing support.
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
                <div className="text-orange-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gas Types Section */}
      <section className="py-20">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Business Gas Supply Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different business types require specialized gas contracts. We provide tailored solutions for commercial heating, 
              industrial processes, and multi-site operations with appropriate pricing structures and contract terms.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {gasTypes.map((gasType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card p-8 rounded-2xl card-hover border-l-4 border-${gasType.color}-500`}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{gasType.type}</h3>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-${gasType.color}-100 text-${gasType.color}-700 mr-2`}>
                    {gasType.usage}
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-700">
                    {gasType.ideal}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{gasType.description}</p>
                
                <div className="space-y-3">
                  {gasType.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className={`h-5 w-5 text-${gasType.color}-500 flex-shrink-0`} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Options Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Business Gas Contract Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from flexible contract structures designed to match your business risk appetite and operational requirements. 
              Each option provides different benefits for managing gas cost volatility and supply flexibility.
            </p>
          </div>
          
          <div className="space-y-8">
            {contractOptions.map((contract, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{contract.type}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-700">{contract.duration}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">{contract.protection}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 leading-relaxed mb-4">{contract.description}</p>
                    <p className="text-sm text-gray-500 italic">{contract.bestFor}</p>
                  </div>
                  
                  <div className="space-y-3">
                    {contract.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Our Business Gas Procurement Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive 5-step process ensures optimal gas procurement outcomes. From initial analysis to contract 
              implementation, we manage every aspect of your gas supply arrangements.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 mb-16 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-2/3">
                  <div className="glass-card p-8 rounded-2xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg mb-4">{step.description}</p>
                    <p className="text-sm text-gray-500 italic">{step.details}</p>
                  </div>
                </div>
                
                <div className="lg:w-1/3 flex justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supplier Network Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Our Business Gas Supplier Network
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain relationships with 25+ licensed gas suppliers across the UK, from major utilities to specialist 
              industrial providers. This comprehensive network ensures optimal contract terms for every business type.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-2xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
              {gasSuppliers.map((supplier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors duration-200"
                >
                  <span className="text-sm font-medium text-gray-700">{supplier}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Plus specialist industrial and regional gas suppliers</p>
              <a href="https://app.watt.co.uk/company" className="btn-primary inline-flex items-center">
                Compare All Gas Suppliers <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Market Analysis Section */}
      <section className="py-20">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">
                UK Business Gas Market Analysis
              </h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  The UK business gas market continues to offer significant opportunities for cost reduction, particularly 
                  for businesses coming off expired contracts or those who have not reviewed their gas supply arrangements recently. 
                  Market volatility has created distinct pricing windows that favor strategic procurement timing.
                </p>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <TrendingDown className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Pricing Trends:</strong> Wholesale gas prices have stabilized following 2022-23 volatility, 
                      creating opportunities for businesses to secure favorable fixed-rate contracts at competitive levels.
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Factory className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Industrial Focus:</strong> Suppliers are competing aggressively for industrial gas contracts, 
                      with specialized pricing for manufacturing, processing, and high-consumption commercial operations.
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Shield className="h-6 w-6 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Supply Security:</strong> Enhanced supplier resilience measures and diversified gas sourcing 
                      provide greater security for business customers following recent market disruptions.
                    </div>
                  </div>
                </div>
                
                <Link to="/energy-market-insights" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold">
                  Read Detailed Gas Market Report <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Current Market Metrics</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                  <span className="font-semibold text-orange-700">Average Business Gas Savings</span>
                  <span className="text-2xl font-bold text-orange-600">35%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="font-semibold text-green-700">Industrial Contract Growth</span>
                  <span className="text-2xl font-bold text-green-600">+28%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="font-semibold text-blue-700">Active Gas Suppliers</span>
                  <span className="text-2xl font-bold text-blue-600">25+</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                  <span className="font-semibold text-purple-700">Switch Completion (Days)</span>
                  <span className="text-2xl font-bold text-purple-600">17-21</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Business Gas Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get expert answers to common questions about business gas procurement, switching, and contract management. 
              Our team has compiled comprehensive guidance based on years of commercial gas experience.
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
                      <h3 className="text-lg font-semibold text-gray-900 group-open:text-orange-600">
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
            <p className="text-gray-600 mb-4">Need specific advice about your gas requirements?</p>
            <Link to="/contact" className="btn-secondary inline-flex items-center">
              Contact Our Gas Experts <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-red-500">
        <div className="section-padding">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to Reduce Your Business Gas Costs?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Get your free, no-obligation gas quote today. Our procurement experts will analyze your requirements 
              and present competitive proposals from our network of 25+ specialist gas suppliers.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Complete Business Energy Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optimize all aspects of your business energy portfolio with our comprehensive range of procurement 
              and management services. From electricity to water, we deliver complete utility solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Business Electricity", 
                description: "Compare commercial electricity rates and secure competitive power contracts for your operations.",
                link: "/business-electricity",
                icon: <Building2 className="h-8 w-8" />
              },
              { 
                title: "Renewable Energy", 
                description: "Access green gas and renewable electricity options to reduce your environmental impact.",
                link: "/renewable-energy",
                icon: <Thermometer className="h-8 w-8" />
              },
              { 
                title: "Energy Auditing", 
                description: "Professional gas efficiency audits to optimize consumption and reduce operational costs.",
                link: "/energy-auditing",
                icon: <BarChart3 className="h-8 w-8" />
              },
              { 
                title: "Multi-Site Energy", 
                description: "Consolidated gas procurement for businesses operating multiple locations and facilities.",
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
                <div className="text-orange-600 mb-4 group-hover:text-orange-700 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default BusinessGas