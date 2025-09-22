import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Leaf, 
  Sun, 
  Wind, 
  Zap, 
  TrendingDown, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Building2,
  Globe,
  Calculator,
  Award,
  Users,
  FileText,
  Star,
  Target,
  PoundSterling,
  Recycle,
  Factory,
  TreePine,
  Waves,
  BarChart3
} from 'lucide-react'
import QuoteForm from '../components/QuoteForm'

const RenewableEnergy = () => {
  // Schema.org structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Renewable Energy Solutions for Business",
    "description": "Green energy procurement for UK businesses. 100% renewable electricity and gas. REGO certificates, PPAs, and carbon-neutral solutions. Expert sustainability consulting.",
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
    "serviceType": "Renewable Energy Procurement",
    "offers": {
      "@type": "Offer",
      "description": "Renewable energy procurement and sustainability consulting",
      "price": "0",
      "priceCurrency": "GBP"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "543"
    }
  }

  const renewableOptions = [
    {
      type: "100% Renewable Electricity",
      source: "Wind, Solar & Hydro",
      certification: "REGO Backed",
      description: "Certified renewable electricity sourced from UK wind farms, solar installations, and hydroelectric plants. Full REGO certificate backing guarantees genuine green energy.",
      benefits: ["Zero carbon electricity", "REGO certificates included", "Competitive pricing", "UK sourced renewables"],
      icon: <Zap className="h-8 w-8" />,
      color: "green"
    },
    {
      type: "Green Gas Solutions",
      source: "Biomethane & Biogas",
      certification: "Green Gas Certificates",
      description: "Renewable gas options including biomethane from anaerobic digestion and green gas certificates to offset your natural gas consumption.",
      benefits: ["Carbon neutral gas", "UK biomethane sources", "Green gas certificates", "Waste-to-energy sourcing"],
      icon: <Leaf className="h-8 w-8" />,
      color: "emerald"
    },
    {
      type: "Solar Power Purchase Agreements",
      source: "Direct Solar PPAs",
      certification: "Long-term contracts",
      description: "Direct power purchase agreements with solar farms providing long-term price certainty and genuine renewable energy supply for large energy users.",
      benefits: ["Long-term price stability", "Direct renewable sourcing", "Corporate sustainability goals", "Hedge against price volatility"],
      icon: <Sun className="h-8 w-8" />,
      color: "yellow"
    },
    {
      type: "Wind Energy Contracts",
      source: "Offshore & Onshore Wind",
      certification: "Power Purchase Agreements",
      description: "Corporate wind energy contracts including sleeved PPAs and virtual power purchase agreements with UK wind farm developments.",
      benefits: ["Predictable energy costs", "Corporate wind procurement", "Sustainability reporting", "Carbon footprint reduction"],
      icon: <Wind className="h-8 w-8" />,
      color: "blue"
    }
  ]

  const sustainabilityBenefits = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Carbon Footprint Reduction",
      description: "Significantly reduce your business carbon emissions with genuine renewable energy sources. Achieve net-zero goals and demonstrate environmental leadership."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "ESG Compliance",
      description: "Meet Environmental, Social, and Governance requirements with verified renewable energy procurement. Support sustainability reporting and stakeholder expectations."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Price Stability",
      description: "Renewable energy contracts often provide superior price stability compared to fossil fuel alternatives, protecting against volatile energy markets."
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Brand Enhancement",
      description: "Strengthen your brand reputation and customer loyalty by demonstrating genuine commitment to environmental sustainability and climate action."
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Future-Proof Energy Strategy",
      description: "Align with UK government net-zero targets and prepare for future carbon pricing and environmental regulations with renewable energy adoption."
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Cost-Effective Solutions",
      description: "Renewable energy is increasingly cost-competitive, often providing savings versus traditional energy while delivering environmental benefits."
    }
  ]

  const certificationTypes = [
    {
      name: "REGO Certificates",
      description: "Renewable Energy Guarantees of Origin certificates provide proof that electricity has been generated from renewable sources in the UK.",
      coverage: "Electricity supply",
      verification: "Ofgem regulated"
    },
    {
      name: "Green Gas Certificates",
      description: "Certificates that verify gas supply from renewable sources including biomethane from anaerobic digestion and other renewable gas sources.",
      coverage: "Gas supply",
      verification: "Industry standard"
    },
    {
      name: "Carbon Neutral Certification",
      description: "Comprehensive carbon offsetting programs that neutralize your entire energy carbon footprint through verified offset projects.",
      coverage: "Total energy impact",
      verification: "Third-party verified"
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: "Sustainability Assessment",
      description: "We analyze your current energy usage, carbon footprint, and sustainability goals to recommend the optimal renewable energy strategy.",
      icon: <FileText className="h-12 w-12" />
    },
    {
      step: 2,
      title: "Renewable Options Analysis",
      description: "Compare all available renewable energy options including REGO-backed electricity, green gas, PPAs, and carbon offset programs.",
      icon: <Leaf className="h-12 w-12" />
    },
    {
      step: 3,
      title: "Cost-Benefit Evaluation",
      description: "Detailed analysis of pricing, contract terms, and long-term financial implications of renewable energy versus conventional alternatives.",
      icon: <Calculator className="h-12 w-12" />
    },
    {
      step: 4,
      title: "Contract Negotiation",
      description: "Negotiate optimal terms for renewable energy contracts, including pricing, certification requirements, and sustainability reporting provisions.",
      icon: <Target className="h-12 w-12" />
    },
    {
      step: 5,
      title: "Implementation & Reporting",
      description: "Seamless transition to renewable energy with ongoing sustainability reporting and carbon footprint monitoring for your business.",
      icon: <CheckCircle className="h-12 w-12" />
    }
  ]

  const faqs = [
    {
      question: "What exactly is renewable energy for businesses?",
      answer: "Renewable energy for businesses includes electricity generated from wind, solar, hydro, and biomass sources, plus green gas from biomethane and biogas. These sources are naturally replenished and produce minimal carbon emissions compared to fossil fuels. Business renewable energy is verified through certificates like REGO (Renewable Energy Guarantees of Origin) ensuring genuine green supply."
    },
    {
      question: "How much does renewable energy cost compared to standard business tariffs?",
      answer: "Renewable energy pricing has become increasingly competitive with conventional energy. Many renewable electricity tariffs are now price-competitive with standard business rates, while some green options may carry a small premium (typically 2-8%). However, this is often offset by price stability, government incentives, and brand value benefits."
    },
    {
      question: "What are REGO certificates and why are they important?",
      answer: "REGO (Renewable Energy Guarantees of Origin) certificates are official documents that prove electricity has been generated from renewable sources. Each certificate represents 1 MWh of renewable generation. REGO certificates are essential for legitimate renewable energy claims and are regulated by Ofgem to prevent greenwashing."
    },
    {
      question: "Can my business get 100% renewable energy supply?",
      answer: "Yes, many UK suppliers offer 100% renewable electricity backed by REGO certificates. For gas, you can achieve carbon neutrality through biomethane supply, green gas certificates, or carbon offset programs. We help businesses design comprehensive renewable energy strategies covering all energy needs."
    },
    {
      question: "What is a Power Purchase Agreement (PPA) and who can access them?",
      answer: "A PPA is a long-term contract to purchase renewable electricity directly from a generation source like a wind farm or solar installation. PPAs typically require annual consumption of 1-2 GWh+ and offer price certainty for 10-25 years. They're ideal for large energy users seeking genuine renewable supply and price stability."
    },
    {
      question: "How does renewable energy help with ESG and sustainability reporting?",
      answer: "Renewable energy procurement directly reduces Scope 2 carbon emissions in your sustainability reporting. REGO certificates and green gas certificates provide verifiable evidence of renewable energy use for ESG reporting, helping meet stakeholder expectations and environmental compliance requirements."
    },
    {
      question: "Are there government incentives for business renewable energy adoption?",
      answer: "While direct subsidies are limited, businesses benefit from enhanced capital allowances for renewable energy installations, potential business rates relief, and favorable treatment in government procurement processes. The main incentive is protection from future carbon pricing and environmental regulations."
    },
    {
      question: "How quickly can my business switch to renewable energy?",
      answer: "Switching to renewable electricity can be completed in 17-21 days like any standard energy switch. Green gas solutions may take slightly longer depending on certificate availability. PPA arrangements require more time for negotiation and implementation but can usually be completed within 3-6 months."
    }
  ]

  const renewableStats = [
    { metric: "42%", label: "UK Renewable Generation" },
    { metric: "£180M", label: "Green Energy Procured" },
    { metric: "850+", label: "Renewable Contracts" },
    { metric: "15%", label: "Average Green Premium" }
  ]

  return (
    <>
      <Helmet>
        <title>Renewable Energy for Business UK | Green Energy Procurement | 100% Renewable</title>
        <meta 
          name="description" 
          content="Business renewable energy solutions UK. 100% green electricity & gas. REGO certificates, PPAs, carbon neutral options. Expert sustainability consulting. Get quote today." 
        />
        <meta name="keywords" content="renewable energy business UK, green energy procurement, 100% renewable electricity, business sustainability, REGO certificates, power purchase agreements, carbon neutral energy, green gas business" />
        <link rel="canonical" href="https://watt-energy-solutions.co.uk/renewable-energy" />
        <meta property="og:title" content="Renewable Energy for Business UK | Green Energy Procurement" />
        <meta property="og:description" content="100% renewable energy solutions for UK businesses. Green electricity, sustainable gas, PPAs. Expert consulting." />
        <meta property="og:url" content="https://watt-energy-solutions.co.uk/renewable-energy" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business Renewable Energy UK | 100% Green Solutions" />
        <meta name="twitter:description" content="Renewable energy procurement for UK businesses. Green electricity, sustainable gas, expert consulting." />
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
            <span className="text-gray-900">Renewable Energy</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="section-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6">
              Renewable <span className="gradient-text">Energy Solutions</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Transition your business to 100% renewable energy with REGO-backed electricity, green gas solutions, 
              and Power Purchase Agreements. Reduce your carbon footprint while achieving cost-effective, sustainable energy procurement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="https://app.watt.co.uk/company" className="btn-primary inline-flex items-center text-lg px-8 py-4">
                Get Green Quote <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link to="/energy-auditing" className="btn-secondary inline-flex items-center text-lg px-8 py-4">
                <Leaf className="mr-2 h-5 w-5" />
                Carbon Assessment
              </Link>
            </div>
            
            {/* Trust Signals */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {renewableStats.map((stat, index) => (
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

      {/* What is Renewable Energy Section */}
      <section className="py-20">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-8 text-center">
              What is Business Renewable Energy?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Business renewable energy encompasses electricity and gas sourced from naturally replenishing resources 
                including wind, solar, hydro, biomass, and biogas. Unlike fossil fuels, renewable energy sources produce 
                minimal carbon emissions and are virtually inexhaustible, making them essential for sustainable business operations.
              </p>
              
              <p className="mb-6">
                In the UK, 42% of electricity generation now comes from renewable sources, making it both environmentally 
                responsible and economically viable for businesses to transition to green energy. Renewable energy procurement 
                involves securing verified green electricity through REGO (Renewable Energy Guarantees of Origin) certificates 
                and sustainable gas through biomethane or carbon offset programs.
              </p>
              
              <p className="mb-6">
                Business renewable energy solutions range from simple green tariffs to sophisticated Power Purchase Agreements (PPAs) 
                with renewable generators. Modern renewable energy contracts often provide price stability and competitive rates 
                while delivering genuine environmental benefits and supporting corporate sustainability goals.
              </p>
              
              <p>
                Professional renewable energy procurement ensures businesses access genuine green energy sources while optimizing 
                costs and contract terms. This includes navigating certification requirements, evaluating different renewable 
                technologies, and designing comprehensive sustainability strategies that align with business objectives and 
                stakeholder expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Renewable Options Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Business Renewable Energy Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from comprehensive renewable energy solutions designed to meet your sustainability goals and operational requirements. 
              From simple green tariffs to complex corporate PPAs, we provide certified renewable energy options.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {renewableOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card p-8 rounded-2xl card-hover border-l-4 border-${option.color}-500`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`text-${option.color}-600`}>
                    {option.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{option.type}</h3>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-${option.color}-100 text-${option.color}-700 mr-2`}>
                      {option.source}
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-700">
                      {option.certification}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
                
                <div className="space-y-3">
                  {option.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-3">
                      <CheckCircle className={`h-5 w-5 text-${option.color}-500 flex-shrink-0`} />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Benefits Section */}
      <section className="py-20">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Why Choose Renewable Energy for Your Business?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Renewable energy delivers environmental, financial, and strategic benefits for forward-thinking businesses. 
              From carbon reduction to brand enhancement, sustainable energy procurement supports multiple business objectives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sustainabilityBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl card-hover"
              >
                <div className="text-green-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Types Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Renewable Energy Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understand the different certification schemes that verify renewable energy supply. These certificates 
              provide transparency and credibility for your sustainability claims and ESG reporting.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {certificationTypes.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-8 rounded-2xl text-center"
              >
                <h3 className="text-2xl font-bold mb-4">{cert.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{cert.description}</p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Coverage:</span>
                    <span className="text-gray-600">{cert.coverage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Verification:</span>
                    <span className="text-gray-600">{cert.verification}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Our Renewable Energy Procurement Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures optimal renewable energy procurement aligned with your sustainability goals 
              and budget requirements. From assessment to implementation, we guide you through every step.
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
                      <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                  </div>
                </div>
                
                <div className="lg:w-1/3 flex justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">
                UK Renewable Energy Market Update
              </h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  The UK renewable energy sector continues to expand rapidly, with record levels of wind and solar generation 
                  driving down costs and improving availability. Government targets for net-zero by 2050 are accelerating 
                  renewable energy deployment and creating new opportunities for business procurement.
                </p>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <TreePine className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Record Generation:</strong> 2024 saw renewable energy provide over 50% of UK electricity 
                      on multiple occasions, demonstrating the maturity and reliability of green energy sources.
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <PoundSterling className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Cost Competitiveness:</strong> Renewable electricity is now cost-competitive with conventional 
                      generation, making green energy economically attractive for businesses of all sizes.
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Factory className="h-6 w-6 text-purple-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Corporate Demand:</strong> Business demand for renewable energy continues to grow, driven by 
                      ESG requirements, customer expectations, and preparation for future carbon pricing.
                    </div>
                  </div>
                </div>
                
                <Link to="/energy-market-insights" className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold">
                  Read Full Renewable Energy Report <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Renewable Energy Statistics</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="font-semibold text-green-700">UK Renewable Generation</span>
                  <span className="text-2xl font-bold text-green-600">42%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="font-semibold text-blue-700">Wind Power Capacity</span>
                  <span className="text-2xl font-bold text-blue-600">28 GW</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg">
                  <span className="font-semibold text-yellow-700">Solar Installations</span>
                  <span className="text-2xl font-bold text-yellow-600">15 GW</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                  <span className="font-semibold text-purple-700">Corporate PPAs 2024</span>
                  <span className="text-2xl font-bold text-purple-600">+65%</span>
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
              Renewable Energy Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get expert answers about business renewable energy procurement, certifications, and sustainability strategies. 
              Our renewable energy specialists provide comprehensive guidance for your green energy transition.
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
                      <h3 className="text-lg font-semibold text-gray-900 group-open:text-green-600">
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
            <p className="text-gray-600 mb-4">Need specific renewable energy advice?</p>
            <Link to="/contact" className="btn-secondary inline-flex items-center">
              Contact Our Sustainability Experts <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-gradient-to-br from-green-500 to-emerald-500">
        <div className="section-padding">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to Go Green with Renewable Energy?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Get your free renewable energy quote today. Our sustainability experts will assess your requirements 
              and present certified green energy solutions that align with your environmental and financial goals.
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
              Complete Sustainability Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your renewable energy strategy with our comprehensive sustainability services. 
              From energy auditing to carbon management, we support your complete environmental journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Energy Auditing", 
                description: "Professional energy audits to identify efficiency opportunities and optimize renewable energy adoption.",
                link: "/energy-auditing",
                icon: <BarChart3 className="h-8 w-8" />
              },
              { 
                title: "Business Electricity", 
                description: "Combine renewable electricity procurement with competitive commercial electricity rates.",
                link: "/business-electricity",
                icon: <Zap className="h-8 w-8" />
              },
              { 
                title: "Business Gas", 
                description: "Green gas solutions including biomethane and carbon offset programs for complete sustainability.",
                link: "/business-gas",
                icon: <Leaf className="h-8 w-8" />
              },
              { 
                title: "Multi-Site Energy", 
                description: "Renewable energy procurement for businesses with multiple locations and complex portfolios.",
                link: "/multi-site-energy",
                icon: <Building2 className="h-8 w-8" />
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl card-hover group"
              >
                <div className="text-green-600 mb-4 group-hover:text-green-700 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-green-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
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

export default RenewableEnergy