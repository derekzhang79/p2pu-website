import React from 'react'
import ReactDOM from 'react-dom'
import TextCarousel from 'react-text-carousel'

const HeaderTextCarousel = () => {
  var phrases = [
    'Master public speaking',
    'Build a website',
    'Start writing fiction',
    'Perfect your resume',
    'Hone your interview skills',
    'Write a business plan',
    'Prep for a citizenship exam',
    'Speak English with confidence',
    'Design an online course',
    'Become a better writer',
  ]

  const typistProps = {
    avgTypingDelay: 70,
    cursor: {
      hideWhenDone: true,
      hideWhenDoneDelay: 400
    }
  }
  return (
    <h1 className="bold centered">
      <TextCarousel phrases={ phrases } typistProps={ typistProps } />
      <span>in your neighbourhood, for free. </span>
    </h1>
  );
}

export default HeaderTextCarousel
