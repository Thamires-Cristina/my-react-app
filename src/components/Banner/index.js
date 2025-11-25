import styles from "./Banner.module.css";
import movies from "../Logo/movies.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.inner}>
        <img src={movies} alt="Movies" className={styles.movies} />

        <div className={styles.slogan}>
          “O próximo filme que vai mudar seu dia está a um clique.”
        </div>
      </div>
    </div>
  );
}
