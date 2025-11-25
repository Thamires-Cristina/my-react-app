import styles from "./Header.module.css";
import logo from "../Logo/logo.png";
import { Link } from "react-router-dom"; 

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <img src={logo} alt="NetMovies" className={styles.logo} />

        <nav className={styles.nav}>
          <Link to="/">INÍCIO </Link>
          <Link to="/Sobre">SOBRE </Link>
          <Link to="/Filmes">FILMES </Link>
          <Link to="/Contato">CONTATO </Link>
        </nav>
      </div>
    </header>
  );
}
