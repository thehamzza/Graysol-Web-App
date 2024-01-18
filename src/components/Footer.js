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
  
          <Col size={12} sm={6}>
          <div class="trustpilot-widget" data-locale="en-US" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="65a4311021d8fec01af715b5" data-style-height="52px" data-style-width="100%">
            <a href="https://www.trustpilot.com/review/graysol.co" target="_blank" rel="noopener">Trustpilot</a>
          </div>
         </Col>
  
          <Col size={12} sm={6} className='text-center text-sm-end mt-5'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/company/gray-solutions/'>
                <img src={navIcon1} alt='Icon' />
              </a>
              <a href='https://www.fiverr.com/itshamza100/'>
                <img className='fiver-icon' src={fiverr} alt='Icon'/>
              </a>
              <a href='https://wa.me/923046685004'>
                <img src={whatsapp} alt='Icon' />
              </a>
            </div>
            <p>Graysol LLC © 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
