import styles from './page.module.css'

export default function Header (){
    return (
        <header>
            <div className={styles.headerWrapper}>
                <h2 className={styles.title}>Les notes de mon moulin</h2>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem1}>Présentation</li>
                        <li className={styles.navItem2}>Ambiances</li>
                        <li className={styles.navItem3}>Prestations</li>
                        <li className={styles.navItem4}>Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}