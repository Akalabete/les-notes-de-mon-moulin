'use client'
import Image from 'next/image';
import styles from './page.module.css';
import Header from '../component/header/page';
import Footer from '../component/footer/page';
import { useState } from 'react';


export default function Home() {

  
  const [theme, setTheme] = useState<null | "latino" | "cubano">(null);
  const [selectedAmbiance, setSelectedAmbiance] = useState<string | null>(null);
  const toggleAmbiance = (ambiance:string) => {
    if (selectedAmbiance === ambiance) {
      setSelectedAmbiance(null); 
    } else {
      setSelectedAmbiance(ambiance); 
      setTheme(ambiance as "latino" | "cubano");
    }
  };

  return (
    <>
    <Header />
    <main className={`${styles.main} ${selectedAmbiance ? styles.darken : ''}`}>
      <section>
        <h2 className={styles.sectionTitles}>Présentation du collectif</h2>
        <div className={styles.presContainer}>
            <Image
              src="https://picsum.photos/200/150"
              alt="photo démo"
              className={styles.presPhoto}
              width={200}
              height={150}
              priority
            />
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Cras gravida vitae nulla a dictum. Praesent porttitor porttitor
              mauris ut suscipit. Donec lorem tellus, aliquam a tellus eu,
               blandit cursus erat. Aliquam facilisis velit ut porttitor 
               convallis. Quisque sit amet consequat nisi. Nam a quam a dui 
               ullamcorper tempus. Nunc nec diam ligula. Nunc hendrerit sed 
               dolor at hendrerit. 
            Fusce vel nisi eget massa suscipit luctus. Orci varius natoque nisi.</p>
        </div>
      
      </section>
      <section>
        <h2 className={styles.sectionTitles}>Cliquez sur une photo pour votre démo d&apos;ambiance </h2>
          <div className={styles.ambianceContainer}>
            <div className={`${styles.latinoContainer} ${selectedAmbiance === 'latino' ? styles.brighten : styles.darken}`}
            onClick={() => toggleAmbiance('latino')}>
              <h3>Ambiance Latine</h3>
              <div className={styles.ambianceDesc}>
                <Image
                  src="https://picsum.photos/250/150"
                  alt="photo démo"
                  className={styles.presPhoto}
                  width={250}
                  height={150}
                  priority
                />
                <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur porttitor.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur.</p>
              </div>
            </div>
            <div className={`${styles.cubanoContainer} ${selectedAmbiance === 'cubano' ? styles.brighten : styles.darken}`}>
              <h3>Ambiance Cubaine</h3>
              <div className={styles.ambianceDesc}
              onClick={() => toggleAmbiance('cubano')}>
                <Image
                  src="https://picsum.photos/250/150"
                  alt="photo démo"
                  className={styles.presPhoto}
                  width={250}
                  height={150}
                  priority
                />
                <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur porttitor.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur.</p>
              </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className={styles.sectionTitles}>Nos prestations musicales</h2>
        <div className={styles.galleryContainer}>
        <Image
          src="https://picsum.photos/250/150"
          alt="photo démo"
          className={styles.galleryPhoto}
          width={250}
          height={150}
          priority
        />
        <Image
          src="https://picsum.photos/250/150"
          alt="photo démo"
          className={styles.galleryPhoto}
          width={250}
          height={150}
          priority
        />
        <Image
          src="https://picsum.photos/250/150"
          alt="photo démo"
          className={styles.galleryPhoto}
          width={250}
          height={150}
          priority
        />

        </div>
      
      </section>
      <section>
        <h2 className={styles.sectionTitles}>Contactez-moi pour une prestation personnalisée</h2>
        <div className={styles.contactContainer}>
          <Image
            src="https://picsum.photos/200"
            alt="photo démo"
            className={styles.contactPhoto}
            width={200}
            height={200}
            priority
          />
          <div className={styles.aPropos}>
            <p><strong>A propos de moi:</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Nunc hendrerit volutpat velit, id convallis sapien 
               lobortis eu. Nulla facilisi. Ut porta eleifend interdum.
                Vestibulum ipsum metus, aliquet porta posuere vel.</p>
          </div>
          <div className={styles.contactInfos}>
            <p><strong>Téléphone: </strong>xx xx xx xx xx</p>
            <p><strong>Courriel: </strong>Courriel@courriel.fr</p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
