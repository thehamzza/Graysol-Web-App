import { Container, Row, Col } from 'react-bootstrap'
import logo from '../assets/img/logoNoBg.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import fiverr_icon from '../assets/img/fiverr_icon_black.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

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
                <img src={fiverr_icon} alt='Icon' />
              </a>
              <a href='#'>
                <img src={navIcon3} alt='Icon' />
              </a>
            </div>
            <p>Gray Solutions Pvt Ltd © 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
