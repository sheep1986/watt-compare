import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Building2, MapPin, Zap, TrendingUp, Loader2, 
  Check, ArrowRight, Info, Calculator
} from 'lucide-react'

const QuoteForm = () => {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    businessName: '',
    postcode: '',
    currentSpend: '',
    contractEnd: '',
    email: '',
    phone: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setStep(4) // Success state
    }, 2000)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const nextStep = () => {
    // After step 1 (business name and postcode), redirect to external app
    if (step === 1 && formData.businessName && formData.postcode) {
      // Encode the data to pass as URL parameters
      const params = new URLSearchParams({
        businessName: formData.businessName,
        postcode: formData.postcode
      })
      // Redirect to the external app with the form data
      window.location.href = `https://app.watt.co.uk/company?${params.toString()}`
      return
    }
    if (step < 3) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const steps = [
    { number: 1, title: 'Business Info', icon: Building2 },
    { number: 2, title: 'Energy Usage', icon: Zap },
    { number: 3, title: 'Contact', icon: MapPin }
  ]

  return (
    <div className="relative">
      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((s, index) => (
          <div key={s.number} className="flex items-center flex-1">
            <div className="flex items-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ 
                  scale: step >= s.number ? 1 : 0.8, 
                  opacity: step >= s.number ? 1 : 0.5 
                }}
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all
                  ${step >= s.number 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg' 
                    : 'bg-gray-200 text-gray-500'}
                `}
              >
                {step > s.number ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <s.icon className="h-5 w-5" />
                )}
              </motion.div>
              <span className={`ml-2 text-sm font-medium hidden sm:block ${
                step >= s.number ? 'text-gray-900' : 'text-gray-400'
              }`}>
                {s.title}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 mx-4">
                <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: step > s.number ? '100%' : '0%' }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-600"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                  placeholder="Your Company Ltd"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Postcode
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                    placeholder="SW1A 1AA"
                  />
                </div>
              </div>

              <button
                onClick={nextStep}
                disabled={!formData.businessName || !formData.postcode}
                className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Monthly Spend
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3.5 text-gray-500">£</span>
                  <input
                    type="text"
                    name="currentSpend"
                    value={formData.currentSpend}
                    onChange={handleInputChange}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                    placeholder="1,500"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Approximate monthly energy bill</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contract End Date
                </label>
                <input
                  type="date"
                  name="contractEnd"
                  value={formData.contractEnd}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                />
                <p className="text-xs text-gray-500 mt-1">When does your current contract end?</p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={prevStep}
                  className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Continue
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                  placeholder="07123 456789"
                />
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-start gap-2">
                <Info className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-green-800">
                  We'll instantly compare prices and email your personalized savings report
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={prevStep}
                  className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Comparing...
                    </>
                  ) : (
                    <>
                      <Calculator className="h-5 w-5" />
                      Get Comparison
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Check className="h-10 w-10 text-white" />
            </motion.div>
            
            <h3 className="text-2xl font-bold mb-2">Comparison Complete!</h3>
            <p className="text-gray-600 mb-6">
              We've found <span className="font-semibold text-green-600">12 better deals</span> for your business
            </p>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 mb-6">
              <div className="text-3xl font-bold text-green-600 mb-1">
                Save up to £2,340/year
              </div>
              <p className="text-sm text-gray-600">Based on your current usage</p>
            </div>

            <p className="text-sm text-gray-500">
              Check your email for the full comparison report
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default QuoteForm