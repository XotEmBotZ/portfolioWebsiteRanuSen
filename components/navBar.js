import styles from '../styles/navBar.module.css'
import Link from 'next/link'

export default function NavBar() {
    return (
        <nav id="navBar" className={styles.nav}>
            <ul id="navUl" className={styles.navUl}>
                <li className={styles.navUlLi}><Link href="/">Home</Link></li>
                <li className={styles.navUlLi}><Link href="/about">About</Link></li>
                <li className={styles.navUlLi}><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}