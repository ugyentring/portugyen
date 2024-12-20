import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import "../global.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>UtLogo</div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><Link to="/" className={styles.navLink}>Home</Link></li>
          <li><Link to="/about" className={styles.navLink}>About</Link></li>
          <li><Link to="/contact" className={styles.navLink}>Contact</Link></li>
          <li><Link to="/services" className={styles.navLink}>Services</Link></li>
          <li><Link to="/works" className={styles.navLink}>Works</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
