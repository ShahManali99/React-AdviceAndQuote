import React, { useEffect } from 'react'

const AdviceComponent = ({loading, advice, getAdvice}) => {

  useEffect(()=>{
    getAdvice()
  })

  return (
    <>
        <div className='card'>
          <h1 className='heading'>{loading?'Loading...':advice}</h1>
          <button className='button' onClick={getAdvice}>
            <span>Get Advice!</span>
          </button>
        </div>
    </>
  )
}

export default AdviceComponent