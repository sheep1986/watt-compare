import React from 'react'
import { Link } from 'react-router-dom'
import { Search, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="bg-primary-700">
        <div className="section-padding py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Never Miss a Better Deal
            </h3>
            <p className="text-primary-100 mb-6">
              Get instant alerts when prices drop and exclusive comparison insights delivered weekly
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-400"
              />
              <button type="submit" className="btn-primary bg-accent-500 hover:bg-accent-600">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src="/watt-logo-white-actual.png" 
                alt="Watt Compare" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm mb-6">
              The UK's smartest business energy comparison platform. 
              Compare deals from 35+ suppliers instantly and switch in minutes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-white mb-6">Compare Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/business-electricity" className="hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Compare Electricity
                </Link>
              </li>
              <li>
                <Link to="/business-gas" className="hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Compare Gas
                </Link>
              </li>
              <li>
                <Link to="/water-services" className="hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Compare Water
                </Link>
              </li>
              <li>
                <Link to="/telecoms-services" className="hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Compare Telecoms
                </Link>
              </li>
              <li>
                <Link to="/renewable-energy" className="hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Green Energy Comparison
                </Link>
              </li>
              <li>
                <Link to="/energy-auditing" className="hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Energy Auditing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display font-bold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/energy-market-insights" className="hover:text-primary-400 transition-colors">
                  Market Insights
                </Link>
              </li>
              <li>
                <Link to="/energy-saving-guide" className="hover:text-primary-400 transition-colors">
                  Energy Saving Guide
                </Link>
              </li>
              <li>
                <Link to="/switching-guide" className="hover:text-primary-400 transition-colors">
                  Switching Guide
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-primary-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/bill-validation" className="hover:text-primary-400 transition-colors">
                  Bill Validation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary-400 mt-1" />
                <div>
                  <p className="font-semibold text-white">0161 833 8661</p>
                  <p className="text-sm">Mon-Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary-400 mt-1" />
                <div>
                  <a href="mailto:compare@wattcompare.co.uk" className="hover:text-primary-400 transition-colors">
                    compare@wattcompare.co.uk
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-1" />
                <div>
                  <p>St Ann's House, 3rd Floor</p>
                  <p>St Ann's Square, Manchester, M2 7LP</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="section-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {currentYear} Watt Compare. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              <Link to="/terms" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/complaints" className="hover:text-primary-400 transition-colors">
                Complaints Procedure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer