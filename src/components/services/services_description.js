import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import colorSharp from '../../assets/img/color-sharp.png'

function ServicesDescription () {
  const myRef1 = useRef(null)
  const myRef2 = useRef(null)
  const myRef3 = useRef(null)
  const myRef4 = useRef(null)

  const references = [myRef1, myRef2, myRef3, myRef4]
  const { id } = useParams()
  useEffect(() => {
    references[id - 1].current.scrollIntoView()
  }, [])
  return (
    <div>
      <section id='1' className='skill' ref={myRef1}>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='skill-bx services-desc'>
                <h2>Web and App Development</h2>
                <p>
                  At Gray Solutions, we specialize in web app development, 
                  where our primary focus is on creating exceptional digital 
                  experiences for businesses across diverse industries. With 
                  an unwavering commitment to innovation and user-centric design, 
                  our expert team of developers leverages cutting-edge technologies 
                  and industry best practices to build robust, scalable, and user-friendly
                  web applications. Whether it's a customer-facing platform, an internal enterprise tool, 
                  or an e-commerce solution, our web app development services are tailored to suit 
                  the unique needs of each client. By seamlessly blending creativity with 
                  functionality, we empower businesses to engage their target audience, 
                  optimize workflows, and achieve their strategic goals. Through rigorous 
                  testing and quality assurance, we ensure that our web applications perform 
                  flawlessly across various devices and platforms, delivering a seamless and 
                  satisfying user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className='background-image-left' src={colorSharp} alt='Image' />
      </section>

      <section id='2' className='skill' ref={myRef2}>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='skill-bx services-desc'>
                <h2>Data Science</h2>
                <p>
                  Our cloud solutions section focuses on helping businesses
                  leverage the power of cloud computing to enhance their
                  operations and drive innovation. We have extensive expertise
                  in designing, deploying, and managing cloud-based
                  infrastructures using leading platforms such as managing
                  cloud-based infrastructures using leading platforms such as
                  managing cloud-based infrastructures using leading platforms
                  such as Amazon Web Services (AWS), Microsoft Azure, and Google
                  Cloud. Our team works closely with you to understand your
                  specific requirements and develops scalable and secure cloud
                  architectures that optimize performance, reliability, and
                  cost-efficiency. Whether it's migrating existing applications
                  to the cloud, developing cloud-native solutions, or
                  implementing hybrid cloud strategies, we ensure seamless
                  integration and provide ongoing support to help your business
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className='background-image-left' src={colorSharp} alt='Image' />
      </section>

      <section id='3' ref={myRef3} className='skill'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='skill-bx services-desc'>
                <h2>Custom Software Development</h2>
                <p>
                  In this section, we specialize in crafting tailor-made
                  software solutions that address the unique challenges and
                  requirements of your business. Our experienced team of
                  software developers collaborates closely with you to gain a
                  deep understanding of your goals and objectives. We then
                  design and develop custom software applications using the
                  latest technologies and frameworks. From enterprise-grade
                  software systems to database management solutions, our focus
                  is on delivering scalable, secure, and high-performing
                  software that helps streamline your business processes,
                  increase efficiency, and achieve your desired outcomes. Our
                  iterative development approach ensures that we can adapt and
                  refine the software as your needs evolve over time. In this
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className='background-image-left' src={colorSharp} alt='Image' />
      </section>
      <section id='4' ref={myRef4} className='skill'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='skill-bx services-desc'>
                <h2>Cloud Solution</h2>
                <p>
                  In this section, we specialize in crafting tailor-made
                  software solutions that address the unique challenges and
                  requirements of your business. Our experienced team of
                  software developers collaborates closely with you to gain a
                  deep understanding of your goals and objectives. We then
                  design and develop custom software applications using the
                  latest technologies and frameworks. From enterprise-grade
                  software systems to database management solutions, our focus
                  is on delivering scalable, secure, and high-performing
                  software that helps streamline your business processes,
                  increase efficiency, and achieve your desired outcomes. Our
                  iterative development approach ensures that we can adapt and
                  refine the software as your needs evolve over time. In this
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className='background-image-left' src={colorSharp} alt='Image' />
      </section>
    </div>
  )
}

export default ServicesDescription
