import styles from "./Category.module.css";
import { Link } from "react-router-dom";

export default function Category({ title, videos }) {
  return (
    <section className={styles.categorySection}>
      <h2 className={styles.categoryTitle}>{title}</h2>

      <div className={styles.videosGrid}>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}

function VideoCard({ video }) {
  return (
    <Link 
      to={`/watch/${video.id}`} 
      className={styles.card}
    >
      <img
        className={styles.thumbnail}
        src={video.cover}
        alt={video.title}
      />
      <p className={styles.videoTitle}>{video.title}</p>
    </Link>
  );
}
