import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useParams } from 'react-router-dom'

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
      <section id='1' ref={myRef1}>
        <h2>Web and App Development</h2>
        <p>
          In this section, we specialize in creating robust and scalable web and
          mobile applications that cater to your specific business needs. Our
          team of skilled developers is well-versed in modern web technologies
          such as HTML5, CSS3, and JavaScript frameworks like React and Angular.
          We follow industry best practices and agile methodologies to deliver
          intuitive user interfaces, seamless user experiences, and efficient
          back-end systems. Whether you require an e-commerce platform, a
          content management system, or a custom web or mobile application, we
          strive to exceed your expectations and bring your ideas to life. In
          this section, we specialize in creating robust and scalable web and
          mobile applications that cater to your specific business needs. Our
          team of skilled developers is well-versed in modern web technologies
          such as HTML5, CSS3, and JavaScript frameworks like React and Angular.
          We follow industry best practices and agile methodologies to deliver
          intuitive user interfaces, seamless user experiences, and efficient
          back-end systems. Whether you require an e-commerce platform, a
          content management system, or a custom web or mobile application, we
          strive to exceed your expectations and bring your ideas to life. In
          this section, we specialize in creating robust and scalable web and
          mobile applications that cater to your specific business needs. Our
          team of skilled developers is well-versed in modern web technologies
          such as HTML5, CSS3, and JavaScript frameworks like React and Angular.
          We follow industry best practices and agile methodologies to deliver
          intuitive user interfaces, seamless user experiences, and efficient
          back-end systems. Whether you require an e-commerce platform, a
          content management system, or a custom web or mobile application, we
          strive to exceed your expectations and bring your ideas to life. In
          this section, we specialize in creating robust and scalable web and
          mobile applications that cater to your specific business needs. Our
          team of skilled developers is well-versed in modern web technologies
          such as HTML5, CSS3, and JavaScript frameworks like React and Angular.
          We follow industry best practices and agile methodologies to deliver
          intuitive user interfaces, seamless user experiences, and efficient
          back-end systems. Whether you require an e-commerce platform, a
          content management system, or a custom web or mobile application, we
          strive to exceed your expectations and bring your ideas to life.
        </p>
      </section>

      <section id='2' ref={myRef2}>
        <h2>Data Science</h2>
        <p>
          Our cloud solutions section focuses on helping businesses leverage the
          power of cloud computing to enhance their operations and drive
          innovation. We have extensive expertise in designing, deploying, and
          managing cloud-based infrastructures using leading platforms such as
          managing cloud-based infrastructures using leading platforms such as
          managing cloud-based infrastructures using leading platforms such as
          Amazon Web Services (AWS), Microsoft Azure, and Google Cloud. Our team
          works closely with you to understand your specific requirements and
          develops scalable and secure cloud architectures that optimize
          performance, reliability, and cost-efficiency. Whether it's migrating
          existing applications to the cloud, developing cloud-native solutions,
          or implementing hybrid cloud strategies, we ensure seamless
          integration and provide ongoing support to help your business thrive
          in the digital era. Our cloud solutions section focuses on helping
          businesses leverage the power of cloud computing to enhance their
          operations and drive innovation. We have extensive expertise in
          designing, deploying, and managing cloud-based infrastructures using
          leading platforms such as Amazon Web Services (AWS), Microsoft Azure,
          and Google Cloud. Our team works closely with you to understand your
          specific requirements and develops scalable and secure cloud
          architectures that optimize performance, reliability, and
          cost-efficiency. Whether it's migrating existing applications to the
          cloud, developing cloud-native solutions, or implementing hybrid cloud
          strategies, we ensure seamless integration and provide ongoing support
          to help your business thrive in the digital era. Our cloud solutions
          section focuses on helping businesses leverage the power of cloud
          computing to enhance their operations and drive innovation. We have
          extensive expertise in designing, deploying, and managing cloud-based
          infrastructures using leading platforms such as Amazon Web Services
          (AWS), Microsoft Azure, and Google Cloud. Our team works closely with
          you to understand your specific requirements and develops scalable and
          secure cloud architectures that optimize performance, reliability, and
          cost-efficiency. Whether it's migrating existing applications to the
          cloud, developing cloud-native solutions, or implementing hybrid cloud
          strategies, we ensure seamless integration and provide ongoing support
          to help your business thrive in the digital era.
        </p>
      </section>

      <section id='3' ref={myRef3}>
        <h2>Custom Software Development</h2>
        <p>
          In this section, we specialize in crafting tailor-made software
          solutions that address the unique challenges and requirements of your
          business. Our experienced team of software developers collaborates
          closely with you to gain a deep understanding of your goals and
          objectives. We then design and develop custom software applications
          using the latest technologies and frameworks. From enterprise-grade
          software systems to database management solutions, our focus is on
          delivering scalable, secure, and high-performing software that helps
          streamline your business processes, increase efficiency, and achieve
          your desired outcomes. Our iterative development approach ensures that
          we can adapt and refine the software as your needs evolve over time.
          In this section, we specialize in crafting tailor-made software
          solutions that address the unique challenges and requirements of your
          business. Our experienced team of software developers collaborates
          closely with you to gain a deep understanding of your goals and
          objectives. We then design and develop custom software applications
          using the latest technologies and frameworks. From enterprise-grade
          software systems to database management solutions, our focus is on
          delivering scalable, secure, and high-performing software that helps
          streamline your business processes, increase efficiency, and achieve
          your desired outcomes. Our iterative development approach ensures that
          we can adapt and refine the software as your needs evolve over time.
          In this section, we specialize in crafting tailor-made software
          solutions that address the unique challenges and requirements of your
          business. Our experienced team of software developers collaborates
          closely with you to gain a deep understanding of your goals and
          objectives. We then design and develop custom software applications
          using the latest technologies and frameworks. From enterprise-grade
          software systems to database management solutions, our focus is on
          delivering scalable, secure, and high-performing software that helps
          streamline your business processes, increase efficiency, and achieve
          your desired outcomes. Our iterative development approach ensures that
          we can adapt and refine the software as your needs evolve over time.
          delivering scalable, secure, and high-performing software that helps
          streamline your business processes, increase efficiency, and achieve
          your desired outcomes. Our iterative development approach ensures that
          we can adapt and refine the software as your needs evolve over time.
          In this section, we specialize in crafting tailor-made software
          solutions that address the unique challenges and requirements of your
          business. Our experienced team of software developers collaborates
          closely with you to gain a deep understanding of your goals and
          objectives. We then design and develop custom software applications
          using the latest technologies and frameworks. From enterprise-grade
          software systems to database management solutions, our focus is on
          delivering scalable, secure, and high-performing software that helps
          streamline your business processes, increase efficiency, and achieve
          your desired outcomes. Our iterative development approach ensures that
          we can adapt and refine the software as your needs evolve over time.
          delivering scalable, secure, and high-performing software that helps
          streamline your business processes, increase efficiency, and achieve
          your desired outcomes. Our iterative development approach ensures that
          we can adapt and refine the software as your needs evolve over time.
          In this section, we specialize in crafting tailor-made software
          solutions that address the unique challenges and requirements of your
          business. Our experienced team of software developers collaborates
          closely with you to gain a deep understanding of your goals and
          objectives. We then design and develop custom software applications
          using the latest technologies and frameworks. From enterprise-grade
          software systems to database management solutions, our focus is on
          delivering scalable, secure, and high-performing software that helps
          streamline your business processes, increase efficiency, and achieve
          your desired outcomes. Our iterative development approach ensures that
          we can adapt and refine the software as your needs evolve over time.
          delivering scalable, secure, and high-performing software that helps
          streamline your business processes, increase efficiency, and achieve
          your desired outcomes. Our iterative development approach ensures that
          we can adapt and refine the software as your needs evolve over time.
          In this section, we specialize in crafting tailor-made software
          solutions that address the unique challenges and requirements of your
          business. Our experienced team of software developers collaborates
          closely with you to gain a deep understanding of your goals and
          objectives. We then design and develop custom software applications
          using the latest technologies and frameworks. From enterprise-grade
          software systems to database management solutions, our focus is on
          delivering scalable, secure, and high-performing software that helps
          streamline your business processes, increase efficiency, and achieve
          your desired outcomes. Our iterative development approach ensures that
          we can adapt and refine the software as your needs evolve over time.
          delivering scalable, secure, and high-performing software that helps
          streamline your business processes, increase efficiency, and achieve
          your desired outcomes. Our iterative development approach ensures that
          we can adapt and refine the software as your needs evolve over time.
          In this section, we specialize in crafting tailor-made software
          solutions that address the unique challenges and requirements of your
          business. Our experienced team of software developers collaborates
          closely with you to gain a deep understanding of your goals and
          objectives. We then design and develop custom software applications
          using the latest technologies and frameworks. From enterprise-grade
          software systems to database management solutions, our focus is on
          delivering scalable, secure, and high-performing software that helps
          streamline your business processes, increase efficiency, and achieve
          your desired outcomes. Our iterative development approach ensures that
          we can adapt and refine the software as your needs evolve over time.
          delivering scalable, secure, and high-performing software that helps
          streamline your business processes, increase efficiency, and achieve
          your desired outcomes. Our iterative development approach ensures that
          we can adapt and refine the software as your needs evolve over time.
          In this section, we specialize in crafting tailor-made software
          solutions that address the unique challenges and requirements of your
          business. Our experienced team of software developers collaborates
          closely with you to gain a deep understanding of your goals and
          objectives. We then design and develop custom software applications
          using the latest technologies and frameworks. From enterprise-grade
          software systems to database management solutions, our focus is on
          delivering scalable, secure, and high-performing software that helps
          streamline your business processes, increase efficiency, and achieve
          your desired outcomes. Our iterative development approach ensures that
          we can adapt and refine the software as your needs evolve over time.
          delivering scalable, secure, and high-performing software that helps
          streamline your business processes, increase efficiency, and achieve
          your desired outcomes. Our iterative development approach ensures that
          we can adapt and refine the software as your needs evolve over time.
          In this section, we specialize in crafting tailor-made software
          solutions that address the unique challenges and requirements of your
          business. Our experienced team of software developers collaborates
          closely with you to gain a deep understanding of your goals and
          objectives. We then design and develop custom software applications
          using the latest technologies and frameworks. From enterprise-grade
          software systems to database management solutions, our focus is on
          delivering scalable, secure, and high-performing software that helps
          streamline your business processes, increase efficiency, and achieve
          your desired outcomes. Our iterative development approach ensures that
          we can adapt and refine the software as your needs evolve over time.
          delivering scalable, secure, and high-performing software that helps
          streamline your business processes, increase efficiency, and achieve
          your desired outcomes. Our iterative development approach ensures that
          we can adapt and refine the software as your needs evolve over time.
          In this section, we specialize in crafting tailor-made software
          solutions that address the unique challenges and requirements of your
          business. Our experienced team of software developers collaborates
          closely with you to gain a deep understanding of your goals and
          objectives. We then design and develop custom software applications
          using the latest technologies and frameworks. From enterprise-grade
          software systems to database management solutions, our focus is on
          delivering scalable, secure, and high-performing software that helps
          streamline your business processes, increase efficiency, and achieve
          your desired outcomes. Our iterative development approach ensures that
          we can adapt and refine the software as your needs evolve over time.
        </p>
      </section>

      <section id='4' ref={myRef4}>
        <h2>Fourth Section</h2>
        <p>
          This is the fourth section. Feel free to add your own content or
          customize it as needed.
        </p>
      </section>
    </div>
  )
}

export default ServicesDescription
