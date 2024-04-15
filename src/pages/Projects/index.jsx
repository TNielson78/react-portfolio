import ProjectCard from "../../components/Projectcard";
import Holiday from "../../assets/img/Holiday2.png";
import Scheduler from "../../assets/img/Scheduler.png";
import Weather from "../../assets/img/weather.png";
import Workout from "../../assets/img/login_project2.png";
import Notes from "../../assets/img/Notes.png";
import Passgen from "../../assets/img/Passgen1.png";
import Peterson from "../../assets/img/Peterson.png";
import {Row, Col} from "react-bootstrap"


const Projects = () => {
    const myProjects = [
        {
            id: 1,
            name: 'Holiday Music Search Engine',
            description: 'A search engine for holiday music that allows users to search for songs by title, artist, or genre. Users can also create an account to save their favorite songs.',  
            image: Holiday,
            link: 'https://ruthiepina.github.io/Project-1',
            gitLink: 'https://github.com/ruthiepina/Project-1',
        },
        {
            id: 2,
            name: 'Workday Scheduler',
            description: 'A simple calendar application that allows a user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.',
            image: Scheduler,
            link: 'https://tnielson78.github.io/Workday-scheduler/',
            gitLink: 'https://github.com/TNielson78/Workday-scheduler',
        },
        {
            id: 3,
            name: 'Weather Dashboard',
            description: 'A weather dashboard that allows a user to search for a city and view the current weather conditions as well as the 5-day forecast. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.',
            image: Weather,
            link: 'https://tnielson78.github.io/Weather-dashboard/',
            gitLink: 'https://github.com/TNielson78/Weather-dashboard',
        },
        {
            id: 4,
            name: 'Workout Tracker',
            description: 'A workout tracker that allows a user to view, create, and track daily workouts. The user can log multiple exercises in a workout on a given day and track the name, type, weight, sets, reps, and duration of the exercise.',
            image: Workout,
            link: 'https://workout-fitness-tracker-ff2f5d2f6a1e.herokuapp.com/login',
            gitLink: 'https://github.com/hyrumsdolan/fitness-tracker-MVC',
        },
        {
            id: 5,
            name: 'Note Taker',
            description: 'An application that can be used to write, save, and delete notes. This application uses an express backend and saves and retrieves note data from a JSON file.',
            image: Notes,
            link: 'https://note-taker-tnielson78.herokuapp.com/',
            gitLink: 'https://github.com/TNielson78/Note_taker',
        },
        {
            id: 6,
            name: 'Password Generator',
            description: 'A password generator that allows a user to create a random password based on criteria they’ve selected. This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript.',
            image: Passgen,
            link: 'https://tnielson78.github.io/Password-Generator/',
            gitLink: 'https://github.com/TNielson78/Password-Generator',
        },
        {
            id: 7,
            name: 'Peterson Plumbing',
            description: 'Plumbing website for Peterson Plumbing.',
            image:Peterson ,
            link: 'https://plumbing-store-front-1.onrender.com',
            gitLink: 'https://github.com/cosmonaut1917/Plumbing_store_front',
        }
    ];
    return (
        <main>
            <h2>
                Projects Page
            </h2>
            <Row>
                {myProjects.map((project)=>(<ProjectCard key={project.id} project={project}/>))}
            </Row>
        </main>
    )
};
export default Projects;