import React from 'react'

const Logo = ({ className = "h-12" }) => {
  return (
    <img 
      src="/watt-logo-new.png" 
      alt="Watt Compare" 
      className={`${className} w-auto object-contain`}
    />
  )
}

export default Logo