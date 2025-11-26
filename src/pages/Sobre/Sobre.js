import Footer from "../../components/Footer";
import Header from "../../components/Header/index";
import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <>
      <Header />

      <div className={styles.container}>
        <h1 className={styles.titulo}>Sobre Nós</h1>

        <p className={styles.descricao}>
          A NET Movies é uma plataforma criada para reunir filmes de diversos
          gêneros em um só lugar. Nosso objetivo é facilitar sua escolha,
          oferecendo sugestões e uma experiência visual agradável.
        </p>

        <p className={styles.descricao}>
          Amamos cinema e acreditamos que cada filme tem o poder de transformar
          o dia de alguém. Aqui, você encontra recomendações, categorias
          organizadas e um catálogo sempre em expansão.
        </p>

        <p className={styles.frase}>
          “O próximo filme que vai mudar seu dia está a um clique.”
        </p>
      </div>
      <Footer/>
    </>
  );
}
