import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { AlertCircle, Phone, Mail, MapPin, Clock, CheckCircle, FileText, MessageSquare, Users } from 'lucide-react'

const ComplaintsPage = () => {
  const lastUpdated = '1st January 2024'
  
  return (
    <>
      <Helmet>
        <title>Complaints Procedure | Watt Compare - How We Handle Concerns</title>
        <meta name="description" content="Watt Compare complaints procedure. We take all concerns seriously and aim to resolve issues quickly. Learn how to raise a complaint and our resolution process." />
        <link rel="canonical" href="https://wattcompare.co.uk/complaints" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mb-6">
              <AlertCircle className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Complaints Procedure</h1>
            <p className="text-xl text-gray-600">
              We're committed to providing excellent service and resolving any concerns promptly
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            
            {/* Quick Overview */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-12">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                Our Commitment to You
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  We aim to acknowledge all complaints within 24 hours
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  Most complaints are resolved within 5 working days
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  Complex issues are resolved within 8 weeks maximum
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  You can escalate to the Energy Ombudsman if not satisfied
                </li>
              </ul>
            </div>

            <div className="prose prose-lg max-w-none">
              
              {/* How to Complain */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">How to Make a Complaint</h2>
                <p className="text-gray-700 mb-6">
                  We understand that sometimes things don't go as expected. If you're not satisfied with 
                  our service, we want to hear from you so we can put things right.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                    <Phone className="h-8 w-8 text-orange-600 mb-3" />
                    <h3 className="font-semibold mb-2">By Phone</h3>
                    <p className="text-sm text-gray-600 mb-3">Fastest resolution for urgent issues</p>
                    <a href="tel:01618338661" className="text-green-600 hover:text-green-700 font-semibold">
                      0161 833 8661
                    </a>
                    <p className="text-xs text-gray-500 mt-1">Mon-Fri: 9AM-6PM</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                    <Mail className="h-8 w-8 text-orange-600 mb-3" />
                    <h3 className="font-semibold mb-2">By Email</h3>
                    <p className="text-sm text-gray-600 mb-3">Detailed complaint submission</p>
                    <a href="mailto:complaints@wattcompare.co.uk" className="text-green-600 hover:text-green-700 font-semibold">
                      complaints@wattcompare.co.uk
                    </a>
                    <p className="text-xs text-gray-500 mt-1">Response within 24 hours</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                    <MapPin className="h-8 w-8 text-orange-600 mb-3" />
                    <h3 className="font-semibold mb-2">By Post</h3>
                    <p className="text-sm text-gray-600 mb-3">Formal written complaints</p>
                    <p className="text-sm">
                      Complaints Department<br />
                      St Ann's House, 3rd Floor<br />
                      St Ann's Square, Manchester, M2 7LP
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Tip:</strong> When contacting us, please include your account number, 
                    details of your complaint, and how you'd like us to resolve it. This helps us 
                    address your concerns more quickly.
                  </p>
                </div>
              </div>

              {/* Our Process */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Our Complaints Process</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-green-600">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Acknowledgement</h3>
                      <p className="text-gray-700">
                        We'll acknowledge your complaint within 24 hours and provide you with a reference 
                        number. You'll receive confirmation of the details we've recorded and the name of 
                        the person handling your case.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-green-600">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Investigation</h3>
                      <p className="text-gray-700">
                        We'll thoroughly investigate your complaint, which may include reviewing call 
                        recordings, emails, and system records. We may contact you for additional 
                        information if needed.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-green-600">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Resolution</h3>
                      <p className="text-gray-700">
                        We aim to resolve most complaints within 5 working days. We'll contact you with 
                        our findings and proposed resolution. If you're satisfied, we'll implement the 
                        agreed solution immediately.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-green-600">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Final Response</h3>
                      <p className="text-gray-700">
                        If we can't resolve your complaint within 5 days, we'll keep you updated on 
                        progress. We'll issue our final response within 8 weeks, detailing our 
                        investigation findings and any actions taken.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Escalation */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">If You're Not Satisfied</h2>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-3">Internal Escalation</h3>
                  <p className="text-gray-700 mb-3">
                    If you're not happy with our initial response, you can request escalation to a 
                    senior manager. They will review your case independently and provide a fresh perspective.
                  </p>
                  <p className="text-gray-700">
                    Contact our Complaints Manager directly at:{' '}
                    <a href="mailto:complaints.manager@wattcompare.co.uk" className="text-green-600 hover:text-green-700">
                      complaints.manager@wattcompare.co.uk
                    </a>
                  </p>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Energy Ombudsman</h3>
                  <p className="text-gray-700 mb-4">
                    If we haven't resolved your complaint within 8 weeks, or if you're not satisfied 
                    with our final response, you can refer your complaint to the Energy Ombudsman - 
                    a free, independent service.
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <strong>Website:</strong>{' '}
                      <a href="https://www.ombudsman-services.org/energy" className="text-green-600 hover:text-green-700">
                        www.ombudsman-services.org/energy
                      </a>
                    </p>
                    <p className="text-gray-700">
                      <strong>Phone:</strong> 0330 440 1624
                    </p>
                    <p className="text-gray-700">
                      <strong>Email:</strong> enquiry@ombudsman-services.org
                    </p>
                  </div>
                  
                  <p className="text-sm text-gray-600 mt-4">
                    Note: You must contact the Ombudsman within 12 months of our final response.
                  </p>
                </div>
              </div>

              {/* Common Complaints */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Common Complaints & Quick Solutions</h2>
                
                <div className="space-y-4">
                  <details className="bg-white rounded-lg shadow-md">
                    <summary className="p-4 cursor-pointer hover:bg-gray-50 font-semibold">
                      Incorrect information or quotes
                    </summary>
                    <div className="p-4 border-t">
                      <p className="text-gray-700">
                        If you've received incorrect information or quotes, please contact us immediately 
                        with your reference number. We'll review and correct any errors within 24 hours.
                      </p>
                    </div>
                  </details>
                  
                  <details className="bg-white rounded-lg shadow-md">
                    <summary className="p-4 cursor-pointer hover:bg-gray-50 font-semibold">
                      Delays in switching process
                    </summary>
                    <div className="p-4 border-t">
                      <p className="text-gray-700">
                        Switching delays can occur due to various factors. We'll investigate the cause, 
                        liaise with suppliers on your behalf, and provide regular updates until resolved.
                      </p>
                    </div>
                  </details>
                  
                  <details className="bg-white rounded-lg shadow-md">
                    <summary className="p-4 cursor-pointer hover:bg-gray-50 font-semibold">
                      Unexpected charges or fees
                    </summary>
                    <div className="p-4 border-t">
                      <p className="text-gray-700">
                        Our service is completely free. If you've been charged unexpectedly, this may be 
                        from your energy supplier. We'll help investigate and resolve any billing issues.
                      </p>
                    </div>
                  </details>
                  
                  <details className="bg-white rounded-lg shadow-md">
                    <summary className="p-4 cursor-pointer hover:bg-gray-50 font-semibold">
                      Poor customer service
                    </summary>
                    <div className="p-4 border-t">
                      <p className="text-gray-700">
                        We take service quality seriously. Please provide details of your experience, 
                        including date, time, and staff member name if available. We'll review recordings 
                        and take appropriate action.
                      </p>
                    </div>
                  </details>
                </div>
              </div>

              {/* Our Standards */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Our Service Standards</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <Clock className="h-8 w-8 text-green-600 mb-3" />
                    <h3 className="font-semibold mb-2">Response Times</h3>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Initial acknowledgement: 24 hours</li>
                      <li>• Simple complaints: 5 working days</li>
                      <li>• Complex complaints: 8 weeks maximum</li>
                      <li>• Update frequency: Weekly for ongoing cases</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <Users className="h-8 w-8 text-green-600 mb-3" />
                    <h3 className="font-semibold mb-2">Our Promise</h3>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Fair and impartial investigation</li>
                      <li>• Clear communication throughout</li>
                      <li>• Appropriate compensation where justified</li>
                      <li>• Learn from feedback to improve</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Feedback */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Help Us Improve</h2>
                <div className="bg-green-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    Your feedback helps us improve our service. Even if you don't have a complaint, 
                    we welcome suggestions on how we can serve you better.
                  </p>
                  <p className="text-gray-700">
                    Share your feedback at:{' '}
                    <a href="mailto:feedback@wattcompare.co.uk" className="text-green-600 hover:text-green-700">
                      feedback@wattcompare.co.uk
                    </a>
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Contact Our Complaints Team</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">
                        <strong>Phone:</strong> 0161 833 8661 (Option 3 for complaints)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">
                        <strong>Email:</strong> complaints@wattcompare.co.uk
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">
                        <strong>Post:</strong> Complaints Department, St Ann's House, 3rd Floor, St Ann's Square, Manchester, M2 7LP
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">
                        <strong>Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM
                      </span>
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
            <h2 className="text-2xl font-bold mb-8 text-center">Related Information</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/terms" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <FileText className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="font-semibold mb-2">Terms of Service</h3>
                <p className="text-sm text-gray-600">Our terms and conditions</p>
              </Link>
              <Link to="/privacy" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <CheckCircle className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="font-semibold mb-2">Privacy Policy</h3>
                <p className="text-sm text-gray-600">How we protect your data</p>
              </Link>
              <Link to="/faq" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <MessageSquare className="h-8 w-8 text-green-600 mb-3" />
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

export default ComplaintsPage