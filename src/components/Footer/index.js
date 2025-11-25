// src/components/Footer/index.js
import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>© 2025 NetMovies — Seu universo de filmes, em um só lugar.</p>
      </div>
    </footer>
  );
}
