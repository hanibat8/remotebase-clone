import React from 'react'
import ArrowIcon from '../ArrowIcon'
import CrossArrow from '../CrossArrow'

const Table = () => {
  return (
    <table className="shadow-lg min-w-full bg-white border-collapse rounded-lg">
    <tbody>
        <tr>
      <th className="bg-[#f4f7ff] text-left px-8 py-4 font-normal uppercase"></th>
      <th className="bg-[#E8EEFE] border-2 border-white text-left px-8 py-4 font-normal uppercase">Contact</th>
      <th className="bg-[#d6edfe] border border-white text-left px-8 py-4 font-normal uppercase">TYPICAL EMPLOYMENT</th>
      <th className="bg-[#d6edfe] border border-white text-left px-8 py-4 font-normal uppercase">VIRTUAL PLATFORMS*</th>
    </tr>
    <tr>
      <td className="bg-[#f4f7ff] uppercase px-8 py-4">
        <span className='w-4 h-4 p-3 py-2 mr-2 rounded-full border border-spacing-1 border-violet-400'>1</span>
        <span>TIME TO FIND AN ENGINEER</span>
        </td>
      <td className="bg-[#E8EEFE] border-white text-center border px-8 py-4">0-3 Days</td>
      <td className="bg-[#e4f2fe] border px-8 text-center py-4">1-4 Month</td>
      <td className="bg-[#e4f2fe] border px-8 text-center py-4">1-4 Month</td>
    </tr>
    <tr>
      <td className="bg-[#f4f7ff] uppercase px-8 py-4">
      <span className='w-4 h-4 p-3 py-2 mr-2 rounded-full border border-spacing-1 border-violet-400'>2</span>
       <span>RECRUITING FEE</span>
        </td>
      <td className=" bg-[#E8EEFE] border-white border text-center px-8 py-4">$0</td>
      <td className="bg-[#e4f2fe] border px-8 py-4 text-center">$10-40</td>
      <td className="bg-[#e4f2fe] border px-8 py-4 text-center">$0</td>
    </tr>
    <tr>
      <td className="bg-[#f4f7ff] uppercase px-8 py-4">
      <span className='w-4 h-4 p-3 py-2 mr-2 rounded-full border border-spacing-1 border-violet-400'>3</span>
        <span>QUALITY GUARANTEE</span>
        </td>
      <td className="bg-[#c2e5df] border-white border px-8 py-4">
        <div className='flex justify-center'>
            <ArrowIcon color='#7FF287'/>
        </div>
      </td>
      <td className="bg-[#edc9cf] border px-8 py-4 text-center">
      <div className='flex justify-center'>
        <CrossArrow />
      </div>
      </td>
      <td className="bg-[#edc9cf] border px-8 py-4 text-center">
      <div className='flex justify-center'>
        <CrossArrow />
      </div>
      </td>
    </tr>
    <tr>
      <td className="bg-[#f4f7ff] uppercase px-8 py-4">
      <span className='w-4 h-4 p-3 py-2 mr-2 rounded-full border border-spacing-1 border-violet-400'>4</span>
      <span>FAILURE RATE</span></td>
      <td className="bg-[#E8EEFE] border-white border px-8 py-4 text-center">Very Low</td>
      <td className="bg-[#e4f2fe] border px-8 py-4 text-center">Low</td>
      <td className="bg-[#e4f2fe] border px-8 py-4 text-center">Very High</td>
    </tr>
    <tr>
      <td className="bg-[#f4f7ff] uppercase px-8 py-4">
      <span className='w-4 h-4 p-3 py-2 mr-2 rounded-full border border-spacing-1 border-violet-400'>5</span>
      <span>PRE-SCREENED CANDIDATES</span></td>
      <td className="bg-[#c2e5df] border-white border px-8 py-4">
      <div className='flex justify-center'>
            <ArrowIcon color='#7FF287'/>
        </div>
      </td>
      <td className="bg-[#edc9cf] border px-8 py-4 text-center">
      <div className='flex justify-center'>
        <CrossArrow />
      </div>
      </td>
      <td className="bg-[#edc9cf] border px-8 py-4 text-center">
      <div className='flex justify-center'>
        <CrossArrow />
      </div>
      </td>
    </tr>
    <tr>
      <td className="bg-[#f4f7ff] uppercase px-8 py-4">
      <span className='w-4 h-4 p-3 py-2 mr-2 rounded-full border border-spacing-1 border-violet-400'>6</span>
        <span>TERMINATION COSTS</span></td>
      <td className="bg-[#E8EEFE] border-white border px-8 py-4 text-center">None</td>
      <td className="bg-[#e4f2fe] border px-8 py-4 text-center">Very high</td>
      <td className="bg-[#e4f2fe] border px-8 py-4 text-center">None</td>
    </tr>
        </tbody>
</table>
  )
}

export default Table