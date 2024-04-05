import trees from '../../assets/img/trees.jpg';
const Home = ({currentPage, handlePageChange}) => {
    return(
        <main style={{backgroundImage:`url(${trees})`,height:"80vh",margin:"25px auto", position:"relative"}}>
           <div style={{backgroundColor:"white", width:"fit-content", position:"absolute", top:"45%", left:"35%"}}>
            <h2>
               
                <a
            href="#projects"
            onClick={() => handlePageChange('Projects')}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
          >
           Welcome to my Portfolio
          </a>
            </h2>
           </div>
        </main>
    )
}

export default Home;