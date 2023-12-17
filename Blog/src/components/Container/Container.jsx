import React from 'react'

function Container({children}) {
  return <div className='container mx-auto px-3 sm:px-4 lg:px-8'>{children}</div>;
  
}

export default Container