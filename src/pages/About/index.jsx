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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vero, velit voluptatem harum, maxime corporis laborum, magnam soluta vel provident eos dicta officiis vitae. Eligendi quo veritatis quibusdam minima delectus quaerat iusto obcaecati repellendus incidunt laborum. Nihil eveniet beatae libero quam reprehenderit ratione, facilis et similique odio amet veritatis officiis! Quo similique minima sint repellendus perferendis earum sit animi voluptatum aspernatur ex libero rem fugit mollitia, rerum voluptate explicabo ea veritatis quae illo voluptatem perspiciatis voluptates! At itaque fugiat soluta rem culpa provident voluptates, fuga adipisci, placeat ex eum commodi, nisi iste optio. Asperiores saepe molestias sequi accusantium! Assumenda iste eaque dolores optio, fugit voluptatem error sapiente quia recusandae ex non aperiam qui ipsum quibusdam obcaecati fugiat culpa corporis nisi magni quo possimus blanditiis? Minus excepturi rem magnam ratione asperiores doloremque expedita at maxime incidunt blanditiis, animi, illo porro quis aut necessitatibus velit aspernatur quam tempora alias suscipit sed. Quia neque suscipit sint cum cumque, iste dolorem quibusdam placeat soluta esse saepe ratione ea nesciunt eaque eligendi asperiores recusandae eum blanditiis porro voluptate corrupti. Laborum voluptatum consequuntur voluptate cupiditate voluptates? Ratione inventore nesciunt consequatur! Amet accusantium tenetur, nemo inventore tempore maxime, et laboriosam saepe quia iure est fuga doloremque quae!
                   </p>
                </div>
            </Col>
        </Row>
        </>
    )
}

export default About;