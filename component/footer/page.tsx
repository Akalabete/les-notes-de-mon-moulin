import styles from './page.module.css';

export default function Footer(){
    return(
        <footer>
            <div className={styles.footerWrapper}>
                <div className={styles.footerItem}>
                   <p> ©️ Dev&apos;your Synergy </p>
                </div>
            </div>
        </footer>
    )
}