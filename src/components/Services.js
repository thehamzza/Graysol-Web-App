import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import colorSharp from '../assets/img/color-sharp.png'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import web from '../assets/img/web.png'
import mobile from '../assets/img/mobile.png'
import backend from '../assets/img/backend.png'
import creator from '../assets/img/creator.png'
import { useNavigate } from 'react-router-dom'

export const Services = () => {
  const navigate = useNavigate()
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1400, min: 1000 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 1000, min: 350 },
      items: 1
    }
  }

  return (
    <section className='skill' id='skills'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='skill-bx'>
              <h2>Services</h2>
              <p>
                We provide a wide range of services to help you achieve your
                business goals.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='skill-slider'
                autoPlay={true}
                autoPlaySpeed={3000}
                renderButtonGroupOutside={true}
                customButtonGroup={<CustomButtonGroup />}
                arrows={false}
              >
                <Tilt className='w-3/4 m-auto skill-slider-item'>
                  <motion.div
                    variants={fadeIn('right', 'spring', 0.5 * 0, 0.75)}
                    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
                    onClick={() => {
                      console.log('clicked')
                      navigate('/servicesDescription/1')
                    }}
                  >
                    <div
                      options={{ max: 45, scale: 1, speed: 450 }}
                      className='bg-blue-950 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
                    >
                      <img src={web} className='w-16 h-16 object-contain' />
                      <h5 className='text-white text-[18px] font-bold'>
                        Web App Development
                      </h5>
                    </div>
                  </motion.div>
                </Tilt>
                <Tilt className='w-3/4 m-auto skill-slider-item'>
                  <motion.div
                    variants={fadeIn('right', 'spring', 0.5 * 0, 0.75)}
                    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
                    onClick={() => {
                      console.log('clicked')
                      navigate('/servicesDescription/2')
                    }}
                  >
                    <div
                      options={{ max: 45, scale: 1, speed: 450 }}
                      className='bg-blue-950 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
                    >
                      <img src={mobile} className='w-16 h-16 object-contain' />
                      <h5 className='text-white text-[18px] font-bold'>
                        Data Science
                        <h7>Machine Learning & Computer Vision</h7>
                      </h5>
                    </div>
                  </motion.div>
                </Tilt>
                <Tilt className='w-3/4 m-auto skill-slider-item'>
                  <motion.div
                    variants={fadeIn('right', 'spring', 0.5 * 0, 0.75)}
                    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
                    onClick={() => {
                      console.log('clicked')
                      navigate('/servicesDescription/3')
                    }}
                  >
                    <div
                      options={{ max: 45, scale: 1, speed: 450 }}
                      className='bg-blue-950 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
                    >
                      <img src={backend} className='w-16 h-16 object-contain' />
                      <h5 className='text-white text-[18px] font-bold'>
                        Custom Software Development
                      </h5>
                    </div>
                  </motion.div>
                </Tilt>
                <Tilt className='w-3/4 m-auto skill-slider-item'>
                  <motion.div
                    variants={fadeIn('right', 'spring', 0.5 * 0, 0.75)}
                    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
                    onClick={() => {
                      console.log('clicked')
                      navigate('/servicesDescription/4')
                    }}
                  >
                    <div
                      options={{ max: 45, scale: 1, speed: 450 }}
                      className='bg-blue-950 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
                    >
                      <img src={creator} className='w-16 h-16 object-contain' />
                      <h5 className='text-white text-[18px] font-bold'>
                        Cloud Solutions
                      </h5>
                    </div>
                  </motion.div>
                </Tilt>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className='background-image-left' src={colorSharp} alt='Image' />
    </section>
  )
}

const CustomButtonGroup = ({ next, previous }) => {
  return (
    <div className='custom-button-group'>
      <button className='prev text-black' onClick={previous}>
        &lt;
      </button>
      <button className='next' onClick={next}>
        &gt;
      </button>
    </div>
  )
}
