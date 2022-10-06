import styled from 'styled-components'
  
export const CustomTable = ({data}) =>
{
  return(
  <section
  style={{ 
  padding: '1.5rem',
  maxWidth:'1600px' 
  }}
  >
  {
  data.map(info => (
  <Row key={info.name}>
  
   <p>{info.name}</p>
   <p>{info.email}</p>
   
   <ActiveStatusBadge 
   status={info.status}>
   <span />
   {info.status==="active" ? 'Active':'Inavtive'}
   </ActiveStatusBadge>
   
  </Row>
  ))
  }
  </section>
  )
}

const Row = styled.div`
     border: 1px solid #dbdbd8;
     border-radius: 10px;
     
     padding: 1.5rem 2rem;
     margin: 1rem 0;
     
     width: 100%;
     
     display: flex;
     justify-content: space-between;
     align-items: center;
     
     & p{
      padding: .25rem;
      font-size: 1.25rem;
      font-weight: 600;
     }
`

const ActiveStatusBadge = styled.div`
    max-width: 150px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: .3rem;
    
    font-size: 1rem;
    
    border: 1px solid #dbdbd8;
    border-radius: .6rem;
    
    padding: .5rem;
    
    position: relative;
    
    & span{
    
    background: ${({status}) => status==='active'?'limegreen':'crimson'};
    
    width: 6px;
    height: 6px;
    
    border-radius: 50%;
    }
`