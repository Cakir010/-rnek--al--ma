import React from 'react'
import { Container, Image } from 'react-bootstrap'
import nbaLogo from '../assets/1950715.png'

const Header = () => {
  return (
    <Container className='text-center' >
        <Image src={nbaLogo} width='200px'></Image>
        <h1 className='my-2 font-monospace display-4 '>NBA Legends</h1>
    </Container>
  )
}

export default Header