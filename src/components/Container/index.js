import videos from "../Videos/videos.json";
import Category from "../Category";
import styles from "./Container.module.css";

export default function Container() {
  const categories = [...new Set(videos.map(v => v.category))];

  return (
    <main className={styles.container}>
      {categories.map(category => (
        <Category
          key={category}
          title={category}
          videos={videos.filter(v => v.category === category)}
        />
      ))}
    </main>
  );
}
