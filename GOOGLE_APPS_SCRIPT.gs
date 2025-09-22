// Google Apps Script for Watt Energy Solutions
// Deploy this script as a Web App and update the URL in googleSheetsIntegration.js

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
    const data = JSON.parse(e.postData.contents)
    
    // Add headers if this is the first row
    if (sheet.getLastRow() === 0) {
      const headers = [
        'Timestamp',
        'Business Name',
        'Contact Name',
        'Email',
        'Phone',
        'Postcode',
        'Current Supplier',
        'Annual Spend',
        'Contract End Date',
        'Service Type',
        'Number of Sites',
        'Message',
        'Source',
        'Page URL'
      ]
      sheet.getRange(1, 1, 1, headers.length).setValues([headers])
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold')
    }
    
    // Add the new row of data
    const row = [
      data.timestamp,
      data.businessName,
      data.contactName,
      data.email,
      data.phone,
      data.postcode,
      data.currentSupplier,
      data.annualSpend,
      data.contractEndDate,
      data.serviceType,
      data.numberOfSites,
      data.message,
      data.source,
      data.pageUrl
    ]
    
    sheet.appendRow(row)
    
    // Send email notification
    sendEmailNotification(data)
    
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success', row: sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON)
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
  }
}

function sendEmailNotification(data) {
  const recipient = 'info@watt-energy-solutions.co.uk' // Change this to your email
  const subject = `New Quote Request: ${data.businessName}`
  
  const emailBody = `
    New quote request received from Watt Energy Solutions website:
    
    Business Details:
    - Business Name: ${data.businessName}
    - Contact Name: ${data.contactName}
    - Email: ${data.email}
    - Phone: ${data.phone}
    - Postcode: ${data.postcode}
    
    Service Requirements:
    - Service Type: ${data.serviceType}
    - Current Supplier: ${data.currentSupplier}
    - Annual Spend: ${data.annualSpend}
    - Contract End Date: ${data.contractEndDate}
    - Number of Sites: ${data.numberOfSites}
    
    Additional Information:
    ${data.message}
    
    Submitted: ${data.timestamp}
    Source: ${data.pageUrl}
  `
  
  try {
    MailApp.sendEmail(recipient, subject, emailBody)
  } catch (error) {
    console.error('Error sending email:', error)
  }
}

function doGet() {
  return ContentService
    .createTextOutput('Watt Energy Solutions Form Handler Active')
    .setMimeType(ContentService.MimeType.TEXT)
}