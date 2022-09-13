import React from 'react'
import loading from './load.gif'

const Spinner = () => {

  return (
    <div>
      <div className='text-center'>
        <img src={loading} alt="loading" style={{ height: '60px', width: '60px' }} />
      </div>
    </div>
  )

}

export default Spinner
