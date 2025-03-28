import React, { useEffect, useState } from 'react'
import { fetchAdvice } from '../Api'

const AdviceComponent = ({loading, setLoading}) => {
    const [advice, setAdvice] = useState('')
    const [trigger, setTrigger] = useState(false)

    useEffect(()=>{
        const getAdvice = async()=> {
          try {
            const res = await fetchAdvice();
            console.log(res.slip.advice)
            setAdvice(res.slip.advice);
          } catch(err) {
            console.log(err);
          } finally {
            {setLoading(false)}
          }
        }
        getAdvice()
        setTrigger(false)
      },[trigger])

  return (
    <>
        <div className='card'>
          <h1 className='heading'>{loading?'Loading...':advice}</h1>
          <button className='button' onClick={()=>{setTrigger(true)}}>
            <span>Get Advice!</span>
          </button>
        </div>
    </>
  )
}

export default AdviceComponent