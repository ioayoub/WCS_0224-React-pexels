import {Link} from "react-router-dom";

export default function NavbarLinks() {

  return (
    <>
      <li>
        <Link to="/">Accueil</Link>
      </li>
      <li>
        <Link to="/articles">Articles</Link>
      </li>
      <li>Contact</li>
    </>
  )
}