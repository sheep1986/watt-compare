import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Building2, 
  MapPin, 
  BarChart3, 
  Shield, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Target,
  Users,
  Calculator,
  Award,
  FileText,
  Zap,
  TrendingDown,
  Settings,
  Globe,
  PieChart,
  Activity,
  Database,
  Network
} from 'lucide-react'
import QuoteForm from '../components/QuoteForm'

const MultiSiteEnergy = () => {
  // Schema.org structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Multi-Site Energy Management Services",
    "description": "Energy procurement and management for businesses with multiple locations. Portfolio optimization, central billing, consolidated contracts. Expert multi-site energy solutions.",
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
    "serviceType": "Multi-Site Energy Management",
    "offers": {
      "@type": "Offer",
      "description": "Multi-site energy procurement and portfolio management",
      "price": "0",
      "priceCurrency": "GBP"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "287"
    }
  }

  const multiSiteChallenges = [
    {
      challenge: "Fragmented Energy Contracts",
      problem: "Multiple contracts with different suppliers, rates, and renewal dates across locations",
      solution: "Consolidated portfolio management with synchronized contract terms and unified pricing strategies",
      icon: <FileText className="h-8 w-8" />
    },
    {
      challenge: "Complex Billing Management",
      problem: "Separate bills for each location making cost analysis and budgeting extremely difficult",
      solution: "Central billing systems with site-by-site breakdown and automated cost allocation",
      icon: <Calculator className="h-8 w-8" />
    },
    {
      challenge: "Lack of Portfolio Visibility",
      problem: "No consolidated view of total energy spend, consumption patterns, or performance metrics",
      solution: "Comprehensive portfolio reporting with real-time usage analytics and benchmarking",
      icon: <BarChart3 className="h-8 w-8" />
    },
    {
      challenge: "Inefficient Procurement",
      problem: "Individual site negotiations miss volume discounts and favorable terms available to larger portfolios",
      solution: "Aggregated procurement leveraging total portfolio volume for superior rates and terms",
      icon: <Target className="h-8 w-8" />
    }
  ]

  const solutionTypes = [
    {
      type: "Portfolio Aggregation",
      size: "10+ sites",
      ideal: "Retail chains & franchises",
      description: "Combine all sites into a single aggregated contract to maximize volume discounts and simplify management. Ideal for businesses with consistent energy profiles across locations.",
      benefits: ["Volume discount pricing", "Single contract management", "Unified terms", "Simplified administration"],
      icon: <Network className="h-8 w-8" />,
      color: "blue"
    },
    {
      type: "Flexible Portfolio",
      size: "5-50 sites",
      ideal: "Mixed-use portfolios",
      description: "Flexible contracting allowing different energy products for different site types while maintaining portfolio-level benefits and consolidated management.",
      benefits: ["Site-specific optimization", "Portfolio-level pricing", "Flexible terms", "Mixed energy products"],
      icon: <Settings className="h-8 w-8" />,
      color: "green"
    },
    {
      type: "Managed Portfolio",
      size: "20+ sites",
      ideal: "Corporate estates",
      description: "Comprehensive energy management including procurement, monitoring, reporting, and optimization for large multi-site portfolios with dedicated account management.",
      benefits: ["Full-service management", "Dedicated support", "Advanced analytics", "Continuous optimization"],
      icon: <Users className="h-8 w-8" />,
      color: "purple"
    }
  ]

  const portfolioServices = [
    {
      service: "Centralized Procurement",
      description: "Aggregate energy requirements across all sites to negotiate superior rates and terms not available to individual locations.",
      icon: <Building2 className="h-8 w-8" />
    },
    {
      service: "Portfolio Analytics",
      description: "Comprehensive reporting and analytics providing visibility into total energy spend, consumption patterns, and site performance benchmarking.",
      icon: <PieChart className="h-8 w-8" />
    },
    {
      service: "Central Billing",
      description: "Consolidated billing with detailed site-by-site breakdown, automated cost allocation, and simplified payment processing.",
      icon: <Database className="h-8 w-8" />
    },
    {
      service: "Risk Management",
      description: "Portfolio-level risk assessment and mitigation strategies including price hedging, supplier diversification, and contract term optimization.",
      icon: <Shield className="h-8 w-8" />
    },
    {
      service: "Site Benchmarking",
      description: "Compare performance across locations to identify efficiency opportunities, outliers, and best practices for portfolio optimization.",
      icon: <Activity className="h-8 w-8" />
    },
    {
      service: "Renewal Management",
      description: "Proactive contract renewal planning ensuring optimal timing, terms, and continuity across the entire portfolio with no gaps in coverage.",
      icon: <Clock className="h-8 w-8" />
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: "Portfolio Assessment",
      description: "Comprehensive analysis of your current energy arrangements across all sites including contracts, consumption, costs, and renewal dates.",
      icon: <FileText className="h-12 w-12" />,
      details: "We audit all existing contracts and identify optimization opportunities"
    },
    {
      step: 2,
      title: "Strategy Development",
      description: "Design optimal portfolio structure considering site types, usage patterns, risk appetite, and business objectives for maximum value.",
      icon: <Target className="h-12 w-12" />,
      details: "Custom strategy aligned with your operational and financial goals"
    },
    {
      step: 3,
      title: "Market Procurement",
      description: "Leverage portfolio volume to negotiate competitive rates and favorable terms with multiple suppliers across electricity and gas.",
      icon: <BarChart3 className="h-12 w-12" />,
      details: "Competitive procurement process maximizing portfolio value"
    },
    {
      step: 4,
      title: "Implementation",
      description: "Seamlessly transition all sites to new arrangements with coordinated timing, supplier management, and administrative handling.",
      icon: <Settings className="h-12 w-12" />,
      details: "Project managed implementation with minimal business disruption"
    },
    {
      step: 5,
      title: "Ongoing Management",
      description: "Continuous portfolio monitoring, reporting, optimization, and proactive renewal planning to maintain optimal arrangements.",
      icon: <Users className="h-12 w-12" />,
      details: "Dedicated account management with regular performance reviews"
    }
  ]

  const industrySpecialties = [
    {
      industry: "Retail Chains",
      sites: "50-500 stores",
      specialization: "Standardized energy profiles with volume aggregation benefits",
      approach: "Portfolio contracts with standardized terms across all locations"
    },
    {
      industry: "Hospitality Groups",
      sites: "10-100 properties",
      specialization: "Mixed property types requiring flexible energy solutions",
      approach: "Tiered contracts accommodating different property sizes and types"
    },
    {
      industry: "Manufacturing",
      sites: "5-50 facilities",
      specialization: "High-consumption industrial sites with complex energy needs",
      approach: "Industrial contracts with flexible capacity and interruption clauses"
    },
    {
      industry: "Office Portfolios",
      sites: "20-200 offices",
      specialization: "Commercial properties with sustainability requirements",
      approach: "Green energy options with central ESG reporting capabilities"
    }
  ]

  const faqs = [
    {
      question: "What qualifies as a multi-site energy portfolio?",
      answer: "A multi-site energy portfolio typically includes 3+ locations with separate energy supplies. However, our specialized multi-site services are most beneficial for businesses with 10+ sites. We work with retail chains, restaurant groups, manufacturing companies, property portfolios, and any business operating multiple locations across the UK."
    },
    {
      question: "How much can multi-site energy management save my business?",
      answer: "Multi-site energy management typically delivers 15-35% savings through volume discounts, optimized contract terms, and improved operational efficiency. Large portfolios (50+ sites) often achieve the highest percentage savings, while businesses with 10-20 sites still benefit significantly from aggregated procurement and simplified management."
    },
    {
      question: "Can I have different energy contracts for different types of sites?",
      answer: "Yes, our flexible portfolio approach allows different energy products for different site types while maintaining portfolio-level benefits. For example, you might have industrial contracts for manufacturing sites, standard commercial contracts for offices, and green energy options for customer-facing locations."
    },
    {
      question: "How does central billing work for multi-site portfolios?",
      answer: "Central billing consolidates all your energy costs into a single monthly invoice with detailed site-by-site breakdown. You can choose to receive individual site bills alongside the consolidated invoice, or opt for master billing with internal cost allocation reports. Payment processing is simplified through a single supplier relationship."
    },
    {
      question: "What happens if I acquire or dispose of sites during the contract term?",
      answer: "Our multi-site contracts include flexibility for portfolio changes. New sites can typically be added to existing contracts at the same rates and terms, while disposed sites can be removed without penalties. We manage all administrative aspects including meter point transfers and supplier notifications."
    },
    {
      question: "How do you handle sites with different contract end dates?",
      answer: "We develop a strategic renewal plan to align contract end dates across your portfolio. This might involve arranging flexible or short-term contracts for some sites to synchronize with your main portfolio, enabling full aggregated procurement benefits for future renewals."
    },
    {
      question: "Can multi-site management include renewable energy options?",
      answer: "Absolutely. We offer portfolio-wide renewable energy solutions including REGO-backed electricity, green gas certificates, and large-scale Power Purchase Agreements (PPAs). Portfolio aggregation often makes renewable energy more cost-effective and enables access to corporate PPAs not available to individual sites."
    },
    {
      question: "What reporting and analytics do you provide for multi-site portfolios?",
      answer: "We provide comprehensive portfolio reporting including total energy spend, site-by-site consumption analysis, performance benchmarking, budget variance reports, and carbon footprint tracking. Reports can be customized for different stakeholders and delivered monthly, quarterly, or on-demand through our online portal."
    }
  ]

  const portfolioStats = [
    { metric: "2,500+", label: "Sites Managed" },
    { metric: "£25M", label: "Annual Portfolio Value" },
    { metric: "28%", label: "Average Savings" },
    { metric: "4.9/5", label: "Client Satisfaction" }
  ]

  return (
    <>
      <Helmet>
        <title>Multi-Site Energy Management UK | Portfolio Energy Procurement | Central Billing</title>
        <meta 
          name="description" 
          content="Multi-site energy management for businesses with multiple locations. Portfolio procurement, central billing, site analytics. Save 15-35% on energy costs. Get quote today." 
        />
        <meta name="keywords" content="multi-site energy management, portfolio energy procurement, central billing energy, multiple location energy, retail chain energy, franchise energy management, commercial property energy" />
        <link rel="canonical" href="https://watt-energy-solutions.co.uk/multi-site-energy" />
        <meta property="og:title" content="Multi-Site Energy Management UK | Portfolio Energy Procurement" />
        <meta property="og:description" content="Energy management for multiple locations. Portfolio procurement, central billing, analytics. Save up to 35%." />
        <meta property="og:url" content="https://watt-energy-solutions.co.uk/multi-site-energy" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Multi-Site Energy Management | Portfolio Procurement UK" />
        <meta name="twitter:description" content="Expert energy management for businesses with multiple locations. Portfolio procurement and central billing." />
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
            <span className="text-gray-900">Multi-Site Energy</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="section-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6">
              Multi-Site <span className="gradient-text">Energy Management</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive energy procurement and management for businesses with multiple locations. 
              Portfolio optimization, central billing, and consolidated contracts delivering 15-35% savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="https://app.watt.co.uk/company" className="btn-primary inline-flex items-center text-lg px-8 py-4">
                Get Portfolio Quote <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link to="/energy-auditing" className="btn-secondary inline-flex items-center text-lg px-8 py-4">
                <BarChart3 className="mr-2 h-5 w-5" />
                Portfolio Analysis
              </a>
            </div>
            
            {/* Trust Signals */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {portfolioStats.map((stat, index) => (
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

      {/* Multi-Site Challenges Section */}
      <section className="py-20">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Multi-Site Energy Challenges We Solve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Businesses with multiple locations face unique energy management challenges. Our specialized solutions 
              address these complexities while delivering significant cost savings and operational efficiencies.
            </p>
          </div>
          
          <div className="space-y-8">
            {multiSiteChallenges.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="flex items-center gap-4">
                    <div className="text-primary-600">{item.icon}</div>
                    <h3 className="text-2xl font-bold">{item.challenge}</h3>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Problem:</h4>
                    <p className="text-gray-600 leading-relaxed">{item.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Our Solution:</h4>
                    <p className="text-gray-600 leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Multi-Site Energy Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from flexible multi-site energy solutions designed for different portfolio sizes and complexity levels. 
              Each approach maximizes value while addressing your specific operational requirements.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {solutionTypes.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card p-8 rounded-2xl card-hover border-l-4 border-${solution.color}-500`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`text-${solution.color}-600`}>
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{solution.type}</h3>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-${solution.color}-100 text-${solution.color}-700 mr-2`}>
                      {solution.size}
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-700">
                      {solution.ideal}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                
                <div className="space-y-3">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-3">
                      <CheckCircle className={`h-5 w-5 text-${solution.color}-500 flex-shrink-0`} />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Services Section */}
      <section className="py-20">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Comprehensive Portfolio Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our multi-site energy management encompasses all aspects of portfolio optimization, from procurement 
              to ongoing management, delivering maximum value across your entire energy estate.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl card-hover"
              >
                <div className="text-primary-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.service}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Our Multi-Site Energy Management Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures optimal portfolio performance from initial assessment through ongoing optimization. 
              Every step is designed to maximize value while minimizing operational disruption.
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
                      <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg mb-4">{step.description}</p>
                    <p className="text-sm text-gray-500 italic">{step.details}</p>
                  </div>
                </div>
                
                <div className="lg:w-1/3 flex justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Specialties Section */}
      <section className="py-20">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Industry-Specific Multi-Site Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that different industries have unique multi-site energy requirements. Our specialized approaches 
              are tailored to the specific needs and operational patterns of your sector.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {industrySpecialties.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Building2 className="h-8 w-8 text-primary-600" />
                  <div>
                    <h3 className="text-2xl font-bold">{industry.industry}</h3>
                    <div className="text-sm text-gray-600">{industry.sites}</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Specialization:</h4>
                    <p className="text-gray-600">{industry.specialization}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Our Approach:</h4>
                    <p className="text-gray-600">{industry.approach}</p>
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
                Multi-Site Energy Market Trends
              </h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  The multi-site energy market is evolving rapidly with new technologies, regulatory changes, and 
                  sustainability requirements driving innovation in portfolio management. Businesses with multiple 
                  locations are increasingly recognizing the value of centralized energy management.
                </p>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <TrendingDown className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Portfolio Aggregation Growth:</strong> 65% increase in multi-site aggregation contracts 
                      as businesses realize volume purchasing benefits and operational efficiencies.
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Database className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Technology Integration:</strong> Advanced analytics and automated portfolio management 
                      tools enable real-time optimization and predictive energy management.
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Globe className="h-6 w-6 text-purple-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Sustainability Focus:</strong> Multi-site renewable energy procurement and ESG reporting 
                      becoming standard requirements for corporate energy strategies.
                    </div>
                  </div>
                </div>
                
                <Link to="/energy-market-insights" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold">
                  Read Full Multi-Site Market Report <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Portfolio Performance Metrics</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-primary-50 rounded-lg">
                  <span className="font-semibold text-primary-700">Average Portfolio Savings</span>
                  <span className="text-2xl font-bold text-primary-600">28%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="font-semibold text-green-700">Management Efficiency Gain</span>
                  <span className="text-2xl font-bold text-green-600">65%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="font-semibold text-blue-700">Contract Consolidation</span>
                  <span className="text-2xl font-bold text-blue-600">85%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                  <span className="font-semibold text-purple-700">Billing Simplification</span>
                  <span className="text-2xl font-bold text-purple-600">90%</span>
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
              Multi-Site Energy Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get expert answers about multi-site energy management, portfolio optimization, and central billing. 
              Our specialists provide guidance for businesses with multiple locations.
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
            <p className="text-gray-600 mb-4">Ready to optimize your multi-site energy portfolio?</p>
            <Link to="/contact" className="btn-secondary inline-flex items-center">
              Contact Our Portfolio Specialists <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-purple-500">
        <div className="section-padding">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to Optimize Your Multi-Site Energy Portfolio?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Get your free multi-site energy assessment today. Our portfolio specialists will analyze your current 
              arrangements and present optimization strategies to reduce costs and simplify management.
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
              Complete Multi-Site Energy Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your multi-site energy strategy with our comprehensive portfolio services. 
              From renewable energy to detailed auditing, we provide complete energy solutions for complex portfolios.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Business Electricity", 
                description: "Multi-site electricity procurement with volume aggregation and portfolio-level benefits.",
                link: "/business-electricity",
                icon: <Zap className="h-8 w-8" />
              },
              { 
                title: "Business Gas", 
                description: "Portfolio gas contracts with central billing and site-by-site optimization.",
                link: "/business-gas",
                icon: <Building2 className="h-8 w-8" />
              },
              { 
                title: "Renewable Energy", 
                description: "Portfolio-wide renewable energy procurement including corporate PPAs and green certificates.",
                link: "/renewable-energy",
                icon: <Globe className="h-8 w-8" />
              },
              { 
                title: "Energy Auditing", 
                description: "Comprehensive multi-site energy audits with benchmarking and optimization strategies.",
                link: "/energy-auditing",
                icon: <BarChart3 className="h-8 w-8" />
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
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default MultiSiteEnergy