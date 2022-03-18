
import React from 'react'


function Siyahi({item,state,setState}) {

  
  const handleDelete = (id)=> {
    let currentData = state.filter(index => index.id !== id)
    setState(currentData)
  }
  return (
    <div  className='siyahi' >
        <h1 key={item.id}>Ad Soyad: {item.name}  {item.surName}</h1>
        <h1>Vezife: {item.position }</h1>
        <h1>Yas: {item.age}</h1>
        <h1> Cins: {item.gender}</h1>
       <div className='btn'>
       <button onClick={() => handleDelete(item.id)}>X</button>
       </div>
        
        
    </div>
  )
}

export default Siyahi