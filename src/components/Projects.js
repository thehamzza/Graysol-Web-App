import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import projImg4 from '../assets/img/sam_tejada_personal_branding_site.PNG'
import projImg5 from '../assets/img/winnergy_project.png'

import colorSharp2 from '../assets/img/color-sharp2.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

export const Projects = () => {
  const projects = [
    {
      title: 'Human Force',
      description: 'Humanforce provides the market-leading, employee-centred, intelligent and compliant HCM suite for frontline and flexible workforces.',
      imgUrl: projImg3,
      link: 'https://info.humanforce.com/landing-page-v2'
    },
    {
      title: 'Click Drop',
      description: 'Ebay E-commerce Tool to hunt products',
      imgUrl: projImg2,
      link: 'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/nuqr3hh2bj6xllvtdsst'
    },
    {
      title: 'City Book',
      description: 'Exploring destinations, food and culture around the world',
      imgUrl: projImg1,
      link: 'https://www.citybook.pk'
    },
     {
      title: 'Personal Branding Site',
      description: 'Website built using wordpress for Samael Tejada, who is a renowned entreprenuer, businessman and author of a book',
      imgUrl: projImg4,
      link: 'https://www.samtejada.com/home'
    },
     {
      title: 'Apparel Ecommerce Store',
      description: 'Ecommerce store built for Winnergy, an emerging brand from USA',
      imgUrl: projImg5,
      link: 'https://www.winnergy.com'
    }
  ]

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p align="justify">
                    Following projects showcases our skills and experience
                    through real-world examples of our work. Each project is
                    briefly described with links to code repositories and live
                    demos in it.
                  </p>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Tab.Content
                      id='slideInUp'
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey='first'>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2}></img>
    </section>
  )
}
