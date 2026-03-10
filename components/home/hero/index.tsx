"use client";
import Button from "../../common/Button";
import styles from "./index.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="content">
      <div className={`${styles.heroContent} container`}>
        <h3
          className={styles.heroSubtitle}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Turan İnşaat
        </h3>

        <h1
          className={styles.heroTitle}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Premium hovuz və spa <br /> layihələrinin tikintisi
        </h1>

        <p
          className={styles.heroText}
          data-aos="fade-up"
          data-aos-delay="350"
        >
          Hovuzlar, türk hamamı, sauna və spa məkanlarının layihələndirilməsi və
          tikintisi sahəsində peşəkar xidmət təqdim edirik. Müasir texnologiya,
          keyfiyyətli materiallar və təcrübəli komandamız ilə evinizdə və
          obyektinizdə komfortlu istirahət zonaları yaradırıq.
        </p>

        <div
          className={styles.heroActions}
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <Button text={"Layihə sifariş et"} link={"/contact"} type={2} />
          <Button text={"Layihələrimizə bax"} link={"/projects"} type={4} />
        </div>
      </div>
    </section>
  );
}