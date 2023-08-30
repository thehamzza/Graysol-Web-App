import { Container, Row, Col } from 'react-bootstrap'
import logo from '../assets/img/logoNoBg.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import fiverr from '../assets/img/fiverr.svg'
import whatsapp from '../assets/img/whatsapp.svg'

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center footer-logo'>
          <Col size={12} sm={6}>
            <img src={logo} alt='Logo' />
          </Col>
          <Col size={12} sm={6} className='text-center text-sm-end mt-5'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/company/gray-solutions/'>
                <img src={navIcon1} alt='Icon' />
              </a>
              <a href='https://www.fiverr.com/itshamza100/'>
                <img className='fiver-icon' src={fiverr} alt='Icon'/>
              </a>
              <a href='https://wa.me/923046685004?text=Hi,%20I'm%20interested%20in%20your%20software%20services.'>
                <img src={whatsapp} alt='Icon' />
              </a>
            </div>
            <p>Gray Solutions Pvt Ltd © 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
