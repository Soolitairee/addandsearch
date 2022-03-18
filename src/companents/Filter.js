import React from 'react'

function Filter(props) {
  return (
    <div className='filter' >
      <h1>işçi axtarışı:</h1>
      <label htmlFor="yas">
        <p>Yaş:</p>
        <input onChange={inp => props.muqayise(inp.target.value)} type="number" id="yas" />
      </label>
      <label htmlFor="gender">
        <p>Cins:</p>
        <input onChange={gel => props.genmuq(gel.target.value)} type="text" id='gender' />
      </label>
      <label htmlFor="position">
        <p>Vəzifə:</p>
        <input onChange={pesi => props.positi(pesi.target.value)} type="text" id='position' />
      </label>
      
      
      
        
      

    </div>
  )
}

export default Filter