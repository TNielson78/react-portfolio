import resume from '../../assets/resume/Travis Nielson Resume1.pdf';
import image from '../../assets/img/resumescreenshot.png';
const Resume = () => {
    return(
        <main style={{display:"flex", flexDirection:"column",}}>
           
            <a href={resume} download>
                <img src={image} alt='Resume' style={{border:"1px solid grey", boxShadow:"1px 1px 5px grey", marginTop:"25px"}}/>
            </a>

            <button style={{width:"fit-content", margin:"0 auto"}}>
            <a href={resume} download>
                Download Resume
            </a>
            </button>
        </main>
    )
}

export default Resume;