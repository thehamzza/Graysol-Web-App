import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import colorSharp2 from '../assets/img/color-sharp2.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

export const Projects = () => {
  const projects = [
    {
      title: 'Business Startup',
      description: 'Description',
      imgUrl: projImg1,
      link: 'https://github.com/ALIRAZA17/Coffee-Masters-App'
    },
    {
      title: 'Business Startup',
      description: 'Description',
      imgUrl: projImg2,
      link: 'https://github.com/ALIRAZA17/Coffee-Masters-App'
    },
    {
      title: 'Business Startup',
      description: 'Description',
      imgUrl: projImg3,
      link: 'https://github.com/ALIRAZA17/Coffee-Masters-App'
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
                  <p>
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
