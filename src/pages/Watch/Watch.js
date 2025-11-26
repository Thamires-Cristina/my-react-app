import { useParams, Link } from "react-router-dom";
import styles from "./Watch.module.css";

export default function Watch() {
  const { id } = useParams();

  return (
    <div className={styles.container}>
      
      <Link to="/" className={styles.backButton}>
        Voltar
      </Link>

      <h1 className={styles.title}>Assistindo agora</h1>

      <div className={styles.playerWrapper}>
        <iframe
          className={styles.player}
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title="Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
