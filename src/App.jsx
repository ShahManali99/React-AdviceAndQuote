import { useState } from 'react'
import './App.css'
import AdviceComponent from './Components/AdviceComponent'
import QuoteComponent from './Components/QuoteComponent'
import { fetchAdvice, fetchQuote } from './Api'

function App() {
  const [loading, setLoading] = useState(true)
  const [adviceBtn, setAdviceBtn] = useState(true)
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  const [advice, setAdvice] = useState('')

  const getQuote = async()=> {
    try {
      const res = await fetchQuote();
      setQuote(res[0].quote)
      setAuthor(res[0].author)
    } catch(err) {
      console.log(err);
    } finally {
      {setLoading(false)}
      setAdviceBtn(false)
    }
  }

  const getAdvice = async()=> {
    try {
      const res = await fetchAdvice();
      setAdvice(res.slip.advice);
    } catch(err) {
      console.log(err);
    } finally {
      {setLoading(false)}
      setAdviceBtn(true)
    }
  }

  return (
    <>
      <div className='app'>
        <div className='navigation'>
          <button className='nav-button' onClick={getAdvice}>Advice</button>
          <button className='nav-button' onClick={getQuote}>Quote</button>
        </div>
        {adviceBtn?<AdviceComponent loading={loading} advice={advice} getAdvice={getAdvice}/>:
          <QuoteComponent loading={loading} getQuote={getQuote} quote={quote} author={author}/>}
      </div>
    </>
  )
}

export default App
