import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
const ProjectCard =({project})=>{
    return (
        <Col sm={12}md={6}lg={4}>
        <Card className="mb-3">
        <Card.Header>
            <Card.Title>
                {project.name}
            </Card.Title>
        </Card.Header>
        <Card.Body>
            <Card.Img src={project.image}/>
            <p>
                {project.description}
            </p>
            <div>
                <Button href={project.link}>
                    View Website
                </Button>
                <Button href={project.gitLink}>
                    View Code
                </Button>
            </div>
        </Card.Body>
        </Card>
        </Col>
    )
}

export default ProjectCard