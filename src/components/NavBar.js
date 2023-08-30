import { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logoNoBg from '../assets/img/logoNoBg.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import fiverr from '../assets/img/fiverr.svg'
import whatsapp from '../assets/img/whatsapp.svg'
import { HashLink } from 'react-router-hash-link'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ServicesDescription from './services/services_description'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onUpdateActiveLink = value => {
    setActiveLink(value)
  }

  return (
    <Navbar expand='md' className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href='/'>
          <img src={logoNoBg} alt='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link
              href='#home'
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href='#skills'
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('skills')}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href='#projects'
              className={
                activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a
                className='navbar-social-icons'
                href='https://www.linkedin.com/company/gray-solutions/'
              >
                <img src={navIcon1} alt='' />
              </a>
              <a
                className='navbar-social-icons'
                href='https://www.fiverr.com/itshamza100/'
              >
                <img src={fiverr} alt='' />
              </a>
              <a className='navbar-social-icons' href='''https://wa.me/923046685004?text=Hi,%20I'm%20interested%20in%20your%20software%20services.'''>
                <img src={whatsapp} alt='' />
              </a>
            </div>
            <HashLink to='#connect'>
              <button className='rounded-md small-screen-button'>
                <span>Let’s Connect</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
