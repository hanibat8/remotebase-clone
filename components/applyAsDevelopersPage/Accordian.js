import React,{useState} from 'react'
import { AccordionContent } from './AccordionData';

const Accordian = () => {

  const [isClicked, setIsClicked] = useState(null);
    const revealAnswer = index => {
        if (isClicked === index) {
            return setIsClicked(null);
        }
        setIsClicked(index);
    }

    const toggleBtn = (index) => {
        if (isClicked === index) {
             return  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
           </svg>
           
        } else {
            return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          
        }
    }
            
    const screenReaderInstructions = (trivia, index) => {
        
        if(AccordionContent.length - 2 === index && index === isClicked){
           return trivia.answer + "... Press tab to hear the final question.";
        }

        else if(isClicked === index) {
            return trivia.answer + "... Press tab to hear the next question."
        }
        
        else {
            return trivia.question + "... Press enter to reveal the answer."
        }
    }      

    const accordionClosed = "hidden rounded-2xl overflow-y-hidden max-w-6xl leading-snug opacity-0"
    const accordionOpen = "block max-h-[400px] overflow-y-visible opacity-100 mr-auto"

  return (
    <>
    {
      AccordionContent.map((trivia, index) => (
          <div key={trivia.question} className='flex flex-col px-5 py-2  my-5  gap-x-5 border-t-2 border-gray-300'>
              <div  onClick={() => revealAnswer(index)} className='flex transition-all items-center justify-between w-full py-5 cursor-pointer'>
                  <h3 className='font-medium text-2xl text-accordion-question leading-relaxed font-nunito w-full text-left pr-5'>
                     <span className='mr-4'>{'0'}{index+1}</span>{trivia.question}
                  </h3>
                  <button
                     className=''
                     id={trivia.headingID}
                     aria-label={screenReaderInstructions(trivia, index)} 
                     aria-expanded={isClicked === index ? 'true' : false}
                     aria-controls={trivia.answerID}>{toggleBtn(index)}</button>
                  
              </div>

              {
                  <section 
                    id={trivia.answerID}
                    aria-labelledby={trivia.headingID}
                    className={isClicked === index ? accordionClosed && accordionOpen : accordionClosed}>
                    <p className='font-normal text-lg'>{trivia.answer}</p>
                  </section>
              }

          </div>
      ))}
</>
  )
}

export default Accordian