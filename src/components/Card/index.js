import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ video }) {
  return (
    <Link 
      to={`/watch/${video.id}`} 
      className={styles.card}
    >
      <img src={video.cover} alt={video.title} />
      <p>{video.title}</p>
    </Link>
  );
}
