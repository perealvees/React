import styles from "./Header.module.css";

function Header () {
    return (
        <header className={styles.header}>
            <span>MovieFlix</span>
            <nav>
                <sapn>Início</sapn>
                <sapn>Home</sapn>
            </nav>
        </header>
    )
}

export default Header;