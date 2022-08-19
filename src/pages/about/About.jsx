import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg"
import "./about.css"
import StoryImage from "../../images/about1.jpg"
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg"

const About = () => {
  return (
    <>
     <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum aliquam illo commodi eius fuga recusandae dignissimos vel?
     </Header>

     <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our story Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia laudantium quia dolorem fugit aspernatur! Aliquam rerum quia, voluptatum non iure, quidem molestiae quisquam consequuntur optio dolor doloribus labore ex nostrum assumenda animi eius accusantium at, asperiores totam deserunt hic. Voluptates?
          </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit nam ipsam expedita saepe neque tempora incidunt debitis quae, suscipit earum adipisci? Aspernatur, at fugit numquam nulla mollitia odio inventore nemo impedit asperiores quod, quaerat beatae ut illo vel?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consectetur sed placeat.</p>
        </div>
      </div>
     </section>

     <section className="about__Vision">
      <div className="container about__vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, odit illum et provident doloribus temporibus veritatis velit neque, quibusdam magni aspernatur deleniti natus sunt officia?
          </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit nam ipsam expedita saepe neque tempora incidunt debitis quae, suscipit earum adipisci? Aspernatur, at fugit numquam nulla mollitia odio  beatae ut illo vel?
        </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>
     </section>

     <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia laudantium quia dolorem fugit aspernatur! Aliquam rerum quia, voluptatum non iure, quidem molestiae quisquam consequuntur optio dolor doloribus labore ex nostrum assumenda animi eius accusantium at, asperiores totam deserunt hic. Voluptates?
          </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit nam ipsam expedita saepe neque tempora incidunt debitis quae, suscipit earum adipisci? Aspernatur, at fugit numquam nulla mollitia odio inventore nemo impedit asperiores quod, quaerat beatae ut illo vel?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consectetur sed placeat.</p>
        </div>
      </div>
     </section>
    </>
  )
}

export default About
