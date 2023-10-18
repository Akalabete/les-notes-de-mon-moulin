'use client'
import Image from 'next/image';
import styles from './page.module.scss';
import Header from '../component/header/page';
import Footer from '../component/footer/page';
import { useState } from 'react';


export default function Home() {

  
  const [theme, setTheme] = useState<null | "latino" | "cubano" | "ensemble">(null);
  const [selectedAmbiance, setSelectedAmbiance] = useState<string | null>(null);
  const toggleAmbiance = (ambiance:string) => {
    if (selectedAmbiance === ambiance) {
      setSelectedAmbiance(null); 
    } else {
      setSelectedAmbiance(ambiance); 
      setTheme(ambiance as "latino" | "cubano" | "ensemble");
    }
  };

  return (
    <>
    <Header />
    <main className={`${styles.main} ${selectedAmbiance ? styles.darkenedBG : ''}`}>
      <section id="presentation">
        <h2 className={styles.sectionTitles}>La musique au fil de vos événements.</h2>
        <div className={styles.presContainer}>
            <Image
              src="https://picsum.photos/200/150"
              alt="photo démo"
              className={styles.presPhoto}
              width={200}
              height={150}
              priority
            />
          
          <p>Les notes de mon moulin est un recueil de propositions musicales
            autour de la  musique cubaine et sud-américaine porté par un collectif
            de musiciens pour animer vos happenings, cocktails de mariage,
            inaugurations et soirées en Nouvelle Acquitaine.
          </p>
        </div>
      
      </section>
      <section id="prestation">
        <h2 className={styles.sectionTitles}>La musique au fil de vos événements est à votre tempo, latino-cubain</h2>
        <h3 className={styles.sectionUnderTitle}>Cliquez sur une photo pour votre démo d&apos;ambiance</h3>
        <div className={styles.ambianceContainer}>
          <div className={`${styles.latinoContainer} ${selectedAmbiance === 'latino' ? styles.brighten : styles.darken}`}
          onClick={() => toggleAmbiance('latino')}>
            <h3>Alma del sur*</h3>
            <div className={styles.ambianceDesc}>
              <Image
                src="https://picsum.photos/250/150"
                alt="photo démo"
                className={styles.presPhoto}
                width={250}
                height={150}
                priority
              />
              <p><strong>Alma del sur</strong> est un trio de musique
              sud-américaine qui est composé de congas, flûte traversière et 
              guitare baroque, le tout lié par le chant et la poésie à travers
              des histoires légendaires.</p>
            </div>
          </div>
          <div className={`${styles.cubanoContainer} ${selectedAmbiance === 'cubano' ? styles.brighten : styles.darken}`}>
            <div className={styles.ambianceDesc}
            onClick={() => toggleAmbiance('cubano')}>
              <h3>La Isabelica**</h3>
              <Image
                src="/La_isabelica.avif"
                alt="photo démo"
                className={styles.presPhoto}
                width={250}
                height={205}
                priority
              />
              <p><strong>La Isabelica</strong> est un trio de &ldquo;son cubano&ldquo;
              composé de bongos, guitare et de l&apos;indispensable guitare tres(guitare
              cubaine) qui signe par sa sonorité le son cubain dans un répertoire 
              de musique traditionnelle et populaire sélectionné pour vous. Vous 
              retrouverez de grands classiques pour ambiancer vos événements.</p>
            </div>
          </div>        
        </div>
        <div className={`${styles.ensembleContainer} ${selectedAmbiance === 'ensemble' ? styles.brighten : styles.darken}`}
            onClick={() => toggleAmbiance('ensemble')}>
          <h3>La molienda***</h3>
          <div className={styles.ambianceDesc}>
            <Image
              src="https://picsum.photos/250/150"
              alt="photo démo"
              className={styles.presPhoto}
              width={250}
              height={150}
              priority
            />
            <p><strong>La molienda</strong> est une proposition muscale des deux
            formations réunies autour de la musique cubaine composée de bongos,
            congas, guitare, tres et flûte traversière, cet ensemble se veux plus pertinent
            en rythmique et en ambiance.</p>
          </div>
        </div>
      </section>
      <section id="realisation">
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
      <section id="contact">
        <h2 className={styles.sectionTitles}>Contactez-moi pour une prestation personnalisée</h2>
        
          <div className={styles.contactContainer}>
            
            <div className={styles.imgAproposWrapper}>
              <div className={styles.contactImageWrapper}>
              <Image
                src="https://picsum.photos/200"
                alt="photo démo"
                className={styles.contactPhoto}
                width={200}
                height={200}
                priority
              />
              </div>
              <div className={styles.aPropos}>
                <p><strong>A propos de moi:</strong></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nunc hendrerit volutpat velit, id convallis sapien 
                  lobortis eu. Nulla facilisi. Ut porta eleifend interdum.
                    Vestibulum ipsum metus, aliquet porta posuere vel.</p>
              </div>
            </div>
            <div className={styles.contactInfos}>
              <p><strong>Christophe LAPOUGE</strong></p>
              <p><strong>Téléphone: </strong>06 60 58 72 41</p>
              <p><strong>Courriel: </strong>goalupe@hotmail.fr</p>
              <div className={styles.adressFlexer}>
                <div>
                  <p><strong>Adresse:</strong></p>
                </div>
                <div className={styles.adressContainer}>
                  <p className={styles.centeredAdress}>Moulin du château Jollet</p>
                  <p className={styles.centeredAdress}>2bis Grand Village</p>
                  <p className={styles.centeredAdress}>16620 Montboyer</p>
                </div>
              </div>
            </div>
          </div>
        
      </section>
    </main>
    <Footer />
    </>
  )
}
