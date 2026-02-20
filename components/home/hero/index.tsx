"use client"; // bunu faylın yuxarısına əlavə et
import Button from "../../common/Button";
import styles from './index.module.css'
export default function Hero() {
  return (
    <section className={styles.hero} id="content">
      {/* <Header/> */}

      <div className={`${styles.heroContent} container`}>
        <h3 className={styles.heroSubtitle} data-aos="fade-down" data-aos-delay="100">
          Welcome to Turan İnşaat
        </h3>

        <h1 className={styles.heroTitle} data-aos="fade-up" data-aos-delay="200">
          Building dreams with <br />precision 
          and excellence
        </h1>

        <p className={styles.heroText} data-aos="fade-up" data-aos-delay="350">
          We specialize in turning visions into reality with exceptional
          craftsmanship and meticulous <br /> attention to detail. With years of
          experience and a commitment to quality.
        </p>

        <div className={styles.heroActions} data-aos="zoom-in" data-aos-delay="500">
               <Button text={'Öz hovuzunu yarat'} link={"/create"} type={2}/>
               <Button text={'Bizim layihələrimiz'} link={"/create"} type={4}/>

          
         
        </div>
      </div>
    </section>
  );
}
