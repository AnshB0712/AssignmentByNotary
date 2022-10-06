import {useState,useEffect} from 'react'
import { CustomTable } from './CustomTable'

import styled,{keyframes} from 'styled-components'

const URL = "http://demo2211087.mockable.io/mock"

function App() {
  
  const [data,setData] = useState([])
  
  useEffect(() => {
    
  const controller = new AbortController();
  const fetchData = async (signal)=> 
  {
  
  try {
  const response = await fetch(URL,{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({}),
    signal: signal
  })
  const {companies} = await response.json()
  
  setData(companies)
  } catch (e) {
    console.error(e)
  }
  }
  
  fetchData(controller.signal)
  
  return () => controller.abort()
  },[])
  
  return (
   <>
   <Header>
   <h1>
   NotaryAssignment By Anshul Borde
   </h1>
   <a href="https://www.github.com/anshb0712">Github</a>
   </Header>
   
   {
     !data.length 
     ? 
     <div 
     style={{
    display: 'grid',
    placeItems: 'center',
    minHeight: '500px'
    }}>
     <Loader />
     </div>
     : 
     <CustomTable data={data} />}
   </>
  )
}

const Header = styled.header`
    text-align: center;
    
    border-bottom: 1px solid #dbdbd8;
    
    padding: 2rem;
    
    & a{
      font-size: 2rem;
    }
`

const spin = keyframes`
     from{transform: rotate(0deg);}
     to{transform: rotate(360deg);}
`

const Loader = styled.div`
     border: 4px solid transparent;
     border-top: 4px solid #2f86d0;
     border-radius: 50%;
     
     width: 50px;
     height: 50px;
     
     animation: ${spin} .5s linear infinite;
`
export default App
