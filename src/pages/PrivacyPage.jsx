import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Lock, Shield, Eye, Database, UserCheck, Mail, Phone, MapPin, FileText } from 'lucide-react'

const PrivacyPage = () => {
  const lastUpdated = '1st January 2024'
  
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Watt Compare - Data Protection & GDPR</title>
        <meta name="description" content="Privacy Policy for Watt Compare. Learn how we collect, use, and protect your personal and business data in compliance with GDPR." />
        <link rel="canonical" href="https://wattcompare.co.uk/privacy" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">
              Your data protection is our priority | Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            
            {/* Quick Summary */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-blue-600" />
                Quick Summary
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  We only collect data necessary to provide our energy comparison service
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  Your data is never sold to third parties
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  We comply fully with GDPR and UK data protection laws
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  You have full control over your data and can request deletion at any time
                </li>
              </ul>
            </div>

            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Watt Compare ("we", "our", "us") is committed to protecting your privacy and personal data. 
                    This Privacy Policy explains how we collect, use, store, and protect information when you use 
                    our business energy comparison service.
                  </p>
                  <p>
                    We are registered as a data controller with the Information Commissioner's Office (ICO). Our registered office is at St Ann's House, 3rd Floor, St Ann's Square, Manchester, M2 7LP.
                  </p>
                </div>
              </div>

              {/* What We Collect */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Database className="h-6 w-6 text-green-600" />
                  2. Information We Collect
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">2.1 Information You Provide</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Business name and registration details</li>
                      <li>Contact information (name, email, phone number)</li>
                      <li>Business address and postcode</li>
                      <li>Current energy usage and supplier information</li>
                      <li>Meter numbers (MPAN/MPRN)</li>
                      <li>Contract end dates and renewal information</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">2.2 Information We Collect Automatically</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>IP address and browser information</li>
                      <li>Device type and operating system</li>
                      <li>Pages visited and time spent on our site</li>
                      <li>Referral source (how you found us)</li>
                      <li>Cookie data (with your consent)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Data */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Eye className="h-6 w-6 text-green-600" />
                  3. How We Use Your Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">3.1 Primary Purposes</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>To provide energy price comparisons</li>
                      <li>To facilitate switching to new energy suppliers</li>
                      <li>To communicate quotes and recommendations</li>
                      <li>To manage your account and preferences</li>
                      <li>To provide customer support</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">3.2 Legal Basis for Processing</h3>
                    <p className="text-gray-700 mb-3">We process your data based on:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Contract:</strong> To provide our services to you</li>
                      <li><strong>Legitimate Interest:</strong> To improve our services and prevent fraud</li>
                      <li><strong>Consent:</strong> For marketing communications (where applicable)</li>
                      <li><strong>Legal Obligation:</strong> To comply with regulatory requirements</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Sharing */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">4. Who We Share Your Data With</h2>
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-gray-700 font-semibold mb-2">We NEVER sell your data</p>
                    <p className="text-gray-700">
                      Your information is only shared when necessary to provide our service
                    </p>
                  </div>
                  
                  <div className="space-y-3 text-gray-700">
                    <h3 className="text-xl font-semibold">We may share data with:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Energy Suppliers:</strong> To obtain quotes and facilitate switches</li>
                      <li><strong>Service Providers:</strong> Who help us operate our platform (e.g., hosting, analytics)</li>
                      <li><strong>Regulatory Bodies:</strong> When required by law</li>
                      <li><strong>Professional Advisors:</strong> Such as lawyers or accountants when necessary</li>
                    </ul>
                  </div>
                  
                  <p className="text-gray-700">
                    All third parties are contractually obligated to protect your data and use it only for 
                    the specified purposes.
                  </p>
                </div>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-green-600" />
                  5. How We Protect Your Data
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We implement industry-standard security measures to protect your data:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>SSL encryption for all data transfers</li>
                    <li>Secure servers with regular security updates</li>
                    <li>Access controls and authentication measures</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Staff training on data protection</li>
                    <li>Incident response procedures</li>
                  </ul>
                </div>
              </div>

              {/* Data Retention */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">6. How Long We Keep Your Data</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We retain your data only as long as necessary:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Active customers:</strong> Throughout your relationship with us</li>
                    <li><strong>Quotes:</strong> 12 months from quote date</li>
                    <li><strong>Marketing:</strong> Until you unsubscribe</li>
                    <li><strong>Legal requirements:</strong> As required by law (typically 6 years for financial records)</li>
                  </ul>
                  <p>
                    After these periods, your data is securely deleted or anonymized.
                  </p>
                </div>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <UserCheck className="h-6 w-6 text-green-600" />
                  7. Your Rights
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Under GDPR and UK data protection law, you have the following rights:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Right to Access</h4>
                      <p className="text-sm text-gray-600">Request a copy of your personal data</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Right to Rectification</h4>
                      <p className="text-sm text-gray-600">Correct inaccurate or incomplete data</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Right to Erasure</h4>
                      <p className="text-sm text-gray-600">Request deletion of your data</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Right to Portability</h4>
                      <p className="text-sm text-gray-600">Receive your data in a portable format</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Right to Object</h4>
                      <p className="text-sm text-gray-600">Object to certain types of processing</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Right to Restrict</h4>
                      <p className="text-sm text-gray-600">Limit how we use your data</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    To exercise any of these rights, contact our Data Protection Officer at 
                    <a href="mailto:dpo@wattcompare.co.uk" className="text-green-600 hover:text-green-700 ml-1">
                      dpo@wattcompare.co.uk
                    </a>
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">8. Cookies</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We use cookies to improve your experience on our website. These include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Essential cookies:</strong> Required for the website to function</li>
                    <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site</li>
                    <li><strong>Marketing cookies:</strong> Used to show relevant ads (with consent)</li>
                  </ul>
                  <p>
                    You can control cookies through your browser settings or our cookie preference center.
                  </p>
                </div>
              </div>

              {/* International Transfers */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">9. International Data Transfers</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Your data is primarily stored in the UK. If we transfer data outside the UK/EEA, we ensure:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The country has adequate data protection laws</li>
                    <li>Appropriate safeguards are in place (e.g., Standard Contractual Clauses)</li>
                    <li>Your rights remain protected</li>
                  </ul>
                </div>
              </div>

              {/* Children's Privacy */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">10. Children's Privacy</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Our service is for businesses only. We do not knowingly collect data from individuals 
                    under 18 years of age. If we become aware of such collection, we will delete the data immediately.
                  </p>
                </div>
              </div>

              {/* Updates */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">11. Changes to This Policy</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of significant 
                    changes by email or through our website. The "last updated" date at the top shows the 
                    most recent revision.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    For any questions about this Privacy Policy or your data:
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold mb-2">Data Protection Officer</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-green-600" />
                          <span className="text-gray-700">dpo@wattcompare.co.uk</span>
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
                    
                    <div className="pt-4 border-t">
                      <p className="font-semibold mb-2">Supervisory Authority</p>
                      <p className="text-gray-700">
                        You have the right to lodge a complaint with the Information Commissioner's Office (ICO):
                      </p>
                      <a href="https://ico.org.uk" className="text-green-600 hover:text-green-700">
                        www.ico.org.uk
                      </a>
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
            <h2 className="text-2xl font-bold mb-8 text-center">Related Documents</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/terms" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <FileText className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="font-semibold mb-2">Terms of Service</h3>
                <p className="text-sm text-gray-600">Our terms and conditions</p>
              </Link>
              <Link to="/complaints" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <Shield className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="font-semibold mb-2">Complaints Procedure</h3>
                <p className="text-sm text-gray-600">How to raise concerns</p>
              </Link>
              <Link to="/faq" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <UserCheck className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="font-semibold mb-2">FAQ</h3>
                <p className="text-sm text-gray-600">Common questions answered</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PrivacyPage