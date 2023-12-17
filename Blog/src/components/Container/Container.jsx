import React from 'react'

function Container({children}) {
  return <div className='container mx-auto px-2 sm:px-4 lg:px-8'>{children}</div>;
  
}

export default Container