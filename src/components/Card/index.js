import styles from "./Card.module.css";

export default function Card({ video }) {
  return (
    <a href={video.url} target="_blank" rel="noreferrer" className={styles.card}>
      <img src={video.cover} alt={video.title} />
      <p>{video.title}</p>
    </a>
  );
}
