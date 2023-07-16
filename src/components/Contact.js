import { useRef, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import contactImg from '../assets/img/contact-img.svg'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Contact = () => {
  const form = useRef()

  const [isSending, setIsSending] = useState(false)
  const notify = () =>
    toast.success('Email sent Successfully!', {
      position: toast.POSITION.BOTTOM_CENTER
    })

  const sendEmail = e => {
    e.preventDefault()

    emailjs.sendForm(
      'service_3bdil1a',
      'template_69jptmq',
      form.current,
      'EbDeNscYGi5CKzqWv'
    )
    setIsSending(true)
    setTimeout(() => {
      setIsSending(false)
      notify()
      e.target.reset()
    }, 2000)
  }
  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                  src={contactImg}
                  alt='Contact Us'
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className='px-1'>
                        <input
                          type='text'
                          name='user_name'
                          placeholder='Name'
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className='px-1'>
                        <input
                          type='tel'
                          name='contact_info'
                          placeholder='Phone No.'
                        />
                      </Col>
                      <Col size={12} sm={12} className='px-1'>
                        <input
                          type='email'
                          name='user_email'
                          placeholder='Email Address'
                          required
                        />
                      </Col>
                      <Col size={12} sm={12} className='px-1'>
                        <input
                          type='text'
                          name='user_subject'
                          placeholder='Subject'
                          required
                        />
                      </Col>
                      <Col size={12} sm={12} className='px-1'>
                        <textarea
                          rows='6'
                          name='message'
                          placeholder='Message'
                          required
                        ></textarea>
                        <button type='submit'>
                          {isSending ? <span>Sending</span> : <span>Send</span>}
                        </button>
                        <ToastContainer />
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
