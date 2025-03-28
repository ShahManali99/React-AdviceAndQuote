import { useState } from 'react'
import './App.css'
import AdviceComponent from './Components/AdviceComponent'
import QuoteComponent from './Components/QuoteComponent'
import { fetchQuote } from './Api'

function App() {
  const [loading, setLoading] = useState(true)
  const [adviceBtn, setAdviceBtn] = useState(true)
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  const getQuote = async()=> {
    try {
      const res = await fetchQuote();
      console.log(res[0].quote)
      console.log(res[0].author)
      setQuote(res[0].quote)
      setAuthor(res[0].author)
    } catch(err) {
      console.log(err);
    } finally {
      {setLoading(false)}
      setAdviceBtn(false)
    }
  }

  return (
    <>
      <div className='app'>
        <div className='navigation'>
          <button className='nav-button' onClick={()=>{setAdviceBtn(true)}}>Advice</button>
          <button className='nav-button' onClick={getQuote}>Quote</button>
        </div>
        {adviceBtn?<AdviceComponent loading={loading} setLoading={setLoading}/>:
          <QuoteComponent loading={loading} setLoading={setLoading} getQuote={getQuote} quote={quote} author={author}/>}
      </div>
    </>
  )
}

export default App
