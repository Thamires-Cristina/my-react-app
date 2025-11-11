import styles from "./Header.module.css";

function Header (){
    return(
        // Conteúdo a ser exibido JSX = html+xml( hmtl com css dentro do js)
        <header className={styles.header}>
            <>
                Aqui fica o header
            </>
        </header>
    )
}
export default Header;