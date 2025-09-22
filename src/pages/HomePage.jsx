import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Zap, TrendingUp, Shield, Users, ArrowRight, Check, 
  Phone, Star, Award, BarChart3, Clock, Sparkles,
  Building2, PiggyBank, Leaf, ChevronDown, Calculator,
  Globe, Target, Battery, Lightbulb, DollarSign
} from 'lucide-react'
import QuoteForm from '../components/QuoteForm'

const HomePage = () => {
  const [savings, setSavings] = useState(0)
  const [suppliers, setSuppliers] = useState(0)
  const [customers, setCustomers] = useState(0)
  const [switchTime, setSwitchTime] = useState(0)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])

  useEffect(() => {
    // Animated counters
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setSavings(prev => prev < 4500 ? prev + 150 : 4500)
        setSuppliers(prev => prev < 35 ? prev + 1 : 35)
        setCustomers(prev => prev < 15000 ? prev + 500 : 15000)
        setSwitchTime(prev => prev < 60 ? prev + 2 : 60)
      }, 50)
      return () => clearInterval(interval)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const features = [
    {
      icon: Calculator,
      title: 'Smart Comparison Engine',
      description: 'AI-powered algorithm compares 35+ suppliers instantly',
      gradient: 'from-green-400 to-emerald-600',
      delay: 0.1
    },
    {
      icon: Clock,
      title: '60-Second Results',
      description: 'Get comprehensive comparison results in under a minute',
      gradient: 'from-emerald-400 to-green-600',
      delay: 0.2
    },
    {
      icon: PiggyBank,
      title: 'Save up to £4,500/year',
      description: 'Average business saves thousands on their energy bills',
      gradient: 'from-green-500 to-emerald-500',
      delay: 0.3
    },
    {
      icon: Shield,
      title: 'Zero Hidden Fees',
      description: 'Complete transparency with no broker fees or hidden costs',
      gradient: 'from-emerald-500 to-green-500',
      delay: 0.4
    }
  ]

  const supplierLogos = [
    { name: 'British Gas', image: '/supplier-logos/british-gas.png' },
    { name: 'EDF Energy', image: '/supplier-logos/edf.png' },
    { name: 'E.ON', image: '/supplier-logos/eon-next.png' },
    { name: 'Scottish Power', image: '/supplier-logos/scottish-power.png' },
    { name: 'Octopus Energy', image: '/supplier-logos/opus.png' },
    { name: 'Crown', image: '/supplier-logos/crown.png' },
    { name: 'Drax', image: '/supplier-logos/drax.webp' },
    { name: 'SEFE', image: '/supplier-logos/sefe.png' },
    { name: 'Smartest', image: '/supplier-logos/smartest.png' },
    { name: 'Total', image: '/supplier-logos/total.png' },
    { name: 'Utilita', image: '/supplier-logos/utilita.png' },
    { name: 'Valda', image: '/supplier-logos/valda.png' },
    { name: 'Water Plus', image: '/supplier-logos/water-plus.png' },
    { name: 'YU Energy', image: '/supplier-logos/yu.png' },
    { name: 'Pozitive', image: '/supplier-logos/pozitive.png' },
    { name: 'Everflow', image: '/supplier-logos/everflow.webp' }
  ]

  const testimonials = [
    {
      name: 'James Mitchell',
      company: 'Tech Solutions Ltd',
      rating: 5,
      text: 'Saved £3,200 on our annual energy bill. The comparison was instant and switching was seamless.',
      savings: '£3,200/year'
    },
    {
      name: 'Sarah Chen',
      company: 'Retail Group UK',
      rating: 5,
      text: 'Best energy comparison service we\'ve used. Found us a green energy deal that actually costs less!',
      savings: '£4,100/year'
    },
    {
      name: 'Michael Brown',
      company: 'Manufacturing Co',
      rating: 5,
      text: 'The AI comparison found savings we didn\'t know existed. Switched 5 sites in one go.',
      savings: '£8,500/year'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Watt Compare - UK's Smartest Business Energy Comparison | Save up to £4,500</title>
        <meta name="description" content="Compare business energy prices from 35+ UK suppliers instantly. Save up to £4,500/year with our AI-powered comparison engine. Get results in 60 seconds." />
      </Helmet>

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50" />
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-20 left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-40 right-20 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-200"
        />
        <motion.div 
          style={{ y: y1 }}
          className="absolute bottom-20 left-1/2 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-400"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
        <div className="section-padding w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ opacity }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6"
              >
                <Sparkles className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-800">AI-Powered Comparison</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold mb-6"
              >
                Save up to{' '}
                <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                  £{savings.toLocaleString()}
                </span>
                <br />on Business Energy
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 mb-8"
              >
                Compare {suppliers}+ UK energy suppliers in {switchTime} seconds. 
                Join {customers.toLocaleString()}+ businesses saving with smart switching.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <a href="https://app.watt.co.uk/company" className="group">
                  <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold text-lg shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                    <Zap className="h-5 w-5" />
                    Start Comparing
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
                <button className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-gray-200 rounded-xl font-semibold text-lg hover:border-green-500 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5 text-green-600" />
                  <span>0161 833 8661</span>
                </button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-6 flex-wrap"
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 font-semibold">4.9/5</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-600">FCA Regulated</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-600">Award Winning</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Quote Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600 rounded-3xl blur-3xl opacity-20" />
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold mb-2">Get Instant Comparison</h2>
                  <p className="text-gray-600">Takes less than 60 seconds</p>
                </div>
                <QuoteForm />
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="h-8 w-8 text-gray-400 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                Watt Compare?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The UK's most advanced energy comparison platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:border-green-200 transition-all duration-300">
                  <div className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/10" />
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/10 rounded-full"
          />
        </div>

        <div className="section-padding relative">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'Active Suppliers', value: suppliers, suffix: '+', icon: Building2 },
              { label: 'Happy Customers', value: customers.toLocaleString(), suffix: '+', icon: Users },
              { label: 'Average Savings', value: `£${savings.toLocaleString()}`, suffix: '/yr', icon: PiggyBank },
              { label: 'Switch Time', value: switchTime, suffix: ' sec', icon: Clock }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 opacity-80" />
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Trusted by{' '}
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                15,000+ Businesses
              </span>
            </h2>
            <p className="text-xl text-gray-600">Real savings from real customers</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{testimonial.savings}</div>
                      <div className="text-xs text-gray-500">saved</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supplier Logos */}
      <section className="py-20 bg-gray-50">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Compare 35+ Top Energy Suppliers</h2>
            <p className="text-gray-600">All major UK suppliers in one comparison</p>
          </motion.div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {[...supplierLogos, ...supplierLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-6"
                >
                  <div className="h-20 w-40 bg-white rounded-lg shadow-md flex items-center justify-center p-4 hover:shadow-lg transition-shadow">
                    <img 
                      src={logo.image} 
                      alt={logo.name}
                      className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-20 bg-gradient-to-br from-green-500 to-emerald-600">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center text-white mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Get Your Free Energy Comparison
              </h2>
              <p className="text-xl text-white/90">
                Takes less than 60 seconds • No obligation • Expert advice
              </p>
            </div>
            <QuoteForm />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
        
        <div className="section-padding relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Start Saving Today
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Join thousands of UK businesses cutting their energy costs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.watt.co.uk/company">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold text-lg shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Get Instant Quote
                  <ArrowRight className="h-5 w-5" />
                </button>
              </a>
              <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold text-lg hover:border-green-500 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Schedule Callback
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </>
  )
}

export default HomePage