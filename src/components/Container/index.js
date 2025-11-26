import { useState } from "react";
import videos from "../Videos/videos.json";
import Category from "../Category";
import styles from "./Container.module.css";

export default function Container() {
  const [search, setSearch] = useState("");


  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  const categories = [...new Set(filteredVideos.map(v => v.category))];

  return (
    <main className={styles.container}>

      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Buscar filmes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />
      </div>
      {categories.length > 0 ? (
        categories.map(category => (
          <Category
            key={category}
            title={category}
            videos={filteredVideos.filter(v => v.category === category)}
          />
        ))
      ) : (
        <p className={styles.noResults}>Nenhum vídeo encontrado</p>
      )}
    </main>
  );
}
