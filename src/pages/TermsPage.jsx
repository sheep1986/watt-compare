import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Shield, FileText, AlertCircle, CheckCircle, Clock, Mail, Phone, MapPin } from 'lucide-react'

const TermsPage = () => {
  const lastUpdated = '1st January 2024'
  
  return (
    <>
      <Helmet>
        <title>Terms of Service | Watt Compare - Business Energy Comparison</title>
        <meta name="description" content="Terms of Service for Watt Compare business energy comparison services. Read our terms and conditions for using our energy switching platform." />
        <link rel="canonical" href="https://wattcompare.co.uk/terms" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-600">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-green-600" />
                  1. Introduction
                </h2>
                <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                  <p className="text-gray-700">
                    Welcome to Watt Compare. These Terms of Service ("Terms") govern your use of our website and services. 
                    By accessing or using our services, you agree to be bound by these Terms.
                  </p>
                  <p className="text-gray-700">
                    Watt Compare is a trading name of Watt Utilities Limited, registered in England and Wales 
                    (Company Number: 06702949). Our registered office is at St Ann's House, 3rd Floor, St Ann's Square, Manchester, M2 7LP.
                  </p>
                </div>
              </div>

              {/* Service Description */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Watt Compare provides a free energy price comparison service for businesses. We help you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Compare business energy tariffs from multiple suppliers</li>
                    <li>Find the best deals for electricity and gas</li>
                    <li>Switch energy suppliers seamlessly</li>
                    <li>Access energy market insights and advice</li>
                    <li>Manage multi-site energy portfolios</li>
                  </ul>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                    <p className="text-sm text-blue-800">
                      <AlertCircle className="inline h-4 w-4 mr-2" />
                      We act as an independent intermediary and are not tied to any specific energy supplier.
                    </p>
                  </div>
                </div>
              </div>

              {/* Use of Service */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">3. Use of Our Service</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">3.1 Eligibility</h3>
                  <p className="text-gray-700">
                    Our services are available only to businesses and commercial entities in the United Kingdom. 
                    You must be authorized to enter into contracts on behalf of your business.
                  </p>
                  
                  <h3 className="text-xl font-semibold">3.2 Accurate Information</h3>
                  <p className="text-gray-700">
                    You agree to provide accurate, current, and complete information when using our service. 
                    Inaccurate information may result in incorrect quotes and recommendations.
                  </p>
                  
                  <h3 className="text-xl font-semibold">3.3 Prohibited Uses</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Use our service for any unlawful purpose</li>
                    <li>Impersonate any person or entity</li>
                    <li>Interfere with or disrupt our services</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Use automated systems to access our service without permission</li>
                  </ul>
                </div>
              </div>

              {/* How We Make Money */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">4. How We Make Money</h2>
                <div className="bg-green-50 rounded-lg p-6 space-y-4">
                  <p className="text-gray-700">
                    <CheckCircle className="inline h-5 w-5 text-green-600 mr-2" />
                    Our service is completely free to you. We receive commission from energy suppliers when you 
                    switch through our platform. This doesn't affect the prices you pay - you get the same rates 
                    as going direct to the supplier.
                  </p>
                  <p className="text-gray-700">
                    The commission we receive doesn't influence our recommendations. We show you the best available 
                    deals based on your requirements, regardless of our commercial arrangements.
                  </p>
                </div>
              </div>

              {/* Data Protection */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">5. Data Protection</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    We take the protection of your data seriously. Our use of your personal and business information 
                    is governed by our <Link to="/privacy" className="text-green-600 hover:text-green-700">Privacy Policy</Link>.
                  </p>
                  <p className="text-gray-700">
                    By using our service, you consent to us sharing your information with energy suppliers for the 
                    purpose of obtaining quotes and facilitating switches.
                  </p>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    All content on our website, including text, graphics, logos, and software, is the property of 
                    Watt Compare or our licensors and is protected by intellectual property laws.
                  </p>
                  <p className="text-gray-700">
                    You may not reproduce, distribute, or create derivative works from our content without our 
                    express written permission.
                  </p>
                </div>
              </div>

              {/* Disclaimers */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">7. Disclaimers and Limitations</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">7.1 Accuracy of Information</h3>
                  <p className="text-gray-700">
                    While we strive to provide accurate and up-to-date information, energy prices and availability 
                    can change rapidly. We cannot guarantee that all information is current at the time of viewing.
                  </p>
                  
                  <h3 className="text-xl font-semibold">7.2 Third-Party Services</h3>
                  <p className="text-gray-700">
                    We facilitate introductions to energy suppliers but are not responsible for their services, 
                    pricing, or contract terms. Your contract is directly with the chosen supplier.
                  </p>
                  
                  <h3 className="text-xl font-semibold">7.3 Limitation of Liability</h3>
                  <p className="text-gray-700">
                    To the maximum extent permitted by law, Watt Compare shall not be liable for any indirect, 
                    incidental, special, or consequential damages arising from your use of our service.
                  </p>
                </div>
              </div>

              {/* Indemnification */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">8. Indemnification</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    You agree to indemnify and hold harmless Watt Compare, its officers, directors, employees, 
                    and agents from any claims, damages, or expenses arising from your use of our service or 
                    violation of these Terms.
                  </p>
                </div>
              </div>

              {/* Changes to Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    We reserve the right to modify these Terms at any time. Changes will be effective immediately 
                    upon posting on our website. Your continued use of our service constitutes acceptance of the 
                    modified Terms.
                  </p>
                </div>
              </div>

              {/* Termination */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    We may terminate or suspend your access to our service at any time, without prior notice, 
                    for any reason, including breach of these Terms.
                  </p>
                </div>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    These Terms are governed by and construed in accordance with the laws of England and Wales. 
                    Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the 
                    courts of England and Wales.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">legal@wattcompare.co.uk</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">0161 833 8661</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">St Ann's House, 3rd Floor, St Ann's Square, Manchester, M2 7LP</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-gray-50">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Related Legal Documents</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/privacy" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <Shield className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="font-semibold mb-2">Privacy Policy</h3>
                <p className="text-sm text-gray-600">Learn how we protect and use your data</p>
              </Link>
              <Link to="/complaints" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <AlertCircle className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="font-semibold mb-2">Complaints Procedure</h3>
                <p className="text-sm text-gray-600">How to raise concerns about our service</p>
              </Link>
              <Link to="/faq" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <FileText className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="font-semibold mb-2">FAQ</h3>
                <p className="text-sm text-gray-600">Common questions about our services</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TermsPage