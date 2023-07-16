import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import yaruq from '../assets/img/yaruq_nadeem.jpeg'
import { StarFill } from 'react-bootstrap-icons'

export const Testimonial = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <section className='testimonial ' id='skills'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='testimonial-bx'>
              <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider mt-4'>
                Some of our proud customers
              </p>
              <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
                Testimonials.
              </h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='testimonial-slider mt-5'
                autoPlay={true}
                autoPlaySpeed={3000}
                renderButtonGroupOutside={true}
                customButtonGroup={<CustomButtonGroup />}
                arrows={false}
              >
                <div className='w-11/12 testimonial-slider-item'>
                  <div class='card p-3 text-center px-4'>
                    <div class='user-content'>
                      <img
                        src={yaruq}
                        className='w-16 h-16 m-auto rounded-full'
                        alt=''
                      />
                      <h3 class='mb-0'>Lior</h3>

                      <span className='text-gray-500 text-[14px]'>
                        CEO Testamind Ecommerce
                      </span>
                      <div className='flex flex-wrap justify-center mt-2'>
                        <StarFill />
                        <StarFill />
                        <StarFill />
                        <StarFill />
                      </div>
                      <p className='mt-2'>
                        I am a very old client of Hamza, long before this
                        company even exists, he showcased his technical
                        expertise and strong communication skills, which were
                        essential to the successful delivery of our ecommerce
                        tool.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='w-11/12 testimonial-slider-item'>
                  <div class='card p-3 text-center px-4'>
                    <div class='user-content'>
                      <img
                        src={yaruq}
                        className='w-16 h-16 m-auto rounded-full'
                        alt=''
                      />

                      <h3 class='mb-0'>Leonardo Turchi</h3>
                      <span className='text-gray-500 text-[14px]'>
                        Software Developer , Italy
                      </span>

                      <div className='flex flex-wrap justify-center mt-2'>
                        <StarFill />
                        <StarFill />
                        <StarFill />
                        <StarFill />
                      </div>
                      <p className='mt-2'>
                        I am impressed by the results, very responsive
                        communication, delivered a challenging project within a
                        short span of time, with feasibility and technical
                        analysis reports. Totally recommended and I would come
                        again.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='w-11/12 testimonial-slider-item'>
                  <div class='card p-3 text-center px-4'>
                    <div class='user-content'>
                      <img
                        src={yaruq}
                        className='w-16 h-16 m-auto rounded-full'
                        alt=''
                      />

                      <h3 class='mb-0'>Ionut John Panait</h3>
                      <span className='text-gray-500 text-[14px]'>
                        Businessman, Romania
                      </span>
                      <div className='flex flex-wrap justify-center mt-2'>
                        <StarFill />
                        <StarFill />
                        <StarFill />
                        <StarFill />
                      </div>
                      <p className='mt-2'>
                        I am glad I hired them, they were able to showcase their
                        technical expertise and strong communication skills,
                        which were essential to the successful delivery of our
                        MVP. We are working on another project now.
                      </p>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
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
