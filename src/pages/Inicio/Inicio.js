import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import "./Inicio.module.css";

function Inicio({ search, setSearch }) {
  return (
    <div>
      <Header search={search} setSearch={setSearch} />
      <Banner />
      <Container search={search} />
      <Footer />
    </div>
  );
}

export default Inicio;

