import {Row, Col} from 'react-bootstrap';
import "./style.css"
import image from "../../assets/img/DogsFrame.jpg"
const About = () => {
    return(
      <>
      <Row>
            <Col>
                <h1>About Me</h1>
              
            </Col>
        </Row>
        <Row>
            <Col lg={3}>
               <aside>
                <h3>
                    Skills
                </h3>
                <ul>
                    <li>
                        HTML
                    </li>
                    <li>
                       CSS 
                    </li>
                    <li>
                        JAVASCRIPT
                    </li>
                    <li>
                        MYSQL
                    </li>
                    <li>
                        GRAPHQL
                    </li>
                    <li>
                        GIT
                    </li>
                    <li>
                        Boostrap
                    </li>
                    <li>
                        jQuery
                    </li>
                    <li>
                        Node
                    </li>
                    <li>
                        Express.js
                    </li>
                    <li>
                        MongoDB
                    </li>
                    <li>
                        Experience deploying applications to Heroku, GitHub Pages, and GitLab, Netlify, Render.
                    </li>
                </ul>
               </aside>
            </Col>
            <Col lg={9}>
                <div>

                <img src={image} alt="Dogs" className="img-fluid" style={{width:"18em", float:"left", margin:"1em"}}/>
                
                <p>
                    I am a full stack web developer with a background in business and a passion for technology. I have a strong foundation in HTML, CSS, and JavaScript. I have experience with MySQL, MongoDB, and GraphQL. I am a quick learner and a problem solver. I am looking for a full-time position in web development. 
                </p>
                <p>
                    I live in the North Utah County area with my wife, two dogs and two cats. I enjoy hiking, camping, and spending time with my family. I am a lifelong learner and I am always looking for ways to improve my skills. I am excited to continue to grow as a developer and gain experience working on new projects.
                   </p>
                </div>
            </Col>
        </Row>
        </>
    )
}

export default About;