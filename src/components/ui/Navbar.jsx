import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faHome, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Navbar = () => {
  return (
    <section className="navbar">
        <a href="/"> <FontAwesomeIcon icon={faHome} size="2x"/> </a>
        <a href="/explore"> <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" /> </a>
        <a href="/profile"> <FontAwesomeIcon icon={faUser} size="2x" /> </a>
    </section>
  )
}

export default Navbar
