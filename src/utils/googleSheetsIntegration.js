import axios from 'axios'

const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'

export const submitToGoogleSheets = async (formData) => {
  try {
    const dataToSubmit = {
      timestamp: new Date().toISOString(),
      businessName: formData.businessName,
      contactName: formData.contactName,
      email: formData.email,
      phone: formData.phone,
      postcode: formData.postcode,
      currentSupplier: formData.currentSupplier || 'Not specified',
      annualSpend: formData.annualSpend || 'Not specified',
      contractEndDate: formData.contractEndDate || 'Not specified',
      serviceType: formData.serviceType,
      numberOfSites: formData.numberOfSites,
      message: formData.message || '',
      source: 'Watt Energy Solutions Website',
      pageUrl: window.location.href
    }

    const response = await axios.post(GOOGLE_SCRIPT_URL, dataToSubmit, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000
    })

    if (response.data && response.data.result === 'success') {
      return { success: true, message: 'Form submitted successfully' }
    } else {
      throw new Error('Submission failed')
    }
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error)
    return { 
      success: false, 
      message: 'There was an error submitting your form. Please try again or call us directly.' 
    }
  }
}

export const validatePostcode = (postcode) => {
  const postcodeRegex = /^[A-Z]{1,2}[0-9]{1,2}[A-Z]?\s?[0-9][A-Z]{2}$/i
  return postcodeRegex.test(postcode.trim())
}

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePhone = (phone) => {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/
  const cleanedPhone = phone.replace(/\D/g, '')
  return phoneRegex.test(phone) && cleanedPhone.length >= 10 && cleanedPhone.length <= 15
}