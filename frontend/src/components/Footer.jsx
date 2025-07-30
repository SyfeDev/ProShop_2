import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className=' py-3'>    
    <Container>
        <Row>
            <Col className='text-center'>       
                <p>Copyright &copy; {year} ProShop</p>
            </Col>
        </Row>
    </Container>
    </footer>
  )
}

export default Footer