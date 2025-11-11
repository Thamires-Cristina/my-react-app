import Card from "../Card";
import styles from "./Category.module.css";

export default function Category({ title, videos }) {
  return (
    <div className={styles.category}>
      <h2>{title}</h2>
      <div className={styles.row}>
        {videos.map(video => (
          <Card key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
