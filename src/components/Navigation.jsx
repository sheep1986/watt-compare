import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, Mail, Search } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setServicesOpen(false)
  }, [location])

  const services = [
    { name: 'Compare Electricity', path: '/business-electricity' },
    { name: 'Compare Gas', path: '/business-gas' },
    { name: 'Compare Water', path: '/water-services' },
    { name: 'Compare Telecoms', path: '/telecoms-services' },
    { name: 'Green Energy Comparison', path: '/renewable-energy' },
    { name: 'Multi-Site Comparison', path: '/multi-site-energy' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white/80 backdrop-blur-md'
    }`}>
      <div className="section-padding">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-56 glass-card rounded-xl overflow-hidden"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/case-studies" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Case Studies
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:01618338661" className="flex items-center space-x-2 text-primary-600 hover:text-primary-700">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">0161 833 8661</span>
            </a>
            <a href="https://app.watt.co.uk/company" className="btn-primary">
              Start Comparing
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="section-padding py-4 space-y-4">
              <Link to="/" className="block py-2 text-gray-700 hover:text-primary-600 font-medium">
                Home
              </Link>
              <Link to="/about" className="block py-2 text-gray-700 hover:text-primary-600 font-medium">
                About
              </Link>
              <div className="space-y-2">
                <p className="font-semibold text-gray-900">Services</p>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block pl-4 py-2 text-gray-700 hover:text-primary-600"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <Link to="/case-studies" className="block py-2 text-gray-700 hover:text-primary-600 font-medium">
                Case Studies
              </Link>
              <Link to="/contact" className="block py-2 text-gray-700 hover:text-primary-600 font-medium">
                Contact
              </Link>
              <div className="pt-4 border-t space-y-4">
                <a href="tel:01618338661" className="flex items-center space-x-2 text-primary-600">
                  <Phone className="h-5 w-5" />
                  <span className="font-semibold">0161 833 8661</span>
                </a>
                <a href="https://app.watt.co.uk/company" className="btn-primary block text-center">
                  Start Comparing
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation