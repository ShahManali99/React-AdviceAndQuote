import React, { useEffect, useState } from 'react'
import twitter_icon from '../assets/twitter.png'
import './QuoteComponent.css'

const QuoteComponent = ({loading, setLoading, getQuote, quote, author}) => {

    const handleTwitterBtn = () => {
      window.open(`https://x.com/intent/post?text=${quote} - ${author}`)
    }

  return (
    <>
      <div className='card'>
        <h1 className='heading'>{loading?'Loading...':quote}</h1>
        <h2 className="author">-{author}</h2>
          <div className='line'></div>
            <div className='bottom'>
              <button className='button' onClick={getQuote}><span>Get Quote!</span></button>
              <div className="icons">
                <img src={twitter_icon} onClick={handleTwitterBtn}/>
              </div>
          </div>
      </div>
    </>
  )
}

export default QuoteComponent