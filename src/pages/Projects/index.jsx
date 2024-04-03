import ProjectCard from "../../components/Projectcard";
import holiday from './assets/Holiday2-099964c9.png';
import workday from "./assets/Scheduler-45088492.png";
import weather from "./assets/weather-0fd870b8.png";
import workout from "./assets/login_project2-fa924276.png";
import notes from "./assets/Notes-003ead04.png";
import passgen from "./assets/Passgen1-34109765.png";
import {Row, Col} from "react-bootstrap"


const Projects = () => {
    const myProjects = [
        {
            id: 1,
            name: 'Holiday Music Search Engine',
            description: 'A search engine for holiday music that allows users to search for songs by title, artist, or genre. Users can also create an account to save their favorite songs.',  
            image: holiday,
            link: 'https://ruthiepina.github.io/Project-1',
            gitLink: 'https://github.com/ruthiepina/Project-1',
        },
        {
            id: 2,
            name: 'Workday Scheduler',
            description: 'A simple calendar application that allows a user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.',
            image: workday,
            link: 'https://tnielson78.github.io/Workday-scheduler/',
            gitLink: 'https://github.com/TNielson78/Workday-scheduler',
        },
        {
            id: 3,
            name: 'Weather Dashboard',
            description: 'A weather dashboard that allows a user to search for a city and view the current weather conditions as well as the 5-day forecast. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.',
            image: weather,
            link: 'https://tnielson78.github.io/Weather-dashboard/',
            gitLink: 'https://github.com/TNielson78/Weather-dashboard',
        },
        {
            id: 4,
            name: 'Workout Tracker',
            description: 'A workout tracker that allows a user to view, create, and track daily workouts. The user can log multiple exercises in a workout on a given day and track the name, type, weight, sets, reps, and duration of the exercise.',
            image: workout,
            link: 'https://workout-fitness-tracker-ff2f5d2f6a1e.herokuapp.com/login',
            gitLink: 'https://github.com/hyrumsdolan/fitness-tracker-MVC',
        },
        {
            id: 5,
            name: 'Note Taker',
            description: 'An application that can be used to write, save, and delete notes. This application uses an express backend and saves and retrieves note data from a JSON file.',
            image: notes,
            link: 'https://note-taker-tnielson78.herokuapp.com/',
            gitLink: 'https://github.com/TNielson78/Note_taker',
        },
        {
            id: 6,
            name: 'Password Generator',
            description: 'A password generator that allows a user to create a random password based on criteria they’ve selected. This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript.',
            image: passgen,
            link: 'https://tnielson78.github.io/Password-Generator/',
            gitLink: 'https://github.com/TNielson78/Password-Generator',
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