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
                At Gray Solutions, we excel in data science, offering advanced analytics, computer vision, and machine learning services. 
                Our expert team enables data-driven decisions and a competitive edge.
                    
                <h3> Computer Vision: Redefining Visual Perception </h3>
                Our computer vision solutions extract insights from visual data, automating processes and enhancing experiences.
                  
                <h3>Machine Learning: Powering Intelligent Decisions</h3>
                With diverse algorithms and frameworks, our machine learning models drive personalization, 
                predictive maintenance, and more.
                  
                <h3> Data Visualization Tools: Unveiling Data Stories </h3>
                We utilize tools like Matplotlib and Tableau to present complex data intuitively, aiding informed decisions.
                  
                <h3> Data Engineering: Seamless Data Flow and Analysis </h3>
                Our data engineering services ensure efficient data flow, storage, and analysis for successful data-driven endeavors.
                At Gray Solutions, we deliver comprehensive data solutions, build powerful data pipelines, unlocking innovation 
                and growth for our clients.
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
                  Understanding that each business has specific requirements, 
                  we offer custom software development services that cater to 
                  a wide range of applications, including desktop apps, specialized 
                    programs, and proprietary tools. Our team collaborates closely with 
  clients to thoroughly comprehend their business processes, challenges, and objectives, 
    enabling us to craft personalized solutions that precisely address their needs. 
    Leveraging our technical expertise and creative prowess, we design and develop bespoke
    software solutions that streamline operations, automate tasks, and empower businesses 
      to gain a strategic edge. By blending functionality with intuitive interfaces, our 
        custom software solutions enhance user productivity and satisfaction, 
                  ensuring seamless adoption and optimized performance.
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
                In an era of dynamic digital landscapes, businesses need the power 
          of cloud computing to stay competitive and agile. Gray Solutions excels 
            in providing comprehensive cloud solutions that enable organizations to
            harness the full potential of cloud platforms like AWS, Google Cloud, 
              and Microsoft Azure. Our cloud experts design and implement scalable, 
              secure, and cost-effective solutions, allowing businesses to rapidly 
              adapt to changing demands while reducing operational complexities. 
                From cloud migration to cloud-native application development,
                we seamlessly integrate cloud technologies into our clients' 
                existing ecosystems, unlocking enhanced flexibility, cost-efficiency,
                  and scalability. By embracing the cloud, businesses can innovate faster, 
                  optimize resources, and achieve unparalleled competitive advantages in today's digital economy.
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
