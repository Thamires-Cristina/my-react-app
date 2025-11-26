import styles from "./Header.module.css";
import logo from "../Logo/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <img src={logo} alt="NetMovies" className={styles.logo} />

        <nav className={styles.nav}>
          <Link to="/">INÍCIO</Link>
          <Link to="/sobre">SOBRE</Link>
          <Link to="/contato">CONTATO</Link>
        </nav>
      </div>
    </header>
  );
}
