import { Container } from '@mui/material'
import React from 'react'

function Subscribe() {
  return (
    <div className='subscribe-area'>
        <Container>
        <form>
            <div className="input-area">
            <input type="text" placeholder='Enter your email'/>
            <button>Subscribe</button>
            </div>
        </form>
        </Container>
    
    </div>
  )
}

export default Subscribe