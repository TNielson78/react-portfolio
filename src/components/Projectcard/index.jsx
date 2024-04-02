import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CardHeader } from "react-bootstrap";
const ProjectCard =({project})=>{
    return (
        <Card>
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
    )
}

export default ProjectCard