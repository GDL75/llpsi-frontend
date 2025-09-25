import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div>llpsi coloribus</div>
      <div className={styles.connection}>
        <div>Capituli</div>
        <div>Grammatica</div>
        <div>Pensa</div>
      </div>
      <div>Lingua</div>
    </header>
  );
}

export default Header;