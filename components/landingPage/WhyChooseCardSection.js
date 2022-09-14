import React from 'react'

const WhyChooseCardSection = ({title,content}) => {
  return (
    <div className=''>
        <h4 className='mt-4 font-semibold text-base mb-6'>{title}</h4>
        <p className='text-sm leading-relaxed'>
            {content}
        </p>
    </div>
  )
}

export default WhyChooseCardSection