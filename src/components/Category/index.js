
import styles from "./Category.module.css";

export default function Category({ title, videos }) {
  return (
    <section className={styles.categorySection}>
      <h2 className={styles.categoryTitle}>{title}</h2>

      <div className={styles.videosGrid}>
        {videos.map((video) => (
          <div className={styles.card} key={video.id}>
            <img
              className={styles.thumbnail}
              src={video.cover}
              alt={video.title}
            />
            <p className={styles.videoTitle}>{video.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
