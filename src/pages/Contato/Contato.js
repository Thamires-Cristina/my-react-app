import Footer from "../../components/Footer";
import Header from "../../components/Header/index";
import styles from "./Contato.module.css";

export default function Contato() {
  return (
    <>
      <Header />

      <div className={styles.container}>
        <h1 className={styles.titulo}>Contato</h1>

        <p className={styles.descricao}>
          Entre em contato com a equipe da NET Movies pelos canais oficiais abaixo.
        </p>

        <div className={styles.card}>
          <h2>📧 Email</h2>
          <p>suporte@netmovies.com</p>
        </div>

        <div className={styles.card}>
          <h2>📞 Telefone</h2>
          <p>(21) 99999-9999</p>
        </div>

        <div className={styles.card}>
          <h2>📍 Endereço</h2>
          <p>Avenida das Américas, 5000 — Rio de Janeiro, RJ</p>
        </div>

        <div className={styles.card}>
          <h2>⏰ Horário de atendimento</h2>
          <p>Segunda a Sexta — 08h às 18h</p>
        </div>
      </div>
      <Footer/>
    </>
  );
}
