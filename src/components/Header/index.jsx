import Navbar from "../Navbar"
import "./style.css"
const Header = ({currentPage, handlePageChange}) => {
    return (
        <header>
        <h1>Travis Nielson Portfolio</h1>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    );
}
export default Header;