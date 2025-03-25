import { useEffect, useState } from 'react'
import './App.css'
import { fetchAdvice } from './Api'

function App() {
  const [advice, setAdvice] = useState('')
  const [loading, setLoading] = useState(true)
  const [trigger, setTrigger] = useState(false)
  useEffect(()=>{
    const getAdvice = async()=> {
      try {
        const res = await fetchAdvice();
        setAdvice(res.slip.advice);
      } catch(err) {
        console.log(err);
      } finally {
        setLoading(false)
      }
    }
    getAdvice()
    setTrigger(false)
  },[trigger])
  return (
    <>
      <div className='app'>
        <div className='navigation'>
          <button className='nav-button'>Advice</button>
          <button className='nav-button'>Quote</button>
        </div>
        <div className='card'>
          <h1 className='heading'>{loading?'Loading...':advice}</h1>
          <button className='button' onClick={()=>{setTrigger(true)}}>
            <span>Get Advice!</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
