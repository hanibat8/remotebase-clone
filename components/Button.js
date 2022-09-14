import React from 'react'

const Button = ({title,bg,color,border,p,px,hoverBg}) => {
  return (
    <button className={`transition ease-in-out rounded-full hover:bg-[#3c65fe]
     ${p} ${px} ${bg} ${color} border ${border}`}>   
        {title}
    </button>
  )
}

export default Button