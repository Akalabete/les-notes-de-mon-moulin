import styles from './page.module.css'

export default function Header (){
    return (
        <header>
            <div className={styles.headerWrapper}>
                <h2 className={styles.title}>Les notes de mon moulin</h2>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem1}><a href="#presentation">Présentation</a></li>
                        <li className={styles.navItem2}><a href="#prestation">Ambiances</a></li>
                        <li className={styles.navItem3}><a href="#realisation">Prestations</a></li>
                        <li className={styles.navItem4}><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}